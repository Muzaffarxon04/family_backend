module.exports = {
  allQuestions: `select * from questions`,
  oneQuestion: `select * from questions where question_id = $1`,
  newQuestion: `insert into questions(question_title, question_info, questions_course) values($1, $2, $3) returning *`,
  updateQuestion: `update questions set question_title = $1, question_info =$2 where question_id = $3`,
  deleteQuestion: ` delete from questions where question_id = $1`,
};
