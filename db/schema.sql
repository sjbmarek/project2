-- Create the database doggo_db and specified it for use.
CREATE DATABASE doggo_db;
USE doggo_db;

-- Create the table dog and park
CREATE TABLE dog
(
id int NOT NULL AUTO_INCREMENT,
dog_name varchar(150) NOT NULL,
owner_name varchar(150) NOT NULL,
dog_comment varchar(255) NOT NULL,
dog_photo_url varchar(255) NOT NULL,
park_at varchar(150) DEFAULT "Doghouse",
como_visits integer DEFAULT 0,
minnehaha_visits integer DEFAULT 0,
bootcamp_visits integer DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE park
id int NOT NULL AUTO_INCREMENT,
park_name varchar(150) NOT NULL,
total_park_visits integer DEFAULT 0,

PRIMARY KEY (id)
);
