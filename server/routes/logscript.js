const express = require('express');
const router = express.Router();
const LogModel = require('../models/log');

router.post('/data', async (req, res) => {
  try {
    const logsData = req.body; // Array of log objects

    console.log('Saving logs:', logsData);

    // Map each logData to a new LogModel instance
    const logModels = logsData.map((logData) => new LogModel(logData));

    // Use Promise.all to concurrently save all logs
    await Promise.all(logModels.map((logModel) => logModel.save()));

    console.log('All logs saved successfully');
    res.status(200).json({ message: 'JSON data received and saved successfully' });
  } catch (error) {
    console.error('Error processing logs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
