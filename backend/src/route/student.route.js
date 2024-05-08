const express = require('express');
const { getStudents, createStudents, updateStudents, deleteStudents } = require('../controllers/student.controller');
const router = express.Router();

router
      .route('/students')
      .get(getStudents)
      .post(createStudents)

router
      .route('/students/:id')
      .patch(updateStudents)
      .delete(deleteStudents)

module.exports = router;