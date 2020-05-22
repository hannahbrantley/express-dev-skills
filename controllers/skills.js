const Skill = require('../models/skill');

module.exports = {
    index, 
    show,
    new: newSkill, 
    create,
    delete: deleteSkill, 
}

function create(req, res, next) {
    Skill.createNewSkill(req.body);
    res.redirect('/skills');
}

function newSkill(req, res, next) {
    res.render('skills/new');
  }

function index(req, res, next) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req, res, next) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function deleteSkill(req, res, next) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
