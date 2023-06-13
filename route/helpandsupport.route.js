const express = require('express');
const help = require('../controllers/helpandsupport');
const { authJwt } = require("../middlewares");
const router = express.Router();
router.post("/createQuery", [authJwt.verifyToken], help.AddQuery);
router.get("/", help.getAllHelpandSupport);
router.get("/:id", help.getAllHelpandSupportgetByuserId);
router.delete("/delete/:id", help.DeleteHelpandSupport);