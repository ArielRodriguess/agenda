const express = require("express")
const router = express.Router()
const homeController = require("./src/controllers/homeController")
const contatoController = require("./src/controllers/contatoController")

// Rotas da Home
router.get("/", homeController.paginaInicial)
router.post("/", homeController.trataPost)

// Rotas de Contato
router.get("/contato", contatoController.paginaContato)

module.exports = router
