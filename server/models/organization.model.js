module.exports = (sequelize, Sequelize) => {
  const Organization = sequelize.define("organization", {
    name: {
      type: Sequelize.STRING
    },
    orgtype: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.STRING
    },
    ward: {
      type: Sequelize.INTEGER
    },
    pincode: {
      type: Sequelize.INTEGER
    }
  });

  return Organization;
};