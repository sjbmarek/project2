-- Create the database dogs_db and specified it for use.
CREATE DATABASE dogs_db;
USE dogs_db;

-- Create the table burgers.
CREATE TABLE dogs
(
id int NOT NULL AUTO_INCREMENT,
dog_name varchar(255) NOT NULL,
owner_name varchar(255) NOT NULL,
dog_comment varchar(255) NOT NULL,
dog_photo longblob NOT NULL,
parka boolean DEFAULT false,
parka_visits integer DEFAULT 0,
parkb boolean DEFAULT false,
parkb_visits integer DEFAULT 0,
parkc boolean DEFAULT false,
parkc_visits integer DEFAULT 0,
parkd boolean DEFAULT false,
parkd_visits integer DEFAULT 0,
parke boolean DEFAULT false,
parke_visits integer DEFAULT 0,
PRIMARY KEY (id)
);
