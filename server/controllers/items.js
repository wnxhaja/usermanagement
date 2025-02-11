const { Item } = require('../models');
const { Create, Read, Update, Delete } = require('./crudControllers');

const createItem = async (data) => {
  const Model = new Create(Item);
  const result = await Model.create(data);
  return result;
};

const readItem = async (id, params) => {
  const Model = new Read(Item);
  const result = await Model.read(id, params);
  return result;
};

const updateItem = async (id, data) => {
  const Model = new Update(Item);
  const result = await Model.update(id, data);
  return result;
};

const deleteItem = async (id) => {
  const Model = new Delete(Item);
  await Model.remove(id);
};

module.exports = { createItem, readItem, updateItem, deleteItem };

