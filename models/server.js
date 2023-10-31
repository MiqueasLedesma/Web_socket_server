require("dotenv").config();

const express = require("express");
const cors = require("express");
const socketController = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();

    // Web sockets
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();

    // Puerto
    this.port = process.env.PORT || 8080;

    // Rutas Http
    this.paths = {};

    // Routas Ws
    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth.route"));
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () =>
      console.log(
        `Server listening on port: ${this.port}, http://localhost:${this.port}/`
      )
    );
  }
}

module.exports = Server;
