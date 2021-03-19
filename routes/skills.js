var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();

// require the controller that exports Skill CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths start with /skills

/* GET skills listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update)

module.exports = router;
