# Techy-Scraper-News **:newspaper:**
Mongoose and Cheerio

### Overview
**Techy-Scraper-News** is a web app that lets users view the latest articles from popular tech sites or blogs and save their favorites into a personalized library. Whenever a user visits the site, the app scrapes stories from [THE VERGE](https://www.theverge.com/) and display them for the user. The user can then save articles for later viewing. Once an article is saved, the user can add notes to the article and delete each note.
Welcome to [Techy-Scraper-News](https://limitless-shore-65628.herokuapp.com/). Enjoy!


### Commands

This app is setup to listen on a Heroku default port. In the absence of Heroku, it sets the port to 8040 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.	
```
node server.js
```
then navigate to 
```
localhost:8040 in browser
```


### Prerequisites

- Clone down repo
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Run command 'npm install' in Terminal or GitBash
- Body-parser
- Express
- Axios
- Cheerio
- Mongoose
- Request


### What App Does

**Techy-Scraper-News** leverages Mongoose.js to communicate with a MongoDB database hosted in the cloud with Heroku. The on-screen buttons trigger the appropriate request via express routing to fetch or update a respective articles data -- the response is rendered in the browser using JavaScript or jQuery.


### Tech Used

* [Nodejs](https://nodejs.org/en/) - run-time environment to build a back-end server
* [Express.js](https://expressjs.com/) - framework to build back end routing and the server
* [MongoDB](https://www.mongodb.com/download-center#community) - a NoSQL database program with ability to create dynamic objects /collections
* [Mongoose](http://mongoosejs.com/docs/) - an Object Document Mapper (ODM) JavaScript library used to store, save, delete comments and articles mapped to a MongoDB
* [Cheerio](https://www.npmjs.com/package/cheerio) - a Node.js library, which is a  jQuery like tool for the server used in web scraping
* [Body-Parser](https://www.npmjs.com/package/inquirer) - middleware used to extract the body from the incoming requests
* [Request](https://www.npmjs.com/package/request) - the simplest way possible to make http calls
* [Bootstrap](https://www.bootstrapcdn.com/) - component library for a front-end responsive framework
* [jQuery](https://jquery.com/) - JavaScript library for DOM traversal and manipulation
* [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) - Asynchronous JavaScript and XML used to perform a callback, making a quick round trip to and from the server to retrieve and/or save data without posting the entire page back to the server
* [HTML](https://html.com/) - create pages/documents to be displayed in a web browser
* [CSS](https://www.w3schools.com/Css/css_intro.asp) - customizing content, layout, colors, and fonts
* [JavaScript](https://www.javascript.com/) - scripting language used to implement client-side dynamic behavior on HTML web pages
* [Heroku](https://html.com/) - a cloud Platform to deploy, manage, and scale the app


### Built With
- Visual Studio Code - Text Editor