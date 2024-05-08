const catchAsync = require('../../utils/catchAsync');
const { getStudentService, createStudentService, updateStudentService, deleteStudentService } = require('../services/student.service');

exports.getStudents = catchAsync(async (req, res) => {
      const students = await getStudentService();
      res.status(200).json({
            status: "success",
            data: students
      });
});

exports.createStudents = catchAsync(async (req, res) => {
      const students = await createStudentService(req.body);
      res.status(200).json({
            status: "success",
            data: students
      });
});

exports.updateStudents = catchAsync(async (req, res) => {
      const students = await updateStudentService(req.params.id, req.body);
      res.status(200).json({
            status: "success",
            data: students
      });
});

exports.deleteStudents = catchAsync(async (req, res) => {
      const students = await deleteStudentService(req.params.id);
      res.send(200);
})
