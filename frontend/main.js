import "regenerator-runtime/runtime"
import "core-js/stable"
import Login from "./modules/Login.js"
// import "./assets/css/style.css"

const cadastro = new Login(".form-cadastro")
const login = new Login(".form-login")
cadastro.init()
login.init()
