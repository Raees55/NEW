import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const TokenModel = sequelize.define("Tokens", {
  // Model attributes are defined here
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  }
 
});

export default TokenModel;
