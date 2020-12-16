const { UserComment , UpdateComment,DeleteComment  } = require ("./comment.controller");
const checkAuthMiddleware = require("../../middleware/check-auth");
const router = require ("express").Router();

router.post("/savecomments", UserComment);
router.put("/", UpdateComment);
router.delete("/deletecomment", DeleteComment);

module.exports = router;