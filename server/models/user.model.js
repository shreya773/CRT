module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    pincode: {
      type: Sequelize.INTEGER
    },
    usertype: {
      type: Sequelize.STRING
    },
    authmethod: {
      type: Sequelize.STRING
    },
  });

  return User;
};