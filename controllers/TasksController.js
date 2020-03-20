const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.findByID(id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.doneStatus = (req, res) => {
  //si el id viene en la url
  //let taskId = req.params.id;
  
  // si el id viene de un input
  let taskId = req.body.id
  
 Task.findByID(taskId).then((data) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.updateDone(data.id).then((data) => {
        Task.findByID(taskId).then((task) => res.json(task));
      });
    } else {
      res.redirect('/');
    }
 });
}

exports.delete = (req, res) => {
 let taskId = req.body.id
  
 Task.findByID(taskId).then((data) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.deleteByID(data.id).then((data) => {
        console.log(data);
        res.json(taskId);
      });
    } else {
      res.redirect('/');
    }
 });
}
