/// IMPORT DEPENDENCIES ///
import express from "express";

//IMPORT CALLBACK FUNCTIONS
import { GetBook, AddBook } from "../controlller/Controller.js";

//VARIABLES
const routers = express.Router();

/// ROUTES ///

// BOOK ROUTES
routers.get("/book", GetBook);
routers.post("/book", AddBook);

// USER ROUTES
routers.get("/users", GetBook);
routers.post("/users", AddBook);

///--///

export { routers };
