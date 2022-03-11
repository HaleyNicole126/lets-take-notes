const path = require('path');
const router = require('express').Router();

// this creates the route to serve the landing page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// this creates the route to serve the notes page 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// this creates a wildcard route to load the landing page if the client makes a request for an undefined route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
