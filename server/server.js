import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import postsRoutes from "./routes/posts/postsRoutes.js";

const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((error) => {
    console.log(error.message);
  });
app.use(express.json({ limit: "40mb", extended: "true" }));
app.use(express.urlencoded({ limit: "20mb", extended: "true" }));

// localhost:5000/posts
app.use(cors());
app.use("/posts", postsRoutes);
