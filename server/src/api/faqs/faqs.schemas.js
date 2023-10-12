const Joi = require('joi');

const upload = Joi.object({
  question: Joi.string().min(4).max(100).regex(/\?$/).required().messages({
    'string.pattern.base': '{#label} must end with a question mark (?).',
  }),

  answer: Joi.string().min(4).max(100).required(),
});

const update = Joi.object({
  question: Joi.string().min(4).max(100).regex(/\?$/).messages({
    'string.pattern.base': '{#label} must end with a question mark (?).',
  }),

  answer: Joi.string().min(4).max(100),
}).or('question', 'answer');

module.exports = { upload, update };
