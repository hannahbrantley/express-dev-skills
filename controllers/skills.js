const skillDB = require('../models/skill');

function index(req, res, next){
    res.render('skills/index', {
        skills: skillDB.getAll()
    })
}

function show(req, res, next){
    res.render('skills/show', {
        skill: skillDB.getOne(req.params.id)
    })
}

module.exports = {
    index, 
    show
}