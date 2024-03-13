const express = require("express");
const router = express.Router();
const {handelUserSignup , handelUserlogin , changeEmail,changePhoneNumber} = require("../controllers/users");
router.post("/",handelUserSignup);
router.post("/login",handelUserlogin);
router.post("/login/changeEmail",changeEmail);
router.post("/login/changePhoneNumber",changePhoneNumber);
module.exports = router;
