CREATE DATABASE techtonica;

CREATE TABLE events (
  id smallint PRIMARY KEY, 
  title varchar(200) NOT NULL,
  location varchar(200) NOT NULL
);