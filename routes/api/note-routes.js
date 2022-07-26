const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { createNewNote } = require('../../lib/notes');

// let is used for fixing delete issues
let notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/notes', ({ body }, res) => {
  const notesArray = createNewNote(body, notes);
  res.json(notesArray);
});

router.delete('/notes/:id', (req, res) => {
  notes = notes.filter(note => note.id !== req.params.id);

  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );
  res.json(notes);
});

module.exports = router;
