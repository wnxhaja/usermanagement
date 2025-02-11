
const {createLog} = require('../controllers/logs');

const logAction = async (action, model, details) => {
  return await createLog({
    action,
    model,
    details,
    timestamp: new Date(),
  });
};

module.exports = logAction;