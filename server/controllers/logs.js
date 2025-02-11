const { Log} = require('../models');
const { Create, Read, Update, Delete } = require('./crudControllers');

const createLog= async (data) => {
  const Model = new Create(Log);
  const result = await Model.create(data);
  return result;
};

const readLog= async (id) => {
  const Model = new Read(Log);
  const result = await Model.read(id);
  return result;
};

const updateLog= async (id, data) => {
  const Model = new Update(Log);
  const result = await Model.update(id, data);
  return result;
};

const deleteLog= async (id) => {
  const Model = new Delete(Log);
  await Model.remove(id);
};

module.exports = { createLog, readLog, updateLog, deleteLog};
