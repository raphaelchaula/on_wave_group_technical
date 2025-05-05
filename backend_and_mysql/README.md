# Task: backend_and_mysql

This task involves creating a Table `users` and `addUser` Stored Procedure.

In this task I have created a script `mysql.sql` in the folder `backend_and_mysql`, which works as follows:

1. Create Database `on_wave_group_db` if it doesn't exist.
2. Select Database `on_wave_group_db`.
3. Create Table `users` if it doesn't exist.
4. Create Stored Procedure `addUsers` that receives `u_email`, `u_password` and `u_type`.
5. Add user by calling the Stored Procedure created above `addUser('a@onwavegroup.com', 'securepassword', 'admin')`.

#### How to run `mysql.sql`
```
mysql -u root -p password < mysql.sql
```
You can replace `-u root` and `-p password` with respective username and password for your mysql server

In case you want to add more users, you can use another script `mysql_add_users.sql` in the same folder `backend_and_mysql`

#### How to run `mysql_add_users.sql`
```
mysql -u root -p password < mysql_add_users.sql
```
You can replace `-u root` and `-p password` with respective username and password for your mysql server

#### Alternatively your can add more users using command line
```
mysql -u root -p password
USE on_wave_group_db;
CALL addUser('g@onwavegroup.com', 'securepassword', 'admin');
CALL addUser('h@onwavegroup.com', 'securepassword', 'admin');
CALL addUser('i@onwavegroup.com', 'securepassword', 'admin');
exit
```
You can replace `-u root` and `-p password` with respective username and password for your mysql server