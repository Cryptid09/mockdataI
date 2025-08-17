// server.js
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./public" // Provide a valid path or remove this line entirely
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`🚀 JSON Server running on port ${port}`);
});
