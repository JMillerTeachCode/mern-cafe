// Connect to the database
require('dotenv').config();
const db = require('./config/database.cjs');

// Require the Mongoose models
// const User = require('./models/user.cjs');
// const Item = require('./models/item.cjs');
// const Category = require('./models/category.cjs');
const Order = require('./models/order.cjs');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

Order.create({
  user: '650c5044634a36ed1fa27377',
  isPaid: true,
  lineItems: [
    {
      qty: 5,
      item: {
        name: 'Hamburger',
        emoji: '🍔',
        price: 5.95,
      },
    },
    {
      qty: 2,
      item: {
        name: 'Turkey Sandwich',
        emoji: '🥪',
        price: 6.95,
      },
    },
  ],
})
  .then((order) => {
    console.log(order);
  })
  .finally(() => {
    db.close();
  });

// {
//   name: 'Hamburger',
//   emoji: '🍔',
//   category: categories[0]._id,
//   price: 5.95,
// },
// {
//   name: 'Turkey Sandwich',
//   emoji: '🥪',
//   category: categories[0]._id,
//   price: 6.95,
// },
