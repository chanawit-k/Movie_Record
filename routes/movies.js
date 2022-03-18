const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Movie = require('../models/Movie');

// @route   GET api/movie
// @desc    Get all movie
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/movie
// @desc    Add new movie
router.post(
    '/',
    check('title', 'Title is required').not().isEmpty(),
    check('yearRelease', 'Year Release is required').not().isEmpty(),
    check('rate', 'Rate is required').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, yearRelease, rate } = req.body;
        try {
            const newMovie = new Movie({
                title,
                yearRelease,
                rate,
            });
            const movie = await newMovie.save();
            res.json(movie);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   PUT api/movie/:id
// @desc    Update movie
router.put('/:id', async (req, res) => {
    const { title, yearRelease, rate } = req.body;

    // Build movie object
    const movieFields = {};
    if (title) movieFields.title = title;
    if (yearRelease) movieFields.yearRelease = yearRelease;
    if (rate) movieFields.rate = rate;

    try {
        let movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ msg: 'movie not found' });

        movie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: movieFields },
            { new: true }
        );
        res.json(movie);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/contacts/:id
// @desc    Add new contact
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ msg: 'Movie not found' });
        await Movie.findByIdAndRemove(req.params.id);
        res.json({ msg: 'movie removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
