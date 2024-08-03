'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Colors",
      [
        {
          name: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "white",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "blue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "grey",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "yellow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "orange",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "purple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "brown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "turquoise",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "beige",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "navy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "burgundy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "teal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mint",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "maroon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "olive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "coral",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "gold",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "silver",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
