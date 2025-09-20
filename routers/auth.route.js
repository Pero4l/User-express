const express = require("express")
const router = express.Router()
const {register, login} = require("../controllers/auth.controllers")
const {createPost} = require("../controllers/ticket.controllers")


router.post("/register", register)
router.post("/login", login)

router.post("/create-post", createPost)

module.exports = router