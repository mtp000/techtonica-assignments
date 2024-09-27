CREATE DATABASE contacts;

\c contacts;

CREATE TABLE contacts (
  contact_id serial PRIMARY KEY, 
  name varchar(150) NOT NULL,
  email varchar(150),
  phone varchar(15),
  notes text
);

INSERT INTO contacts (name, email, phone, notes)
 VALUES
  ('Mom', 'mom@gmail.com', '678-233-2455', 'likes fruits' ),
  ('Dad', 'dad900@gmail.com', '678-011-0301', 'only texts'),
  ('Michael', 'michaelp@gmail.com', '678-532-0713', 'eats everything');