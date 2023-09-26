const express = require('express');
const app = express();
const port = process.env.RUNNING_PORT || 8080;

const mongoose = require('mongoose');

// MongoDB connection URL (replace with your actual URL)
const mongoDBUrl = 'mongodb://127.0.0.1:27017/';

// Connect to MongoDB
mongoose
  .connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Now that the database is connected, you can start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const mainApp = require('./app');
const baseApiUrl = '/api';
app.use(baseApiUrl, mainApp);
