const express = require('express');
const { getStudents, createStudents, updateStudents, deleteStudents, getOneStudents } = require('../controllers/student.controller');
const router = express.Router();

router
      .route('/students')
      .get(getStudents)
      .post(createStudents)

router
      .route('/students/:id')
      .get(getOneStudents)
      .patch(updateStudents)
      .delete(deleteStudents)



module.exports = router;