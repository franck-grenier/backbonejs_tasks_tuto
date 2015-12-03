# Backbone.js todolist app

A learning exercise on Backbone.js to create a simple task manager running on an ExpressJS server API and storing data into a MongoDB database.


---
## Step 1 - Install and run MongoDB

Install MongoDB : 

    sudo apt-get install mongodb

After installation, launch MongoDB :

    sudo service mongodb start

All done! MongoDB is ready to store your tasks.


---
## Step 2 - Start Express server

The ExpressJS server provides a REST API to create, retrieve, update and delete tasks through MongoDB.

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

Install Bower with npm : 

    npm install -g bower

Move to `todolist_app` folder and install dependencies with Bower :

    cd todolist_app/
    bower install    

Open `todolist_app/index.html` in your favorite browser.


Thanks to https://github.com/RSamaium