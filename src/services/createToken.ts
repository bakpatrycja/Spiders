const jwt = require('jsonwebtoken');

export const  createToken = (user:any) =>{
    let payload = {username: user}
  
    let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: process.env.ACCESS_TOKEN_LIFE
    })
    return accessToken;
}
  