const express = require("express");
const router = express.Router();
const { saveUser } = require("../controllers/userController");

router.post("/save", saveUser);

module.exports = router;
