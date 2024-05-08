interface Prop {
      student: {},
      errors: {}
}
export const validationsSchema = ({ student, errors }: Prop) => {
      if (!student.name) {
            errors.name = "Name is required!"
      } if (!student.age) {
            errors.age = "Age is required!"
      } if (!student.grade) {
            errors.grade = "Grade is required!"
      } if (!student.father) {
            errors.father = "Name is required!"
      } if (!student.DadJob) {
            errors.DadJob = "Job is required!"
      } if (!student.DadAge) {
            errors.DadAge = "Age is required!"
      } if (!student.mother) {
            errors.mother = "Name is required!"
      } if (!student.MonJob) {
            errors.MonJob = "Job is required!"
      } if (!student.MonAge) {
            errors.MonAge = "Age is required!"
      } if (!student.classRoom) {
            errors.classRoom = "Class room is required!"
      }
};
