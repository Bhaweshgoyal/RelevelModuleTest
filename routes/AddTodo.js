const { application } = require("express")
const { isAuthenticated } = require("../MiddleWare/authValidation")
const {addTodo}  = rewquire()
const newTodo = async(req,res)=>{
    application.post("/api/addTdod" , isAuthenticated , addTodo)
}