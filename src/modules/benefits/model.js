module.exports = {
  allBenefits: `select * from course_benefits`,
  oneBenefit: `select * from course_benefits where benefit_id = $1`,
  newBenefits: `insert into course_benefits(benefit_title, benefit_course) values($1, $2) returning *`,
  updateBenefits: `update course_benefits set benefit_title = $1 where benefit_id = $2`,
  deleteBenefits: ` delete from course_benefits where benefit_id = $1`,
};
