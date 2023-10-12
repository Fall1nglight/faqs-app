const faqs = require('./faqs.model');

const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(422);
    next(error);
  }
};

const isUniqueQuestion = async (req, res, next) => {
  try {
    const {
      body: { question },
    } = req;

    // if it is a PATCH request, the question property could be empty
    if (!question) return next();

    const faq = await faqs.findOne({ question });

    if (faq)
      throw new Error(
        'This question has been asked before. Please try a unique one!',
      );

    next();
  } catch (error) {
    res.status(409);
    next(error);
  }
};

module.exports = { validateSchema, isUniqueQuestion };
