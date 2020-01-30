# Techy-Scraper-News **:newspaper:**
Mongoose and Cheerio

### Overview
Techy-Scraper-News is a web app that lets users view the latest articles from popular tech sites or blogs and save their favorites into a personalized library. Whenever a user visits the site, the app scrapes stories from [THE VERGE](https://www.theverge.com/) and display them for the user. The user can then save articles for later viewing. Once an article is saved, the user can add notes to the article and delete each note.
Welcome to [Techy-Scraper-News](https://dry-badlands-26968.herokuapp.com/). Enjoy!


### Commands

This app is setup to listen on a Heroku default port. In the absence of Heroku, it sets the port to 8080 instead. Since no database management is required, setup should be a simple matter of simply uploading the files and having the server listen for a request.	
```
node server.js
```
then navigate to 
```
localhost:8000 in browser
```
You should be able to click the survey button to navigate to the survey form.  Fill out all of the required fields on the survey form and click submit.  A Modal will pop-up with your best match.
```
localhost:8000/api/friends
```
Returns the friends data in JSON format to the browser.


### Prerequisites

- Clone down repo
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Run command 'npm install' in Terminal or GitBash
- Body-parser
- Express
- Path


### What App Does

*Techy-Scraper-News* leverages mongoose.js to communicate with a MongoDB database hosted in the cloud with Heroku. The on-screen buttons trigger the appropriate request via express routing to fetch or update a respective articles data -- the response is rendered in the browser using JavaScript or jQuery.


### Tech Used

* [Nodejs](https://nodejs.org/en/) - run-time environment to build a back-end server
* [Express.js](https://expressjs.com/) - framework to build back end routing 
* [Materialize](https://materializecss.com/) - component library for a front-end responsive framework
* [jQuery](https://jquery.com/) - JavaScript library for DOM traversal and manipulation
* [HTML](https://html.com/) - create pages/documents to be displayed in a web browser
* [CSS](https://www.w3schools.com/Css/css_intro.asp) - customizing content, layout, colors, and fonts
* [Heroku](https://html.com/) - a cloud Platform to deploy, manage, and scale the app


### Built With
- Visual Studio Code - Text Editor