"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ideas", {
      // category: DataTypes.INTEGER,
      // userId: DataTypes.INTEGER,
      // idea_name: DataTypes.STRING,
      // description: DataTypes.STRING,
      // first_closure_date: DataTypes.DATE,
      // final_closure_date: DataTypes.DATE,
      // document: DataTypes.BOOLEAN,

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      idea_name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      first_closure_date: {
        type: Sequelize.DATE,
      },
      final_closure_date: {
        type: Sequelize.DATE,
      },
      document: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ideas");
  },
};
