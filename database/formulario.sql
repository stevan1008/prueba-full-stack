CREATE DATABASE usuarios_db;

USE usuarios_db;

CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL, 
    control INT(15) NOT NULL
);

DESCRIBE user;