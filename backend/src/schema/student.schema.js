const validator = require('validator');
const ApiError = require('./../../utils/apiError')

exports.Validation = ({ name, age, grade, father, DadAge, DadJob, mother, MonAge, MonJob, classRoom }) => {
      if (!validator.isAlpha(validator.blacklist(name, " "))) {
            throw ApiError.validation("Name can only contain letter, please re-enter the name!")
      } if (!validator.isNumeric(age)) {
            throw ApiError.validation("Age enter just number!");
      } if (!validator.isNumeric(grade)) {
            throw ApiError.validation("Grade enter just number");
      } if (!validator.isAlpha(validator.blacklist(father, " "))) {
            throw ApiError.validation("Father can only contain letter, please re-enter the name!")
      } if (!validator.isNumeric(DadAge)) {
            throw ApiError.validation("Age enter just number!");
      } if (!validator.isAlpha(validator.blacklist(DadJob, " "))) {
            throw ApiError.validation("Job can only contain letter, please re-enter the job!")
      } if (!validator.isAlpha(validator.blacklist(mother, " "))) {
            throw ApiError.validation("Mother can only contain letter, please re-enter the name!")
      } if (!validator.isNumeric(MonAge)) {
            throw ApiError.validation("Age enter just number!");
      } if (!validator.isAlpha(validator.blacklist(name, " "))) {
            throw ApiError.validation("Job can only contain letter, please re-enter the job!")
      } if (!validator.isAlpha(classRoom)) {
            throw ApiError.validation("ClassRoom can only contain letter, please re-enter the class room!")
      }
};