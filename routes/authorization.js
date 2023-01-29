const {signUp , signIn} = require("../controller/Auth.controller")
const auth = async(app) =>{
    app.post("/api/signUp" , signUp)
    app.post("/api/signIn" , signIn)
}

module.exports = {
    auth
}