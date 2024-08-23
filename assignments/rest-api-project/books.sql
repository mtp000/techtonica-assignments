 --psql library --opens database
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

-- INSERT INTO books
--   VALUES
--     ('9780441013593', 'Dune', 'Frank Herbert', null, true);
--     ('9780071797580', 'Read & Think Spanish', 'McGraw-Hill', '2024-02-22', false),
--     ('9781250772909', 'Permanent Record', 'Edward Snowden', null, true),
--     ('9780060731335', 'Freakonomics: A rouge Economist Explores the Hidden Side of Everything', 'Steven D. Levitt', null, true),
--     ('9780593685648', 'Crying in H Mart', 'Michelle Zauner', null, true),
--     ('9780735211292', 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', 'James Clear', null, true),
--     ('9780385348119', 'Fluent Forever: How to Learn Any Language Fast and never Forget It', 'Gabriel Wyner', null, true),
--     ('9780441005901', 'Dune', 'Frank Herbert', '2024-08-22', true);

-- UPDATE books
-- SET isbn = '9780441013593'
-- WHERE isbn = '0399128964';

