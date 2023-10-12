const db = require('../../db/connection');

const faqs = db.get('faqs');

module.exports = faqs;
