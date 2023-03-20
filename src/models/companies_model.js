module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("companies", {
      id: {        
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      businessLine: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Company;
  };