import studentModel from "../../model/student/index.js";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
  signup: async (req, res) => {
    try {
      const payload = req.body;

      const studentCheck = await studentModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (studentCheck) {
        return res.status(400).json({
          message: "student already exists",
        });
      }

      const hPassword = await hash(payload.password, 10);

      const student = await studentModel.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: hPassword,
      });
      res.json({ message: "student registered successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
        err,
      });
    }
  },

  signin: async (req, res) => {
    try {
      const payload = req.body;
      const studentCheck = await studentModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (!studentCheck) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }
      const comparePassword = await compare(
        payload.password,
        studentCheck.password
      );
      if (!comparePassword) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const data = {
        id: studentCheck.id,
        firstName: studentCheck.firstName,
        email: studentCheck.email,
      };

      const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      res.json({ data, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default authController;
