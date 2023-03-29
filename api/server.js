const express = require("express");

const server = express();
const accountRouter = require("./accounts/accounts-router");
server.use(express.json());
server.use("/api/accounts", accountRouter);
server.use((req, res) => {
  res.status(400).send("Aradığınız adres bulunamadı");
});

server.use((err, req, res, next) => {
  let status = err.status || 400;
  res.status(status).json({ message: err.message || "işlem yapılamadı" });
});
module.exports = server;
