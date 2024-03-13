const express = require("express");
const router = express.Router();
const {handelUserSignup , handelUserlogin , changeEmail,changePhoneNumber,handelGetUsers } = require("../controllers/users");
router.post("/",handelUserSignup);
router.post("/login",handelUserlogin);
router.post("/login/changeEmail",changeEmail);
router.post("/login/changePhoneNumber",changePhoneNumber);
router.post("/login/handelGetUsers", handelGetUsers);
module.exports = router;
