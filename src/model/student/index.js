import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const studentModel = sequelize.define("student", {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default studentModel;
