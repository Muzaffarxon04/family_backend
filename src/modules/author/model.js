module.exports = {
  allAuthors: `select * from author`,
  oneAuthor: `select * from author where author_id = $1`,
  newAuthor: `insert into author(author_info, author_video) values($1, $2) returning *`,
  updateAuthor: `update author set author_info = $1, author_video =$2 where author_id = $3`,
  deleteAuthor: ` delete from author where author_id = $1`,
};
