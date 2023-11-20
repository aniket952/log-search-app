const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema(
  {
    level: { type: String, lowercase: true, required: true },
    message: { type: String, required: true },
    resourceId: { type: String, required: true },
    timestamp: { type: Date, required: true },
    traceId: { type: String, required: true },
    spanId: { type: String, required: true },
    commit: { type: String, required: true },
    metadata: {
      parentResourceId: { type: String, required: false },
    },
  },
  { timestamps: true }
);

const LogModel = mongoose.model('Log', LogSchema);

module.exports = LogModel;
