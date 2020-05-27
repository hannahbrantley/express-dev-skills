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
    newSkillObj.language = newSkillObj.language;
    newSkillObj.level = newSkillObj.level;
    skills.push(newSkillObj);
  }

  function getAll() {
      return skills;
  }

  function getOneSkill(skillId) {
      return skills.find(skill => skill.id === parseInt(skillId));
  }

  function updateOneSkill(skillId, skillObj) {
      const foundSkill = skills.find(skill => skill.id === parseInt(skillId));
      Object.assign(foundSkill, skillObj);
  }

  module.exports = {
      getAll,
      getOneSkill, 
      createNewSkill, 
      deleteOne, 
      updateOneSkill
  };

