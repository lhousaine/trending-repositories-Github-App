# Frontend
## Project Structure :
---
This projet is the  frontend developed to represent results returned by repositories service. In project frontend part, I choose to develop it with angular 10 as it gives me more features and for it's best clean architecture. To make my application more performant and secure I add some additional depencies, as like :
- Bootstrap: to manage page styles
- Ngxs : as state management pattern, I used to manage languages and repositories, also I use to keep the conencted user infos as like it's token.
- angular-jwt : I didn't use currently, because I didn't need to decrypt the token or to check token claims, as I am using token just to check user connected state.
### Project Architecture:
 To develop a good software you need to respect some patterns and architecture by make concerns cross cutting  as the first principal to repect, so that drived my architecture to be divided into three principal layers:
  1. **Core Layer:** this layer contains every thing that is shared between all others application layers as like Utils (jwt Interceptor,Authentication Checker,...); and also state management(states and actions), also guards for access restriction.
  2. **Data Layer:**  contains  all data manipulaitn as our models and services to fecth data from backend microservices.
  3. **Presentation Layer:** The presentation layer is responsible only for dispalying data in pages templates.
- `To make the application more performant I Used the lazy loading pattern.`
  
## Project Features : 
--- 
The mean features and usecases treated in this project are:
- Sign Up new User with username/password and personnal information.
- Sign In user with username/password.
- Fetching and treat languages that are used in the first 100 trending repositories.
- Get the number of trending repositories using a specified language.
- Get the trending repositories using a specified language.
## Project Runing :
---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.
### install dependencies 
Run `npm install` to install all needed dependencies included in the package.json dependencies.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Dockerize Application:
- To create docker image of the application run the command ```docker build -t username/imageName:tagversion .```.
- To push image to docker hub to make it accessible for a deployment in cloud cluster, run : ```docker push username/imageName:tagversion```

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
