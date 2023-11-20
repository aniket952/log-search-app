const mongoose = require('mongoose');
const service_config = require('../helpers/services');

module.exports.connect = async (req, res, next) => {
  try {
    await mongoose.connect(service_config.mongodb_database_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    next();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
