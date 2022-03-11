const fs = require('fs');
const path = require('path');

// this function creates a new note and adds it to the db.json file
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// this function filters the notes by their id
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// function that deletes notes based on the id parameter
// function deleteById(id, notesArray) {

// }

module.exports = {
    createNewNote,
    findById
};