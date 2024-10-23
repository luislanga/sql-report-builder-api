import express from "express";
import { config } from "./config";
import { usersRoutes } from "./core/controllers/users/usersRoutes";
import { connectionsRoutes } from "./app/controllers/connections/connectionsRoutes";
import { connectionConfigsRoutes } from "./core/controllers/connectionConfigs/connectionConfigsRoutes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/connections", connectionsRoutes);
app.use("/connection-configs", connectionConfigsRoutes)

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
