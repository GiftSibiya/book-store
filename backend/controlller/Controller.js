/// IMPORT DEPENDENCIES ///

import { db } from "../utils/Mysql.js";

/// BASIC ROUTES ///

///GET ROUTE
const GetBook = async (req, res) => {
  try {
    const q = "SELECT * FROM books;";

    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
};

///POST ROUTE

///UPDATE ROUTE

///DELETE ROUTE

export { GetBook };
