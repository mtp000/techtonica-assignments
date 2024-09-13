CREATE DATABASE user_management;

\c user_management;

-- Create the sequence with a start value of 208
CREATE SEQUENCE custom_user_id_seq
  START 208;

-- Create the users table with the id using the custom sequence
CREATE TABLE users (
  id INTEGER PRIMARY KEY DEFAULT nextval('custom_user_id_seq'), 
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

-- Create a function to generate a random increment for the sequence
CREATE OR REPLACE FUNCTION random_increment() RETURNS TRIGGER AS $$
BEGIN
  -- Generate a random increment between 1 and 50
  EXECUTE 'ALTER SEQUENCE custom_user_id_seq INCREMENT BY ' || floor(random() * 50 + 1);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add a trigger to adjust the sequence increment before each insert
CREATE TRIGGER random_increment_trigger
  BEFORE INSERT ON users
  FOR EACH ROW
  EXECUTE FUNCTION random_increment();
