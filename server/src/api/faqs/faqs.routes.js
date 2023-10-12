const express = require('express');
const schemas = require('./faqs.schemas');
const controller = require('./faqs.controller');
const middlewares = require('./faqs.middlewares');

// create router instance
const router = express.Router();

// define routes with controller functions
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post(
  '/',
  middlewares.validateSchema(schemas.upload),
  middlewares.isUniqueQuestion,
  controller.post,
);
router.patch(
  '/:id',
  middlewares.validateSchema(schemas.update),
  middlewares.isUniqueQuestion,
  controller.patch,
);
router.delete('/:id', controller.del);

module.exports = router;
