import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
