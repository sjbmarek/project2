-- Insert a set of records.

USE dogs;

INSERT INTO dogs (dog_name, owner_name, dog_comment, dog_photo) 
VALUES ('Whitney', 'Susan Marek', 'Whitney loves the dog park!', "../public/assets/img/Whitney.jpeg");

-- MySQL will not take a path to upload a file, it must be handled by fs

-- Good example here:  http://www.technicalkeeda.com/nodejs-tutorials/nodejs-store-image-into-mysql-database