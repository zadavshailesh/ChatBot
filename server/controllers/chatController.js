const User = require("../models/User");

// controller to fetch messages
const chat_index = (req, res) => {
  // fetch the id of the user stored by auth middleware
  const id = req.user.id;

  // return the user's data except for the password
  User.findById(id)
    .select("-password")
    .then(user => res.json(user));
};

module.exports = { chat_index };
