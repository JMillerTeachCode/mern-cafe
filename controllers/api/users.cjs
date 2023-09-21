const User = require('../../models/user.cjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
};

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // Query our database to find a user with the email provided
    // Using filter object to find User with the given email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error('User Not Found');
    // if we found the email, compare password
    // 1st argument from the credentials that the user typed in
    // 2nd argument what's stored in the database
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();

    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json('Bad Crendentials');
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log(req.user);
  //sending the expiration date to the client (frontend)
  res.json(req.exp);
}

/*-- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}
