'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('users', [
       {
         name: "afiq",
         profession: "front end",
         role: "admin",
         email: "afiqurragman32@gmail.com",
         password: await bcrypt.hash('rahasiabang', 10),
         created_at: new Date(),
         updated_at: new Date()
      },
      {
        name: "naura",
        profession: "back end",
        role: "students",
        email: "naura32@gmail.com",
        password: await bcrypt.hash('rahasiaku', 10),
        created_at: new Date(),
        updated_at: new Date()
     }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('users', null, {});
  }
};
