/// IMPORT DEPENDENCIES ///
import express from "express";
import { routers } from "./routes/Routes.js";

//--//

// VARIABLES //
const PORT = "4000";
const app = express();

//--//

app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});
