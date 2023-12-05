const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");
const connectDatabase = require("./database/connection");
const handleError = require("./middleware/error");
const personRoutes = require('./routes/person.routes')
connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);
app.use("/person", personRoutes)
// app.use(handleError);

module.exports = app; // default export
