/// IMPORT DEPENDENCIES ///

import mysql from "mysql";

///--///

// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BLU123",
  database: "test",
});

export { db };
