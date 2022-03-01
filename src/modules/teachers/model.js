module.exports = {
  allTeachers: `select * from teachers`,
  oneTeacher: `select * from teachers where teacher_id = $1`,
  newTeach: `insert into teachers(teacher_name, teacher_img, teacher_info) values($1, $2, $3) returning *`,
  updateTeacher: `update teachers set teacher_name=$1  teacher_img=$2, teacher_info = $3 where teacher_id = $4`,
  deleteTeacher: ` delete from teachers where teacher_id = $1`,
};
