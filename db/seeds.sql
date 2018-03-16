-- Insert a set of records.

USE dogs;

INSERT INTO dogs (dog_name, owner_name, dog_comment, dog_photo_url) 
VALUES ('Whitney', 'Susan Marek', 'Whitney loves the dog park!', 'XXX'),
('Bali', 'Jeff Isaacson', 'My human is great.', 'XXX'),
('QB', 'Tayler Cates', 'Hoping to meet a new dog friend.', 'XXX'),
('Jojo', 'Colleen Goodrich','I have a pool at my house', 'XXX')

-- MySQL will not take a path to upload a file, it must be handled by fs

-- Good example here:  http://www.technicalkeeda.com/nodejs-tutorials/nodejs-store-image-into-mysql-database