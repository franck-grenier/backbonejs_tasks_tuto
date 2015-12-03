# Backbone.js todolist app

A learning exercise on Backbone.js to create a simple task manager running on an ExpressJS server and storing data in a MongoDB database.


---
## Step 1 - Install and run MongoDB

Install MongoDB : 

    sudo apt-get install mongodb

After installation, launch MongoDB :

    sudo service mongodb start

All done! MongoDB is ready to store your tasks.


---
## Step 2 - Start Express server

You will need NodeJS and npm : 

    sudo apt-get install nodejs
    sudo apt-get install npm

See [NodeJS](https://nodejs.org/en/download/package-manager/) and [npm](https://docs.npmjs.com/getting-started/installing-node) docs 

Move to `express_server` folder : 

    cd express_server/

Install dependencies with npm from `package.json` : 

    npm install ./

Start Express server :

    cd express_server/
    npm start



---
## Step 3 - Run the todolist app

Open `todolist_app/index.html` in your favorite browser.




