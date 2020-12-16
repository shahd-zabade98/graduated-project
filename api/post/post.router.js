const { UserPost , UpdatePost, DeletePost } = require ("./post.controller");
const checkAuthMiddleware = require("../../middleware/check-auth");
const router = require ("express").Router();

router.post("/saveposts", UserPost);
router.put("/", UpdatePost);
router.delete("/deletepost", DeletePost);

module.exports = router;
