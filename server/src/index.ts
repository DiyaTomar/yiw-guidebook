import express, { Request, Response } from "express"; // Importing function from express package as well as Request and Response
import mysql from "mysql";
import cors from "cors";

const app = express();
const PORT = 3000; // Good to always make your ports as constant var

app.use(
  cors({
    origin: "*",
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "yiw",
});

app.get("/", (req: Request, res: Response) => {
  res.json("It works");
});

app.get("/contact", (req: Request, res: Response) => {
  const sql = "SELECT * FROM contact";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log("its working");
});
