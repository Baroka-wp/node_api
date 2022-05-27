const mongoose = require('mongoose');

const StudentsModel = mongoose.model(
  "node-api",
  {
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    }
  },
  "students"
);

module.exports = StudentsModel ;
