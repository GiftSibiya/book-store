/// IMPORT DEPENDENCIES ///

import { db } from "../utils/Mysql.js";

///--///

/// VARIABLES
const BooksTable = "books";

/// BASIC ROUTES ///

///GET ROUTE
const GetBook = async (req, res) => {
  try {
    const q = `SELECT * FROM ${BooksTable};`;

    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
};

///POST ROUTE

const AddBook = async (req, res) => {
  try {
    // Note the backticks around `desc`
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
    const values = [
      "this is title from backend",
      "This is the description from the backend",
      "This is the cover Pic from the backend",
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "An error occurred while adding the book." });
  }
};

///UPDATE ROUTE

///DELETE ROUTE

export { GetBook, AddBook };
