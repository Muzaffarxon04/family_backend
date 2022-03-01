module.exports = {
  allCourses: `select * from courses`,
  oneCourse: `select * from courses where course_id = $1`,
  newCourse: `insert into 
    courses(course_img, course_teacher, course_title, course_info, course_duration, course_lessons, course_certificate) 
    values($1, $2, $3, $4, $5, $6, $7) returning *`,
  updateCourse: `update courses set course_img=$1, course_teacher=$2, course_title=$3, course_info=$4, course_duration=$5, course_lessons=$6, course_certificate=$7 
    where course_id = $8`,
  deleteCourse: ` delete from courses where course_id = $1`,
};
