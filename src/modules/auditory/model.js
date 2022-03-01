module.exports = {
  allAuditories: `select * from auditory`,
  oneAuditory: `select * from auditory where auditory_id = $1`,
  newAuditory: `insert into auditory(auditory_title, auditory_course) values($1, $2) returning *`,
  updateAuditory: `update auditory set auditory_title = $1 where auditory_id = $2`,
  deleteAuditory: ` delete from auditory where auditory_id = $1`,
};
