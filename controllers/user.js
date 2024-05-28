/** @format */

const { where } = require("sequelize");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

const User = require("../models").User;

class UserController {
  static create(req, res, next) {
    const { email, password } = req.body;
    User.create({ email, password })
      .then((user) => {
        res.status(201).json({ user });
      })
      .catch((error) => {
        if (error.name === "SequelizeUniqueConstraintError") {
          next({ status: 400, message: "Email address already in use!" });
        } else {
          next(error);
        }
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then((user) => {
        if (comparePassword(password, user.password)) {
          let payload = { id: user.id, email: user.email };
          let token = generateToken(payload);
          res.status(200).json({ id: user.id, email: user.email, token });
        } else {
          next({ status: 401, message: "Invalid email or password" });
        }
      })
      .catch(next);
  }
}

module.exports = UserController;
