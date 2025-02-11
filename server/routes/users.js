const express = require('express');
const router = express.Router();
const {createUser,readUser,updateUser,deleteUser} = require('../controllers/users');
const logAction = require('../utils/logAction');
const zodParser = require('../middlewares/zodParser');
const usersSchema = require('../schemas/users');

router.post('/', zodParser(usersSchema), async (req, res) => {
  try {
    const user = await createUser(req.body);
    await logAction('create', 'User', { data: user });
     
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await readUser(null, {query: req.query});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    
    const user = await readUser(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', zodParser(usersSchema), async (req, res) => {
  
  const {params: {id}, body} = req;
  try {
    const user = await readUser(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    const updatedUser = await updateUser(id, body);
    await logAction('update', 'User', { data: updatedUser });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const user = await readUser(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    await deleteUser(req.params.id);
    await logAction('delete', 'User', { data: user });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
