const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("Robotics JSON file.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);