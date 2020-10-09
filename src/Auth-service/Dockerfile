FROM adoptopenjdk/openjdk11:alpine-jre
VOLUME /auth
ADD /target/auth-service-0.0.1-SNAPSHOT.jar  /auth/
EXPOSE 8081
CMD  java -jar  /auth/auth-service-0.0.1-SNAPSHOT.jar
