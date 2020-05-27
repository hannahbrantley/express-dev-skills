const Skill = require('../models/skill');

module.exports = {
    index, 
    show,
    new: newSkill, 
    create,
    delete: deleteSkill, 
    edit, 
    update
};

function update(req, res) {
    Skill.updateOneSkill(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    const skill = Skill.getOneSkill(req.params.id);
    res.render('skills/edit', {skill});
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
        skill: Skill.getOneSkill(req.params.id)
    })
}

function deleteSkill(req, res, next) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

