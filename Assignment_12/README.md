# Web Application Dockerization

This file contains a Dockerfile for containerizing a web application and running it on localhost:8083.

## Build and Run

1. Clone this repository:

    git clone 

    https://github.com/Tyson-a/BandT_Assignments
  

2. Navigate to the project directory:

    cd Assignment_12


3. Build the Docker image:

    
    docker build -t ui_garden .
    

4. Run the Docker container:

    
    docker run -p 8083:5173 ui_garden 


5. Open your web browser and go to [http://127.0.0.1:8083](http://127.0.0.1:8083) to access the web application.

 
