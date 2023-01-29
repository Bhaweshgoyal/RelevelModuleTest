const UserAuth = require("../service/Auth.service")
const {getUserByEmail} = require("../service/auth.helper.service")
const {verifyPassword} = require("../service/Auth.service")
const signUp = async(req,res) =>{
    let mailId = req.body.mailId;
    let name = req.body.name ;
    let password = req.body.password;
   try{ const newUser = await UserAuth.signUp(mailId, name , password);
    if(newUser){
        return res.stats(200).json({
            message : "successfully signed-Up",
            success : true,
            data : newUser
        })
    }}

    catch(err){
        return res.status(401).json({
            data : err
        })
    }
}

const signIn = async(req,res)=>{
    const Userdata = await getUserByEmail(req.body.mailId);
    if(!Userdata) {
        return res.json({
        message : "Email Id is incorrect Please Try again later",
        success : true , 
        data : null
        })
    }else{

        const passwordVerified = await verifyPassword(req.body.password , Userdata.password);
        if(passwordVerified){
            var token = jwt.sign({email : Userdata.mailId , username : Userdata.Fullname  , password : Userdata.password} , "todoAppKEY");
            return res.status(200).json({
                message  :"Successfully" , 
                success : true, 
                token : token
            })
        }else{
            return res.json({
                message : "Incorrect Password is Inserted ,Please try Again",
                success : true , 
                data : null
            })
        }
    }
}
module.exports = {
    signUp ,signIn
}