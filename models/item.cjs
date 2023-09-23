const { model } = require('mongoose');

// Ensure the Category model is processed by Mongoose
// require function executes the file first and then grabs the exports
require('./category.cjs');

const itemSchema = require('./itemSchema.cjs');

module.exports = model('Item', itemSchema);
