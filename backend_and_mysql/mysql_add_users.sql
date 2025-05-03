-- Use on_wave_group_db
USE on_wave_group_db;

-- Call addUser Procedure
CALL addUser('b@onwavegroup.com', 'securepassword', 'admin');
CALL addUser('c@onwavegroup.com', 'securepassword', 'admin');
CALL addUser('d@onwavegroup.com', 'securepassword', 'admin');
CALL addUser('e@onwavegroup.com', 'securepassword', 'admin');
CALL addUser('f@onwavegroup.com', 'securepassword', 'admin');

-- RUN SCRIPT
-- mysql -u root -p password < mysql_add_users.sql