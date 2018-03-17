-- Insert a set of records.

USE doggo_db;

INSERT INTO dogs (dog_name, owner_name, dog_comment, dog_photo_url, createdAt, updatedAt) 
VALUES ('Whitney', 'Susan Marek', 'Whitney loves the dog park!', 'XXX', '2018-03-17','2018-03-17'),
('Bali', 'Jeff Isaacson', 'My human is great.', 'XXX', '2018-03-17','2018-03-17'),
('QB', 'Tayler Cates', 'Hoping to meet a new dog friend.', 'XXX', '2018-03-17','2018-03-17'),
('Jojo', 'Colleen Goodrich','I have a pool at my house', 'XXX', '2018-03-17','2018-03-17')



USE doggo_db;

INSERT INTO parks (park_name, createdAt, updatedAt) VALUES ('Como Dog Park', '2018-03-17','2018-03-17'), ('Minnehaha Dog Park', '2018-03-17','2018-03-17'), ('Bootcamp Dog Park', '2018-03-17','2018-03-17'), ('Doghouse', '2018-03-17','2018-03-17')

-- MySQL will not take a path to upload a file, it must be handled by fs

-- Good example here:  http://www.technicalkeeda.com/nodejs-tutorials/nodejs-store-image-into-mysql-database