const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = Schema({
      name: {
            type: String,
            required: true
      },
      age: {
            type: String,
            required: true
      },
      grade: {
            type: String,
            required: true
      },
      classRoom: {
            type: String,
            required: true
      },
      mother: {
            type: String,
            required: true
      },
      MonAge: {
            type: String,
            required: true
      },
      MonJob: {
            type: String,
            required: true
      },
      father: {
            type: String,
            required: true
      },
      DadAge: {
            type: String,
            required: true
      },
      DadJob: {
            type: String,
            required: true
      }

});

const Students = mongoose.model('students', studentSchema);
module.exports = Students;
