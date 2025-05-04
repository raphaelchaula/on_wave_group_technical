# Task: frontend_click_fit_website

This task involves creating a Click fit page with **fitness content**, **today in history fetch from api** and **upload image functionality**.

In this task I have created three files `index.html`, `styles.css` and `script.js` for html content, styling and javascript code respectively and a folder `assets` for storing image files, it work as follows:

#### How to run `index.html`

1. Click the `index.html` or open it on Browser (Chrome, Edge, etc) it will display the page and the content
2. On load, it will fetch the `http://numbersapi.com/1/30/date?json`  and display the content under **Today in History**

#### Upload image process

This process involves a server which is located inside the `image_upload` folder, the process is as follows:

1. Open the folder `upload_image` in the terminal (command prompt)
2. Install packages required to run the server by running `npm i` (You need to have Node.js installed in your computer)
3. After packages are installed you will see `node_modules` folder created inside `upload_image` folder
4. Start the server by running `npm start` it will console `Server is running on port 4000` indicating server started
5. Now you can go back to Click Fit page and Click upload image area or Drag and drop image on it, i will start uploading showing a progress indicator
6. On the server side image is received and stored inside the `upload_image/public/uploads` folder and details like size, mimetype, etc of the image are consoled in the terminal.

#### Explanation about server code

Server code involves three files `index.js`, `package.json`, and `package-lock.json`

1. `index.js` is the file with the actual code where server is execuded
2. `package.json` is the app config file
3. `package-lock.json` is the dependency config file