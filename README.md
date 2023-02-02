## Description

NodeJS, Typescript, Express starter repository for building API

## Installation

```bash
$ npm install
```

## Running the app in local

Before running the production version make sure to add .env file similar to .dev.env

```bash
# development environment
$ npm run dev

# production environment
$ npm run build
$ npm start
```

## Running the app in Docker

```bash
# with docker-compose
docker-compose up -d

# with Dockerfile
docker build -t my-node-app .
docker run -p <local_port>:<app_port> my-node-app
```

## Folder Structure

Below is an example of a model followed in this template

```
src/
  configs/
    env.config.ts
  controllers/
    app.controller.ts
  middlewares/
    auth.middleware.ts
  models/
    user.model.ts
  routes/
    app.route.ts
    index.ts
  services/
    app.service.ts
  utils/
    logger.util.ts
  main.ts
```

- configs: This folder contains all app configuration related functions
- controllers: This folder contains all the logic to handle HTTP requests and send responses.
- middlewares: This folder contains functions that run before or after a request is handled by a controller.
- models: This folder contains data models used by the API.
- routes: This folder contains the routing information of the API, which maps URLs to controllers.
- services: This folder contains business logic that interacts with databases, external APIs, and more.
- utils: This folder contains utility functions used in the app
- main.ts: This file starts the server and listens for incoming requests.
