/// IMPORT DEPENDENCIES ///
import express from "express";

const PORT = "4000";

const app = express();

app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});
