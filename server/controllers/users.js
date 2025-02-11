const { User } = require('../models');
const { Create, Read, Update, Delete } = require('./crudControllers');

const createUser = async (data) => {
  const Model = new Create(User);

  const result = await Model.create(data);
  return result;
};

const readUser = async (id =null, params = {}) => {
  const Model = new Read(User);
  const result = await Model.read(id, params);
  return result;
};

const updateUser = async (id, data) => {
  const Model = new Update(User);
  const result = await Model.update(id, data);
  return result;
};

const deleteUser = async (id) => {
  const Model = new Delete(User);
  await Model.remove(id);
};

module.exports = { createUser, readUser, updateUser, deleteUser };
