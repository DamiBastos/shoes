"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *  */
    await queryInterface.bulkInsert(
      "Shoes",
      [
        {
          model: "New Balance Azul",
          brand: "New Balance",
          color: "Azul",
          size: "45",
          genre: "Hombre",
          description: "Prueba stock",
          stock: 10,
          image: "product-1.jpg",
          price: 60000.0,
          discount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "New Balance Tricolor",
          brand: "New Balance",
          color: "Gris",
          size: "40",
          genre: "Hombre",
          description: "Prueba stock",
          stock: 10,
          image: "product-2.jpg",
          price: 70000.0,
          discount: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "New Balance Beige",
          brand: "New Balance",
          color: "Beige",
          size: "38",
          genre: "Hombre",
          description: "Prueba stock",
          stock: 10,
          image: "product-3.jpg",
          price: 40000.0,
          discount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "New Balance Negra",
          brand: "New Balance",
          color: "Negro",
          size: "45",
          genre: "Hombre",
          description: "Prueba stock",
          stock: 10,
          image: "product-4.jpg",
          price: 80000.0,
          discount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "New Balance Rosa",
          brand: "New Balance",
          color: "Turqueza",
          size: "35",
          genre: "Mujer",
          description: "Prueba stock",
          stock: 10,
          image: "product-5.jpg",
          price: 70000.0,
          discount: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Shoes", null, {});
  },
};
