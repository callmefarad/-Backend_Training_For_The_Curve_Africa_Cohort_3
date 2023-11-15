-- create a database and make sure you always terminate or end your command or query with a semi-colon (;)
CREATE DATABASE userAuth;

-- delete a database
-- DROP DATABASE userAuth;

-- selecting/using/activating a database
USE userAuth;

-- create a table
CREATE TABLE signUp(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL
);

-- updating a table
INSERT INTO signUp(name, email, password) 
VALUE("Obi", "obi@gmail.com", "obi12345"),
("Ubani", "ubani@gmail.com", "ubani12345"),
("ada", "ada@gmail.com", "ada12345"),
("Obinna", "obinna@gmail.com", "obinna12345"),
("Loveth", "loveth@gmail.com", "loveth12345");

-- view your table
SELECT * FROM signUp;

-- viewing individual column
SELECT id, name FROM signUp;

-- updating record in a table
UPDATE signUp SET name = "Ubanu" WHERE id=2;

-- delete a record from table
DELETE FROM signUp WHERE id=2;

-- filtering data in a table
SELECT * FROM signUp WHERE name = "Obinna";

-- sort data from a table
-- ascendig order
SELECT * FROM signUp ORDER BY name ASC;
-- descending order
SELECT * FROM signUp ORDER BY name DESC;









