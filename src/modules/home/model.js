module.exports = {
  course_data: `select c.course_img, course_teacher, course_title, course_info, course_duration, course_lessons, course_certificate, t.teacher_name
  from courses c inner join teachers t 
  on c.course_teacher = t.teacher_id;`,
  course_inner: `select c.course_img, course_teacher, course_title, course_info, course_duration, course_lessons, course_certificate, t.teacher_name, 
  t.teacher_img, a.auditory_title, tp.topic_title, tp.topic_info, cb.benefit_title,q.question_title, q.question_info 
  from courses c inner join teachers t ON c.course_teacher = t.teacher_id
  inner join auditory a ON a.auditory_course = c.course_id
  inner join topics tp ON tp.topic_course = c.course_id
  inner join course_benefits cb ON cb.benefit_course  = c.course_id
  inner join questions q ON q.questions_course = c.course_id where c.course_id = $1`,
};
