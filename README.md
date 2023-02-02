## Folder Structure

Below is an example of a model followed in this template

```
src/
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
  main.ts
```

controllers: This folder contains all the logic to handle HTTP requests and send responses.  
middlewares: This folder contains functions that run before or after a request is handled by a controller.  
models: This folder contains data models used by the API.  
routes: This folder contains the routing information of the API, which maps URLs to controllers.  
services: This folder contains business logic that interacts with databases, external APIs, and more.  
main.ts: This file starts the server and listens for incoming requests.
