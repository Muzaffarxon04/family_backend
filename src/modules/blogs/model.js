module.exports = {
  allBlogs: `select * from blog`,
  oneBlog: `select * from blog where blog_id = $1`,
  newBlog: `insert into blog(blog_img, blog_title, blog_date, blog_text, blog_time, blog_type) values($1, $2, $3, $4, $5, $6) returning *`,
  updateBlog: `update blog set blog_img = $1, blog_title= $2, blog_date = $3, blog_text = $4, blog_time = $5, blog_type = $6 where blog_id = $7`,
  deleteBlog: ` delete from blog where blog_id = $1`,
};
