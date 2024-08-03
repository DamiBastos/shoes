'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sizes",
      [
        {
          number:30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number:47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
