# Web Application Dockerization

This file contains a Dockerfile for containerizing a web application and running it on localhost:7775.

## Build and Run

1. Clone this repository:

    git clone 
  

2. Navigate to the project directory:

    cd la_tyson_assingment11


3. Build the Docker image:

    
    docker build -t react .
    

4. Run the Docker container:

    
    docker run -p 7775:5173 react 


5. Open your web browser and go to [http://127.0.0.1:7775](http://127.0.0.1:7775) to access the web application.

 
