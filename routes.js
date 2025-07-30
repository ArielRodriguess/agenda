const express = require("express")
const router = express.Router()
const homeController = require("./src/controllers/home")
const loginController = require("./src/controllers/login")
const contatoController = require("./src/controllers/contato")
const { loginRequired } = require("./src/middlewares/middlewares")

// Rotas da Home
router.get("/", homeController.index)

// Rotas de login
router.get("/login/index", loginController.index)
router.post("/login/register", loginController.register)
router.post("/login/login", loginController.login)
router.get("/login/logout", loginController.logout)

// Rotas de contato
router.get("/contato/index", loginRequired, contatoController.index)
router.post("/contato/register", contatoController.register)
router.get("/contato/index/:id", contatoController.editar)

module.exports = router
