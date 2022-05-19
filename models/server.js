require("dotenv").config;
const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    //Middlewares
    this.middlewares();
    this.routes();
  }
  routes() {
    
   this.app.use( this.usersPath, require('../routes/user'));
  }
  
  listen() {
    this.app.use(cors());
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }

  middlewares() {
    //Directorio publico
    this.app.use(express.static("public"));

    //lectura y parseo

    this.app.use(express.json())
  }
}

module.exports = Server;
