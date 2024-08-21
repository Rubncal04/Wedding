const cors = require('cors');
const createError = require('http-errors');

const WHITELIST = {
  'http://localhost:3307': true,
  'http://localhost:5173': true, //PRODUCTION
  'http://localhost:5174': true, //DEVELOPMENT
  'http://localhost:5172': true,
  'https://wedding-page-nine.vercel.app': true,
};

const CORS_OPTION = {
  origin:  (origin, next) => {
    if (WHITELIST[origin] || !origin) {
      next(null, true);
    } else {
      next(createError(401, 'Not allowed by CORS'));
    }
  },
  maxAge: 86400,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Accept', 'Content-Type', 'authorization', 'Content-Disposition', 'Access-Control-Allow-Origin'],
};

module.exports = () => cors(CORS_OPTION);
