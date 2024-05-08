const ApiError = require('../../utils/apiError');
const Students = require('../models/student.model');
const validator = require('validator')
exports.getStudentService = async () => {
      const students = await Students.find();
      if (!students) {
            throw ApiError.notFound(students);
      }
      return students;
};

exports.createStudentService = async (body) => {
      const { name, age, grade, father, DadAge, DadJob, mother, MonAge, MonJob, classRoom } = body;

      console.log(body)

      if (!validator.isAlpha(validator.blacklist(name, " "))) {
            throw ApiError.validation("Name can only contain letter, please re-enter the name")
      } if (!validator.isNumeric(age)) {
            throw ApiError.validation("Please enter just number");
      } if (!validator.isNumeric(grade)) {
            throw ApiError.validation("Please enter just number");
      } if (!validator.isAlpha(validator.blacklist(father, " "))) {
            throw ApiError.validation("Father can only contain letter, please re-enter the name")
      } if (!validator.isNumeric(DadAge)) {
            throw ApiError.validation("Please enter just number");
      } if (!validator.isAlpha(validator.blacklist(DadJob, " "))) {
            throw ApiError.validation("Job can only contain letter, please re-enter the job")
      } if (!validator.isAlpha(validator.blacklist(mother, " "))) {
            throw ApiError.validation("Mother can only contain letter, please re-enter the name")
      } if (!validator.isNumeric(MonAge)) {
            throw ApiError.validation("Please enter just number");
      } if (!validator.isAlpha(validator.blacklist(name, " "))) {
            throw ApiError.validation("Job can only contain letter, please re-enter the job")
      } if (!validator.isAlpha(classRoom)) {
            throw ApiError.validation("ClassRoom can only contain letter, please re-enter the class room")
      }
      const students = await Students.create(body);
      if (!students) {
            throw ApiError.notFound(students);
      };
      return "students";
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