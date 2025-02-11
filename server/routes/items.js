const express = require('express');
const router = express.Router();
const {createItem,readItem,updateItem,deleteItem} = require('../controllers/items');
const logAction = require('../utils/logAction');
const zodParser = require('../middlewares/zodParser');
const itemsSchema = require('../schemas/items');

router.post('/', zodParser(itemsSchema), async(req, res) => {
  try {
    const item = await createItem(req.body);

    await logAction('create', 'Item', { data: item });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async(req, res) => {
  try {
    const items = await readItem(null, {query: req.query});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async(req, res) => {
  try {
    const item = await readItem(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', zodParser(itemsSchema), async(req, res) => {
  try {
    const item = await readItem(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    
    const updatedItem = await updateItem(req.body);
    await logAction('update', 'Item', { data: updatedItem });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const item = await readItem(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    
    const deletedItem = await deleteItem();
    await logAction('delete', 'Item', { data:deletedItem });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
