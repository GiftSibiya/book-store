/// IMPORT DEPENDENCIES ///
import express from "express";

//IMPORT CALLBACK FUNCTIONS
import { GetBook, AddBook } from "../controlller/Controller.js";

//VARIABLES
const routers = express.Router();

/// ROUTES ///

routers.get("/book", GetBook);
routers.post("/book", AddBook);

///--///

export { routers };
