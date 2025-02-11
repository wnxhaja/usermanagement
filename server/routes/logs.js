const express = require('express');
const router = express.Router();
const { Log } = require('../models');


router.get('/', async (req, res) => {
  try {
    const logs = await Log.findAll();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
