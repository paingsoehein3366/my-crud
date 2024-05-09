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
exports.getOneStudent = async (id) => {
      const student = await Students.findById(id);
      if (!student) {
            throw ApiError.notFound(student);
      }
      return student;
}

exports.createStudentService = async (body) => {
      const { name, age, grade, father, DadAge, DadJob, mother, MonAge, MonJob, classRoom } = body;
      Validation({ name, age, grade, father, DadAge, DadJob, mother, MonAge, MonJob, classRoom });
      const student = await Students.create(body);
      return student;
};

exports.updateStudentService = async (id, body) => {
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