const router = require('express').Router();
const { createNewNote, findById } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// this creates a route to read db.json file
router.get('/notes', (req, res) => {
    res.json(notes);
});

// this creates a route to add new notes to the db.json file using the createNewNote function declared in the notes.js file 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(note);
});

// this creates a route to find individual notes by the id
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// this creates a route to handle delete requests 
router.delete('/notes/:id', (req, res) => {
    const noteIndex = findById(req.params.id, notes)

    if (noteIndex === -1) return res.status(404).json({})

    notes.splice(noteIndex, 1)
    res.json(notes)

});

module.exports = router;