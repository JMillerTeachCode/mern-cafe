require('dotenv').config();
require('./database.cjs');

const Category = require('../models/category.cjs');
const Item = require('../models/item.cjs');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Sandwiches', sortOrder: 10 },
    { name: 'Seafood', sortOrder: 20 },
    { name: 'Mexican', sortOrder: 30 },
    { name: 'Italian', sortOrder: 40 },
    { name: 'Sides', sortOrder: 50 },
    { name: 'Desserts', sortOrder: 60 },
    { name: 'Drinks', sortOrder: 70 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Hamburger',
      emoji: '🍔',
      category: categories[0]._id,
      price: 5.95,
    },
    {
      name: 'Turkey Sandwich',
      emoji: '🥪',
      category: categories[0]._id,
      price: 6.95,
    },
    { name: 'Hot Dog', emoji: '🌭', category: categories[0]._id, price: 3.95 },
    {
      name: 'Crab Plate',
      emoji: '🦀',
      category: categories[1]._id,
      price: 14.95,
    },
    {
      name: 'Fried Shrimp',
      emoji: '🍤',
      category: categories[1]._id,
      price: 13.95,
    },
    {
      name: 'Whole Lobster',
      emoji: '🦞',
      category: categories[1]._id,
      price: 25.95,
    },
    { name: 'Taco', emoji: '🌮', category: categories[2]._id, price: 1.95 },
    { name: 'Burrito', emoji: '🌯', category: categories[2]._id, price: 4.95 },
    {
      name: 'Pizza Slice',
      emoji: '🍕',
      category: categories[3]._id,
      price: 3.95,
    },
    {
      name: 'Spaghetti',
      emoji: '🍝',
      category: categories[3]._id,
      price: 7.95,
    },
    {
      name: 'Garlic Bread',
      emoji: '🍞',
      category: categories[3]._id,
      price: 1.95,
    },
    {
      name: 'French Fries',
      emoji: '🍟',
      category: categories[4]._id,
      price: 2.95,
    },
    {
      name: 'Green Salad',
      emoji: '🥗',
      category: categories[4]._id,
      price: 3.95,
    },
    {
      name: 'Ice Cream',
      emoji: '🍨',
      category: categories[5]._id,
      price: 1.95,
    },
    { name: 'Cup Cake', emoji: '🧁', category: categories[5]._id, price: 0.95 },
    { name: 'Custard', emoji: '🍮', category: categories[5]._id, price: 2.95 },
    {
      name: 'Strawberry Shortcake',
      emoji: '🍰',
      category: categories[5]._id,
      price: 3.95,
    },
    { name: 'Milk', emoji: '🥛', category: categories[6]._id, price: 0.95 },
    { name: 'Coffee', emoji: '☕', category: categories[6]._id, price: 0.95 },
    { name: 'Mai Tai', emoji: '🍹', category: categories[6]._id, price: 8.95 },
    { name: 'Beer', emoji: '🍺', category: categories[6]._id, price: 3.95 },
    { name: 'Wine', emoji: '🍷', category: categories[6]._id, price: 7.95 },
  ]);

  console.log(items);

  process.exit();
})();
