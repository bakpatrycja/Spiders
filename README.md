
### This project will not run without db file and .env
#### Technical stack
NodeJs, Express.js, Chai, Mocha, Docker, JWT Token, Sequelize, MongoDB, Mongoose 

### Scripts
#### `npm run start:dev` // to

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

### Docker

#### Prod API docker

- docker build -t spiders/landing-page-api .
- docker run -p 49160:8080 spiders/landing-page-api

#### Dev MYSQL + phpMyAdmin Containers 

- docker-compose up --build


