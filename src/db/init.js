import sequelize from "./config.js";
import studentModel from "../model/student/index.js";
const syncDB = async () => {
  await sequelize.sync({ alter: true, force: false });
  await studentModel.sync({ alter: true, force: false });
};

export default syncDB;
