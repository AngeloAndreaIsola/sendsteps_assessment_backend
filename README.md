#Run with NPM
    npm install
    npm run start:dev


#Run with Docker
docker build . -t angeloandreaisola/sendsteps_assessment_backend          

docker run -p 8080:8080 -d angeloandreaisola/sendsteps_assessment_backend:latest

Now the APIs should be live at http://localhost:8080/