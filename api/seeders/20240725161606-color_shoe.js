'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtén IDs de Shoes y Colors
    const shoes = await queryInterface.sequelize.query(
      `SELECT id from Shoes;`
    );
    const colors = await queryInterface.sequelize.query(
      `SELECT id from Colors;`
    );

    const shoeRows = shoes[0];
    const colorRows = colors[0];

    return queryInterface.bulkInsert('color_shoes', [
      { shoe_id: shoeRows[0].id, color_id: colorRows[3].id, image: 'product-1.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, color_id: colorRows[1].id, image: 'product-2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, color_id: colorRows[3].id, image: 'product-3.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, color_id: colorRows[0].id, image: 'product-4.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, color_id: colorRows[5].id, image: 'product-5.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, color_id: colorRows[7].id, image: 'product-6.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, color_id: colorRows[11].id, image: 'product-7.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, color_id: colorRows[9].id, image: 'product-8.jpg', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('color_shoe', null, {});
  }
};
