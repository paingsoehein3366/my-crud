const ApiError = require('../../utils/apiError');
const Students = require('../models/student.model');
const validator = require('validator');
const { Validation } = require('../schema/student.schema');
exports.getStudentService = async () => {
      const students = await Students.find();
      if (!students) {
            throw ApiError.notFound(students);
      }
      return students;
};

exports.createStudentService = async (body) => {
      const { name, age, grade, father, DadAge, DadJob, mother, MonAge, MonJob, classRoom } = body;
      Validation({ name, age, grade, father, DadAge, DadJob, mother, MonAge, MonJob, classRoom });
      const students = await Students.create(body);
      if (!students) {
            throw ApiError.notFound(students);
      };
      return students;
};

exports.updateStudentService = async (id, body) => {
      console.log("Body: ", body);
      const students = await Students.updateOne({ _id: id }, body);
      if (!students) {
            throw ApiError.notFound(students)
      }
      return students;
};

exports.deleteStudentService = async (id) => {
      const response = await Students.deleteOne({ _id: id });
      return response;
}; 