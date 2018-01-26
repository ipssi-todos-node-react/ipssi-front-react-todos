const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  config = require("config"),
  app = express();

// API Services
const serviceGetTodo = require("./services/todo/get"),
  serviceCreateTodo = require("./services/todo/create"),
  serviceUpdateTodo = require("./services/todo/update"),
  serviceDeleteTodo = require("./services/todo/delete");

/* IMPORTS */

const API_CONFIG = config.api;

// set our port
const PORT = process.env.PORT || API_CONFIG.port;

//create our router
const router = express.Router();

// Handle the connection event
const db = mongoose.connection;
// DATABASE SETUP
const HOST = `${config.db.host}${config.db.port}`;
mongoose.connect(HOST);

// Mongoose Event Emitter
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("DB Connected"));

// configure app
// lgo requests to the console
app.use(morgan("dev"));

//TODO
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "DELETE"]);
  next();
});

// configure the body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware to use for all requests
router.use((req, res, next) => {
  // do logging
  console.log("API called");
  next();
});

// API Routes

router
  .route("/todos")
  .get(serviceGetTodo.getAllTodos)
  .post(serviceCreateTodo.createTodo)
  .delete(serviceDeleteTodo.deleteAllTodos);

router
  .route("/todo/:id")
  .get(serviceGetTodo.getTodo)
  .put(serviceUpdateTodo.updateTodo)
  .delete(serviceDeleteTodo.deleteTodo);

app.use(`${API_CONFIG.path}${API_CONFIG.version}`, router);

// START SERVER
app.listen(PORT);

console.log(`running on: ${API_CONFIG.host}:${PORT}`);
