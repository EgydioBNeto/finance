import express from "express";
import balanceRoutes from "./balanceRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "balance API" });
  });
  app.use(express.json(), balanceRoutes);
};

export default routes;
