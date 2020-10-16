# REPOSITORIES SERVICE

## Project Structure :
---
This projet is the Main service in my project. It is developped to fecth trending repositories, search for used languages to develop these trending repositories, and gives statistics of every language.
I choose to develop to develop this microservice with nodejs-express because it gives more option and features. 
In addition to express dependency, I have need to add some additional libraries like:
- *Babel:* to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
- *@octokit/request:* is a request library for browsers & node that makes it easier to interact with GitHub's REST API.
- *units tests libraries:* mocha, Sinon, chai,...
- *eslint plugins:* ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs

## Project Features : 
--- 
The mean features and usecases treated in this project are:
- Fetching the first 100 trending repositories, and return all languages presenting in it's development.
- Given a language name return the number of trending repositories using a this language.
- Given a language name return the trending repositories using a this language.
  
## Project Runing :
---
This project was generated with NPM CLI.

### install dependencies 
Run `npm install` to install all needed dependencies included in the package.json dependencies.

### Runing units tests:
Run `npm test` to execute the unit tests via mocha, chai and sinon.
 - ***Notice: when runing tests, I have create a a function helper to return me the prior date of 30days, so To  test the function I create a test with mocha and test the fuction returned result with a fixed 30 prior date***
### Run Application:

Run `npm start ` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### Dockerize Application:
To create docker image of the application run the command ```docker build -t username/imageName:tagversion .```.
- To push image to docker hub to make it accessible for a deployment in cloud cluster, run : ```docker push username/imageName:tagversion```

