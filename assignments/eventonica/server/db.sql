CREATE DATABASE techtonica;

CREATE TABLE events (
  id smallint PRIMARY KEY, 
  title varchar(200) NOT NULL,
  location varchar(200) NOT NULL
);

INSERT INTO books
 VALUES (
  {id: 1, title: 'Women in Tech Techtonica Panel', location: 'Overland Park Convention Center'},
  {id: 2, title: 'Japanese Cultural Education', location: 'Seattle Convention Center'},
  {id: 3, title: "Haven 90's Party Night Club", location: 'Hilton Hotel Kansas City'},
  {id: 4, title: 'Comedy Night at the Station', location: 'SF Hilton Hotel'},
  {id: 5, title: 'A Decadent Arts Experience', location: 'West Ridge Mall'},
  {id: 6, title: 'Techtonica Classroom Course', location: 'Techtonica HQ'}
)