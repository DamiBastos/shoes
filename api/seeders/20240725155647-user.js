'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash(process.env.PASS_ADMIN, 10);

    const hashedPrueba = await bcrypt.hash("123456", 10);
    // Insert Users
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Damián Bastos",
          email: "damian.bastos@yahoo.com",
          phone: "1170190832",
          isAdmin: true,
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Jorgue Cigano",
          email: "cigano32@hotmail.com",
          phone: "1150043472",
          isAdmin: true,
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Usuario Prueba",
          email: "usuario_prueba@email.com",
          phone: "1112341234",
          isAdmin: false,
          password: hashedPrueba,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    // Get the user ID of the 'Usuario Prueba'
    const [usuarioPrueba] = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE email = 'usuario_prueba@email.com'`
    );

    const userId = usuarioPrueba[0].id;

    // Insert Cart for 'Usuario Prueba'
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          user_id: userId,
          items: JSON.stringify([]),
          discount: 0,
          subtotal: 0,
          total: 0,
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
