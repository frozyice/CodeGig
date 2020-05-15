const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../modules/Gig')

router.get('/', (req, res) =>
    Gig.findAll()
        .then(gigs => {
            console.log(gigs);
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => console.log(err)));

router.get('/add', (req,res) => res.render('add'));

router.post('/add', (req, res) => {
    const data = {
        title: 'dummy',
        technologies: 'dummy',
        budget: '3000',
        description: 'dummy',
        contact_email: 'dummy'
    }

    let { title, technologies, budget, description, contact_email } = data;

    Gig.create({
        title, technologies, budget, description, contact_email
    })
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log(err));
});

module.exports = router;