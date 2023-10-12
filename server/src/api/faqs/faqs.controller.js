const faqs = require('./faqs.model');

const getAll = async (req, res, next) => {
  try {
    const result = await faqs.find({});
    res.json({ result });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    // destructure id from req.params
    const {
      params: { id: _id },
    } = req;

    const result = await faqs.findOne({ _id });

    res.json({ result });
  } catch (error) {
    next(error);
  }
};

const post = async (req, res, next) => {
  try {
    const { body } = req;

    const result = await faqs.insert(body);

    res.json({ result });
  } catch (error) {
    next(error);
  }
};

const patch = async (req, res, next) => {
  try {
    const {
      params: { id: _id },
      body,
    } = req;

    const result = await faqs.findOneAndUpdate(
      { _id },
      {
        $set: { ...body },
      },
    );

    if (!result) throw new Error('Failed to delete faq with the given ID.');

    res.json({ result });
  } catch (error) {
    next(error);
  }
};

const del = async (req, res, next) => {
  try {
    const {
      params: { id: _id },
    } = req;

    const result = await faqs.findOneAndDelete({ _id });

    // if the delete was unsucessful respond with a specified error message
    if (!result) throw new Error('Failed to delete faq with the given ID.');

    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, get, post, patch, del };
