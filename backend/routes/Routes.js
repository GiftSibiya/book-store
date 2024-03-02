/// IMPORT DEPENDENCIES ///
import express from "express";

//IMPORT CALLBACK FUNCTIONS
import { GetBook } from "../controlller/Controller.js";

//VARIABLES
const routers = express.Router();

/// ROUTES ///

routers.get("/book", GetBook);

///--///

export { routers };
