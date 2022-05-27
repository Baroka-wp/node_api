const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://Baroka:aLqLkDLx5K2CVEKg@cluster0.d2ay3id.mongodb.net/node-api",
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  console.log("Database connected")
);
