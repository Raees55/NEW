import sequelize from "./config.js";
import studentModel from "../model/student/index.js";
import TokenModel from "../model/tokenModel.js";
const syncDB = async () => {
  await sequelize.sync({ alter: true, force: false });
  await studentModel.sync({ alter: true, force: false });
  await TokenModel.sync({alter:true,force:false});
};

export default syncDB;
