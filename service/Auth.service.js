var jwt = require("jsonwebtoken")
const signUp = async(Email,name,password) =>{
    const response = await User.create({
        Fullname : name ,
        password : password ,
        mailId : Email
    })

    return response
}
const verifyPassword = async(inputPass , dataPass)=>{
    return inputPass == dataPass
}
const verifyToken = async(token)=>{
    try {
        const response = jwt.verify(token , "todoAppKEY");
        return response
    }
    catch(err){
        console.log(err)

    }
}
module.exports  = {
    signUp,verifyPassword , verifyToken
}