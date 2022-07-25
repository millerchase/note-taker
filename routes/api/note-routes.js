const router = require("express").Router();

router.post("/notes", (req, res) => {
  // set id based off of length of notes
  req.body.id = notes.length.toString();

  // add note to json file
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
