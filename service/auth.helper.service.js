const getUserByEmail = async(mailId)=>{
    const response = await Users.findOne({
        where : {
            mailId : mailId
        }
    })

    return response
}
module.exports = {
    getUserByEmail
}