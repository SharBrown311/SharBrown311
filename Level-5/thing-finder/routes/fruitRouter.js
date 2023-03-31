// fruitRoutes.js
const express = require("express")
const fruitRouter = express.Router();



fruitRouter.route("/fruit")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/fruit/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });




    module.exports = fruitRouter