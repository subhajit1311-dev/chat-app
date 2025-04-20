import jwt from "jsonwebtoken"
import cookie from "cookie-parser"
export const generateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"}
    )
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*100,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development"
    })

// So how does the server know who the user is?
// Instead of saving session info in memory or a database, the server:
// Issues a JWT (token) to the user when they log in.
// Stores that JWT in a cookie (like in your code) or sends it to the frontend.
// The frontend/browser automatically sends that token back with every request.

// The server then:
// Verifies the JWT using a secret key (e.g., with jwt.verify()).
// Extracts the user info (like userId) from the token payload.
// Proceeds knowing who the user is, without saving any session

    return token;
}