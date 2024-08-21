'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Presents', [
      { name: 'Licuadora', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Set de cuchillos', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juego de sarten', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Utensilios de cocina', quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Caldero', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Set de almacenamiento', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Picatodo', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sandwichera', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Olla de presion 16L', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organizador de platos', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juego de jarras', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Abanico grande', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Abanico mediano', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juego de sabanas blancas', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juego de sabanas colores', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'cubre lechos', quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Almohadas', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cortinas baige', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juego de toallas', quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Plancha de ropa', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mesa de planchar', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lluvia de sobres', quantity: 1, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Presents', null, {});
  }
};
