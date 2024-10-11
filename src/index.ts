import express from "express";
import { config } from "./config";
import { usersRoutes } from "./http/controllers/users/usersRoutes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);

const port = config.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
