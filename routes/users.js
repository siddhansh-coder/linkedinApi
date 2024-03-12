const express = require("express");
const router = express.Router();
const {handelUserSignup , handelUserlogin , handelChangeEmailOrPhoneNumber} = require("../controllers/users");
router.post("/",handelUserSignup);
router.post("/login",handelUserlogin);
router.post("/login/changeEmailOrPhoneNumer",handelChangeEmailOrPhoneNumber);
module.exports = router;
