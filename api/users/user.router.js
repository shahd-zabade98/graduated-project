const { createUser, loginUser} = require ("./user.controller");

const router = require ("express").Router();
//const {checkToken} = require("../../auth/token_validation");
router.post("/signup", createUser);
router.post("/login", loginUser);


module.exports = router;



