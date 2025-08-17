// server.js
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: null // 🚫 disable looking for ./public
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`🚀 JSON Server running on port ${port}`);
});
