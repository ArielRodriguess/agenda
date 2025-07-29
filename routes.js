const express = require("express")
const router = express.Router()
const homeController = require("./src/controllers/home")
const loginController = require("./src/controllers/login")

// Rotas da Home
router.get("/", homeController.index)

// Rotas de login
router.get("/login/index", loginController.index)
router.post("/login/register", loginController.register)
router.post("/login/login", loginController.login)
router.get("/login/logout", loginController.logout)

module.exports = router
