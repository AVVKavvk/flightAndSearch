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
      "Airports",
      [
        {
          name: "Pune International Airport",
          cityId: 5,
          address: "Pune",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indira Gandhi International Airport",
          cityId: 6,
          address: "Delhi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jaipur International Airport",
          cityId: 1,
          address: "jaipur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          cityId: 7,
          address: "Mumbai",
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
