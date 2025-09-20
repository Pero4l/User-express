const express = require("express")
const router = express.Router()
const {createPost} = require("../controllers/ticket.controllers")


router.post("/create-post", createPost)

module.exports = router