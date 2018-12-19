DROP DATABASE IF EXISTS database;
CREATE DATABASE database;

\c database;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  age INT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) NOT NULL,
  body VARCHAR NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) NOT NULL,
  post_id INT REFERENCES posts(id) NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) NOT NULL,
  post_id INT REFERENCES posts(id) NOT NULL,
  body VARCHAR NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id) NOT NULL
);

CREATE TABLE pictures(
  id SERIAL PRIMARY KEY,
  albums_id INT REFERENCES albums(id) NOT NULL,
  url VARCHAR NOT NULL
);

INSERT INTO users (name,email, age) VALUES ('Person 1',' Email 1', 11) , ('Person 2', ' email 2', 22),('Person 3', ' email 3', 33);
INSERT INTO posts (users_id, body) Values(1,'this is a block of text') , (1,'this is more blocks of text'),(2, ' this is a block of text from a different user');
INSERT INTO likes (users_id, post_id) VALUES (1,1),(1,2),(1,3),(2,1),(2,2);
INSERT INTO comments (users_id,post_id,body)VALUES (1,1,'this is a body1'),(1,2,'this is a body3'), (1,3,'this is a body5'),(2,1,'this is a body1'),(3,2,'this is a body3'),(2,2,'this is a body1');
INSERT INTO albums (users_id)VALUES (1),(1),(2),(2),(3);
INSERT INTO pictures (albums_id,url)VALUES  (1,'picture1'),(1,'picture2'),(2,'picture1'),(3,'picture1'),(5,'picture1'),(4,'picture1');
