'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      "Shoes",
      [
        {
          model: "New Balance Classic",
          brand: "New Balance",
          genre: "unisex",
          description: "Prueba stock",
          stock: 10,
          price: 60000.0,
          discount: 15,
          provider:"Proveedor 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "Nike Boots",
          brand: "Nike",
          genre: "unisex",
          description: "Prueba stock",
          stock: 10,
          price: 70000.0,
          discount: 20,
          provider:"Proveedor 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "Nike Classic",
          brand: "Nike",
          genre: "unisex",
          description: "Prueba stock",
          stock: 10,
          price: 40000.0,
          discount: 10,
          provider:"Proveedor 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "Vans Classic",
          brand: "Vans",
          genre: "unisex",
          description: "Prueba stock",
          stock: 10,
          price: 80000.0,
          discount: 5,
          provider:"Proveedor 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "Converse Classic",
          brand: "Converse",
          genre: "unisex",
          description: "Prueba stock",
          stock: 10,
          price: 70000.0,
          discount: 15,
          provider:"Proveedor 4",
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
