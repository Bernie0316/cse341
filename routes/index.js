const route = require('express').Router();
const lesson1Controller = require('../controllers/lesson1Controller');

route.get('/', lesson1Controller.indexRoute);
route.get('/try', lesson1Controller.tryRoute);

module.exports = route;