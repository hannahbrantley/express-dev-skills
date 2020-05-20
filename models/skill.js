const skills = [
    {id: 1, language: 'HTML', level: 'beginner'},
    {id: 2, language: 'CSS', level: 'beginner'},
    {id: 3, language: 'JavaScript', level: 'beginner'},
    {id: 4, language: 'Node.js', level: 'beginner'}
  ];


  function getAll() {
      return skills;
  }

  function getOne(id) {
      return skills.find(skill => skill.id === parseInt(id));
  }

  module.exports = {
      getAll,
      getOne
  };

