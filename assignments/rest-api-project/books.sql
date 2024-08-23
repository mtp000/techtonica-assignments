 psql library --opens database
 --psql database_name -f books.sql --exxecutes sql file

-- SELECT * FROM pg_catalog.pg_tables;

--  create table books (
--    isbn char(13),
--    title varchar(150),
--    auhor_first varchar (50),
--    auhor_last varchar (50),
--    last_reserved_at date,
--    is_available boolean
--  );

--  alter table books
--    drop column auhor_last; 
--    rename column auhor_first to author;

INSERT INTO books
  VALUES
    ('0399128964', 'Dune', 'Frank Herbert', null, true);
