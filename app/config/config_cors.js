const cors = require('cors');
const createError = require('http-errors');

const WHITELIST = {
  'http://localhost:3307': true,
  'https://www.bkdssl.horussmartenergyapp.com': true, //PRODUCTION
  'https://www.bkddev.horussmartenergyapp.com': true, //DEVELOPMENT
  'https://www.hsestaging.horussmartenergyapp.com': true,
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
