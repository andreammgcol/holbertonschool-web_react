import { Seq } from 'immutable';

const printBestStudents = (objStudents) => {
  const studentFilter = Seq(objStudents)
    .filter((student) => student.score >= 70)
    .map((objStudents) => {
      const student = objStudents;
      student.firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1);
      student.lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1);
      return student;
    }).toObject();

  console.log(studentFilter);
};

export default printBestStudents;
