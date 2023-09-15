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

app.use(express.json());

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

app.post("/add-message", (req: Request, res: Response) => {
  // console.log(req.body);
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error adding contact" });
    } else {
      res.status(201).json({ message: "Contact added successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log("its working");
});
