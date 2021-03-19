let skills = [
  {id: 123456, skill: 'Javascript', yearInvented: 1995, wikiLink: 'https://en.wikipedia.org/wiki/JavaScript'},
  {id: 456789, skill: 'HTML', yearInvented: 1993, wikiLink: 'https://en.wikipedia.org/wiki/HTML'},
  {id: 789123, skill: 'CSS', yearInvented: 1994, wikiLink: 'https://en.wikipedia.org/wiki/CSS'},
  {id: 123789, skill: 'Node.js', yearInvented: 2009, wikiLink: 'https://en.wikipedia.org/wiki/Node.js'},
  {id: 789456, skill: 'Express', yearInvented: 2010, wikiLink: 'https://en.wikipedia.org/wiki/Express.js'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  // convert string to number b/c url params are strings
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.yearInvented = 'placeholder';
  skill.wikiLink = 'https://en.wikipedia.org/wiki/Software_engineering';
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, skill) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skill.id = id;
  skill.yearInvented = 'placeholder';
  skill.wikiLink = 'https://en.wikipedia.org/wiki/Software_engineering';
  skills.splice(idx, 1, skill);
}