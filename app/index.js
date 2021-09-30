import express from "express";
import { promises as fs } from "fs";

const app = express();

app.get("/:page", (req, res) => {
  fs.readFile(`${req.params.page}.json`, "utf8")
    .then((contents) => {
      res.json(contents);
    })
    .catch(() => {
      res.statusCode = 404;
      res.end("404!");
    });
});

app.listen(3000, () => {
  console.info("Server running");
});
