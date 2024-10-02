CREATE DATABASE user_tracker;

\c user_tracker

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
 