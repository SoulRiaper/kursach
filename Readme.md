# For a quick start or deployment you can..

## Mount the docker image

First of all you need to build docker image from source code

### `docker build -t some-name .`

And run docker container with needed port

### `docker run -p your-port:80 --name some-container -d some-name`

Congrats now visit http://localhost:your-port

## Or you can..

Change your apache or nginx root directory

### However, make sure php includes all required dependencies ( pg_connect needed )