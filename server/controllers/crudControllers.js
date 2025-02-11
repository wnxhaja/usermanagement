const models = require('../models');

class BaseController {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    throw new Error('Method "create" not implemented');
  }

  async read(id,params) {
    throw new Error('Method "read" not implemented');
  }

  async update(id, data) {
    throw new Error('Method "update" not implemented');
  }

  async remove(id) {
    throw new Error('Method "remove" not implemented');
  }
}

class Create extends BaseController {
  constructor(model) {
    super(model);
  }

  async create(data) {
    const item = await this.model.create(data);
    return item;
  }
}

class Read extends BaseController {
  constructor(model) {
    super(model);
  }

  async read(id, params) {
    const {query:{limit, offset} } = params;
    if (id) {
      const item = await this.model.findByPk(id);
      return item;
    } else {

      const { count, rows } = await this.model.findAndCountAll({
        limit,
        offset,
      });

      return  {total: count, data: rows};
    }
  }
}

class Update extends BaseController {
  constructor(model) {
    super(model);
  }

  async update(id, data) {
    const item = await this.model.findByPk(id);
    await item.update(data);
    return item;
  }
}

class Delete extends BaseController {
  constructor(model) {
    super(model);
  }

  async remove(id) {
    const item = await this.model.findByPk(id);
    await item.destroy();
  }
}

module.exports = { Create, Read, Update, Delete };