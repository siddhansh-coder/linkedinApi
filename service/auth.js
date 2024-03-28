const jwt = require("jsonwebtoken");
const secretKey = "sid@123";

function setUser(user)
{
    return jwt.sign(
        {   _id:user._id,
            email:user.email
        },secretKey);
}

function getUser(token)
{
    if(!token) return null;
    try{
        return jwt.verify(token,secretKey);
    }
    catch{
        return null;
    }
}    

module.exports = {setUser,getUser};