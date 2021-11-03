const express = require('express');
const router = express.Router();
const ejs = require('ejs');

router.get('/', (req, res) => {
    res.render("../../applications/views/landing");
    // let people = ['geddy', 'neil', 'alex'];
    // ejs.render('<%= people.join(", "); %>', {people: people});
})

module.exports = router;