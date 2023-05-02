import express from "express";
import cors from "cors";
import phones from "./phones.json" assert { type: "json" };

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/data", (req, res) => {
  res.send(phones);
});

app.get("/data/:id", (req, res) => {
  // option 1
  // const id = parseInt(req.params.id);

  // option 2
  const id2 = req.params.id * 1;

  // const phonesFindById = phones.find((phone) => phone.id === id) || [];
  // no need optional chain

  const phonesFindById = phones.find((phone) => phone.id === id2);

  // if (id > phones.length) {
  if (!phonesFindById) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID parameters",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      phonesFindById,
    },
  });
});

const port = (process.env.PORT = 3000);

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});
