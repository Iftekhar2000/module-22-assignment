const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressSanitizer());

// Implementing Routes
const routeFiles = require('fs').readdirSync(__dirname + '/src/routes').filter(file => file.endsWith('.js'));
routeFiles.forEach(file => app.use('/api', require(`./src/routes/${file}`)));

// Error handling middleware (Catch-all route for unmatched routes)
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
