const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';

exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}

exports.updateDone = (taskID) => {
  return knex('tasks')
  .where('id', '=', taskID)
  .update('status', this.DONE);
}

exports.findByID = (id) => {
  return knex
  .select('*')
  .from('tasks')
  .where('id', id)
  .first();
}

exports.deleteByID = (id) => {
  return knex
    .from('tasks')
    .where('id', id)
    .del();
}

