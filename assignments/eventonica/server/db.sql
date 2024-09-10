CREATE DATABASE techtonica;

CREATE TABLE events (
  id smallint PRIMARY KEY, 
  title varchar(200) NOT NULL,
  location varchar(200) NOT NULL
);

INSERT INTO events
 VALUES (
  (1, 'Women in Tech Techtonica Panel', 'Overland Park Convention Center'),
  (2, 'Japanese Cultural Education', 'Seattle Convention Center'),
  (3, "Haven 90's Party Night Club", 'Hilton Hotel Kansas City'),
  (4, 'Comedy Night at the Station', 'SF Hilton Hotel'),
  (5, 'A Decadent Arts Experience','West Ridge Mall'),
  (6, 'Techtonica Classroom Course', 'Techtonica HQ')
);