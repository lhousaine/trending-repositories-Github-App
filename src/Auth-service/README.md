# Auth Service 

in this, I used the java famous framework Spring and it's modules (Boot,Data,Security,...),a mysql 
Database, and Jwt for creation and verification of token.
to write a clean code application, I choose to divide my application into four principals packages.
- **Core:** this package gathered all the common and shared configuration in all other packages.
- **Data:** groupes entities and repositories for communication with database.
- **Domain:** contains all the logic of dealing with usecases.
- **Presentation:** this is responsible for creating a rest api to communicate with the forntend.

## Project Features : 
--- 
This microservice is focused on authentication and management so the two usecases treated in this project are:
- Authenticate User with username/password and return jwt token.
- Create new User Account by username/password and personal infos.

## Project Runing :
---
This project was generated with spring Initialiser.

### install dependencies 
- Run `mvn dependency:resolve` to download dependencies.
- Also you can use `mvn compile` to download compile time dependencies 
- Or refraiche project with IDE plugins.
### Runing units tests:
you can run the application in three modes:
 - with ide : as with intellij idea you refraiche project and work with ide buttons. or by clicking a test left button to run it.
 - with maven: by executing the command `mvn test`.
### Run Application:
you can run the application in three modes:
 - with ide : as with intellij idea you will work with ide buttons. or run application from it's main class.
 - with maven: by executing the command `./mvnw spring-boot:run`.
 - Also using maven cli to package the project and run the resulted Jar:
   - clean and package project : `./mvnw clean package`
   - run the resulted jar : `java -jar target/auth-service-0.0.1-SNAPSHOT.jar`
  
### Dockerize Application:
You need first to create a Jar file as explained above in Run Application step, then run the command :
```docker build -t username/imageName:tagversion .```. To create docker image of the application.
- To push image to docker hub to make it accessible for a deployment in cloud cluster, run : ```docker push username/imageName:tagversion```
