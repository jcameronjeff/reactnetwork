const express = require("express");
const router = express.Router();

// @route GET api/posts/test
// @desc Tests POSTS route
// @access Public

router.get("/test", (req, res) =>
  res.json({
    msg: "posts"
  })
);

module.exports = router;
