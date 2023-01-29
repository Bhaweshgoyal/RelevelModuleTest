const { getUserByEmail } = require("../service/auth.helper.service");
const{verifyToken} = require("../service/Auth.service")
const isAuthenticated =async(req,res,next)=>{
    const token = req.headers[`x-access-token`];
    if(!token){
        return res.json({
            status : "JWT is missing",
            data : [],
            err : "InValid Request or Missing argument in Header"
        })
    }

    const returnedData = verifyToken(token);
    if(!returnedData){
        return res.json({
            message: "JWT is Invalid",
            data : [],
            err : "InValid Request or Missing argument in Header"
        })
    }
    const user = await getUserByEmail(returnedData.mailId);
    if(!user){
        return res.json({
            message: "JWT is for  Invalid User",
            data : [],
            err : "InValid Request or Missing argument in Header"
        })
    }
    req.user   = user
    next()
}
module.exports = {
    isAuthenticated
}