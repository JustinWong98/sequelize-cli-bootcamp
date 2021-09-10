module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('attractions', 'latitude', {
        type: Sequelize.REAL
      });
      await queryInterface.addColumn('attractions', 'longitude', {
        type: Sequelize.REAL
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('attractions', 'name');
      await queryInterface.removeColumn('attractions', 'nickname');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error)
    }
    }
  }
