const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, "../public") 
});

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/NFTsAPI/:path*": "/:path*", 
  })
);

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
