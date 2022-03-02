CREATE DATABASE family;

\c family


CREATE TABLE teachers(
    teacher_id serial PRIMARY KEY,
    teacher_name VARCHAR(200) NOT NULL,
    teacher_img VARCHAR(800) DEFAULT NULL,
    teacher_info text default null
);


CREATE TABLE courses(
    course_id serial PRIMARY KEY,
    course_img VARCHAR(800) NOT NULL,
    course_teacher INT NOT NULL references teachers(teacher_id) on delete cascade on update cascade,
    course_title VARCHAR(300) not null,
    course_info text not null,
    course_duration VARCHAR(100) NOT NULL,
    course_lessons INT NOT NULL,
    course_certificate VARCHAR(800) default null
);

CREATE TABLE topics(
    topic_id serial PRIMARY KEY,
    topic_title TEXT [] NOT NULL,
    topic_info TEXT [] NOT NULL, 
    topic_course Int not null references courses(course_id) on delete cascade on update cascade
);

CREATE TABLE course_benefits(
    benefit_id serial PRIMARY KEY,
    benefit_title text [] NOT NULL,
    benefit_course Int not null references courses(course_id) on delete cascade on update cascade
);


CREATE TABLE auditory(
    auditory_id serial PRIMARY KEY,
    auditory_title text [] NOT NULL,
    auditory_course Int not null references courses(course_id) on delete cascade on update cascade
);

CREATE TABLE questions(
    question_id serial PRIMARY KEY,
    question_title  text [] NOT NULL,
    question_info text [] NOT NULL ,
    questions_course Int not null references courses(course_id) on delete cascade on update cascade
);


CREATE TABLE blog (
    blog_id serial PRIMARY KEY,
    blog_img VARCHAR(300) NOT NULL,
    blog_title VARCHAR(300) NOT NULL,
    blog_date TIMESTAMPTZ default current_timestamp,
    blog_text TEXT default null,
    blog_time INT default null,
    blog_type VARCHAR(100) default null
);

CREATE TABLE author(
    author_id serial PRIMARY KEY,
    author_info VARCHAR(300) not null,
    author_video VARCHAR(100) not null
);  


CREATE TABLE orders(
    order_id serial PRIMARY KEY,
    order_name VARCHAR(300) NOT NULL,
    order_phone BIGINT not null,
    order_course INT not null
);

CREATE TABLE admin(
    admin_id serial PRIMARY KEY,
    admin_login VARCHAR(300) NOT NULL,
    admin_password VARCHAR(300) NOT NULL
);

-- course data
select c.course_img, course_teacher, course_title, course_info, t.teacher_name
from courses c inner join teachers t 
on c.course_teacher = t.teacher_id; 

-- inner course
select c.course_img, course_teacher, course_title, course_info, course_duration, course_lessons, course_certificate, t.teacher_name, 
t.teacher_img, a.auditory_title, tp.topic_title, tp.topic_info, cb.benefit_title,q.question_title, q.question_info 
from courses c inner join teachers t ON c.course_teacher = t.teacher_id
inner join auditory a ON a.auditory_course = c.course_id
inner join topics tp ON tp.topic_course = c.course_id
inner join course_benefits cb ON cb.benefit_course  = c.course_id
inner join questions q ON q.questions_course = c.course_id where c.course_id = $1;

-- admin

insert into admin(admin_login, admin_password) values('admin', 'admin')