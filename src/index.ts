import express from "express";
import { config } from "./config";
import { usersRoutes } from "./core/controllers/users/usersRoutes";
import { connectionsRoutes } from "./app/controllers/connections/connectionsRoutes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/connections", connectionsRoutes);

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
