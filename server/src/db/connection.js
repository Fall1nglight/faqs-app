const monk = require('monk');

const { DB_URI } = process.env;
const db = monk(DB_URI);

db.then(() => console.log('Successfully connected to mongodb database'));

module.exports = db;
