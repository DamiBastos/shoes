'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtén IDs de Shoes y Sizes
    const shoes = await queryInterface.sequelize.query(
      `SELECT id from Shoes;`
    );
    const sizes = await queryInterface.sequelize.query(
      `SELECT id from Sizes;`
    );

    const shoeRows = shoes[0];
    const sizeRows = sizes[0];

    return queryInterface.bulkInsert('size_shoes', [
      { shoe_id: shoeRows[0].id, size_id: sizeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[2].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[3].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[4].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[5].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[6].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[7].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[8].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[9].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[10].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[11].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[0].id, size_id: sizeRows[12].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[2].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[3].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[4].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[5].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[6].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[7].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[8].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[9].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[10].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[11].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, size_id: sizeRows[12].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[2].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[3].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[4].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[5].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[6].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[7].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[8].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[9].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[10].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[11].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, size_id: sizeRows[12].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[2].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[3].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[4].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[5].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[6].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[7].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[8].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[9].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[10].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[11].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, size_id: sizeRows[12].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[0].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[1].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[2].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[3].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[4].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[5].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[6].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[7].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[8].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[9].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[10].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[11].id, createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, size_id: sizeRows[12].id, createdAt: new Date(), updatedAt: new Date() },

      // otras asociaciones...
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('size_shoe', null, {});
  }
};
