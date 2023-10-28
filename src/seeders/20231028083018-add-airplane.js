"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airpalnes",
      [
        {
          modelNumber: "Boeing 787",
          capacity: "500",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 767",
          capacity: "450",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A330",
          capacity: "400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 747",
          capacity: "420",
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
  },
};
