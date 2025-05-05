# On Wave Group - Technical Skills

This folder includes two tasks `frontend_click_fit_website` and `backend_and_mysql` as follows:

## 1. Task: frontend_click_fit_website

This task involves creating a Click fit page with **fitness content**, **today in history fetch from api** and **upload image functionality**.

In this task I have created three files `index.html`, `styles.css` and `script.js` for html content, styling and javascript code respectively and a folder `assets` for storing image files, it work as follows:

#### How to run `index.html`

1. Click the `index.html` or open it on Browser (Chrome, Edge, etc) it will display the page and the content
2. On load, it will fetch the `http://numbersapi.com/1/30/date?json`  and display the content under **Today in History**

#### Upload image process

This process involves a server which is located inside the `image_upload` folder, the process is as follows:

1. Open the folder `upload_image` in the terminal (command prompt)
2. Install packages required to run the server by running (You need to have Node.js installed in your computer)
```
npm i
```
3. After packages are installed you will see `node_modules` folder created inside `upload_image` folder
4. Start the server by running
```
npm start
```
5. It will console `Server is running on port 4000` indicating server started
6. Now you can go back to Click Fit page and Click upload image area or Drag and drop image on it, i will start uploading showing a progress indicator
7. On the server side image is received and stored inside the `upload_image/public/uploads` folder and details like size, mimetype, etc of the image are consoled in the terminal.

#### Explanation about server code

Server code involves three files `index.js`, `package.json`, and `package-lock.json`

1. `index.js` is the file with the actual code where server is execuded
2. `package.json` is the app config file
3. `package-lock.json` is the dependency config file

## 2. Task: backend_and_mysql

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