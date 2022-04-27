DROP DATABASE IF EXISTS characters_db;
CREATE DATABASE characters_db;

USE characters_db;

CREATE TABLE characters (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    class VARCHAR(100),
    race VARCHAR(100)
);