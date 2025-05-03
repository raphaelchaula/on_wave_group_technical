-- Create on_wave_group_db database if it doesn't exist
CREATE DATABASE IF NOT EXISTS on_wave_group_db;

-- Use on_wave_group_db database
USE on_wave_group_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY (ID)
);

-- Create stored procedure to add a new user
DELIMITER $$

CREATE PROCEDURE addUser(
    IN u_email VARCHAR(255),
    IN u_password VARCHAR(255),
    IN u_type VARCHAR(255)
)
BEGIN
    INSERT INTO users (email, password, type) VALUES (u_email, u_password, u_type);
END $$

DELIMITER ;

-- Call the stored procedure to insert a new user
CALL addUser('a@onwavegroup.com', 'securepassword', 'admin');

-- RUN SCRIPT
-- mysql -u root -p password < mysql.sql