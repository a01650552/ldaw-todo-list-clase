const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);

router.post('/tasks', tasksController.store);

router.post('/tasks/:id/done', tasksController.doneStatus);

router.post('/tasks/:id/delete', tasksController.delete);

module.exports = router;
