-- Create the database dogs_db and specified it for use.
CREATE DATABASE dogs_db;
USE dogs_db;

-- Create the table burgers.
CREATE TABLE dogs
(
id int NOT NULL AUTO_INCREMENT,
dog_name varchar(150) NOT NULL,
owner_name varchar(150) NOT NULL,
dog_comment varchar(255) NOT NULL,
dog_photo_url varchar(255) NOT NULL,
como boolean DEFAULT false,
como_visits integer DEFAULT 0,
minnehaha boolean DEFAULT false,
minnehaha_visits integer DEFAULT 0,
bootcamp boolean DEFAULT false,
bootcamp_visits integer DEFAULT 0,
doghouse boolean DEFAULT false,
doghouse_visits integer DEFAULT 0,
PRIMARY KEY (id)
);
