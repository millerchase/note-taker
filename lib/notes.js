const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

function createNewNote(body, notesArray) {
  // set id based off of length of notes
  const note = { id: uniqid(), title: body.title, text: body.text };

  // add note to db
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  // return finished code to post route for response
  return notesArray;
}

module.exports = { createNewNote };
