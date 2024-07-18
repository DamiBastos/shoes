"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert Users
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Damián Bastos",
          email: "damian.bastos@yahoo.com",
          phone: "1170190832",
          isAdmin: true,
          password: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Usuario Prueba",
          email: "usuario_prueba@email.com",
          phone: "1112341234",
          isAdmin: false,
          password: "123456",
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
          items: JSON.stringify([]), // Assuming no items initially
          discounts: 0,
          subtotal: 0,
          total: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Delete the cart for 'Usuario Prueba'
    const [usuarioPrueba] = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE email = 'usuario_prueba@email.com'`
    );

    const userId = usuarioPrueba[0].id;

    await queryInterface.bulkDelete("Carts", { user_id: userId }, {});
    // Delete Users
    await queryInterface.bulkDelete("Users", null, {});
  },
};
