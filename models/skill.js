const skills = [
    {id: 1, language: 'HTML', level: 'beginner'},
    {id: 2, language: 'CSS', level: 'beginner'},
    {id: 3, language: 'JavaScript', level: 'beginner'},
    {id: 4, language: 'Node.js', level: 'beginner'}
  ];

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function createNewSkill(newSkillObj) {
    newSkillObj.id = Date.now() % 1000000;
    newSkillObj.language = newSkillObj.skill;
    newSkillObj.level = 'beginner';
    skills.push(newSkillObj);
  }

  function getAll() {
      return skills;
  }

  function getOne(id) {
      return skills.find(skill => skill.id === parseInt(id));
  }

  module.exports = {
      getAll,
      getOne, 
      createNewSkill, 
      deleteOne
  };

