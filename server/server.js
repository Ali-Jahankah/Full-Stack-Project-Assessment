const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const { response } = require("express");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const pool = new Pool({
  user: "ali",
  host: "localhost",
  database: "fullstack",
  password: "111111",
  port: 5432,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with

// GET "/"
app.get("/api", (req, res) => {
  // Delete this line after you've confirmed your server is running
  res.send({ express: "Your Backend Service is Running" });
});
app.get("/api/videos", async (req, res) => {
  const query = "SELECT * FROM videos";
  try {
    const videos = await pool.query(query);
    res.status(200).json(videos.rows);
  } catch (error) {
    console.log(error);
    res.status(404).send("Not found");
  }
});
app.delete("/api/deletevideo/:id", async (req, res) => {
  const { id } = req.params;
  const targetQuery = "SELECT EXISTS (SELECT * FROM videos WHERE id = $1)";
  const deleteQuery = "DELETE FROM videos WHERE id = $1";
  try {
    const target = await pool.query(targetQuery, [id]);
    if (target.rows[0].exists) {
      await pool.query(deleteQuery, [id]);
      const videos = await pool.query("SELECT * FROM videos");

      res.status(200).json(videos.rows);
    } else {
      res.status(404).json({ message: "Video not found" });
    }
  } catch (er) {
    console.log(er);
    res.status(500).send("Server Error");
  }
});
app.post("/api/addvideo", async (req, res) => {
  const { title, url, rating } = req.body;

  const checkQuery = "select exists (select * from videos where url = $1)";
  const addQuery =
    "INSERT INTO videos (title, url, rating) VALUES ($1, $2, $3)";
  const allVideoQuery = "SELECT * FROM videos";

  const checkVideo = await pool.query(checkQuery, [url]);
  console.log(checkVideo);
  if (!checkVideo.rows[0].exists) {
    await pool.query(addQuery, [title, url, rating]);
    const allVideos = await pool.query(allVideoQuery);
    res.status(200).json(allVideos.rows);
  } else {
    const allVideos = await pool.query(allVideoQuery);
    res.status(400).json(allVideos.rows);
  }
});
app.get("/api/searchvideos", async (req, res) => {
  const search = req.query.search.toLocaleLowerCase();
  const searchQuery = "SELECT * FROM videos WHERE title LIKE '%' || $1 || '%'";
  const videos = await pool.query(searchQuery, [search]);
  res.status(200).json(videos.rows);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
