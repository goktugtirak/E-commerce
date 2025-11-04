import User from "../src/models/userModel.js";
import jwt from "jsonwebtoken";

const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null
                next()
            }else {
                const user = await User.findById(decodedToken.userID)
                res.locals.user = user
                next()
            }
        })
    }else{
        res.locals.user = null
        next()
    }
}

const authenticateToken = async (req, res, next) => {

    try{
        const token = req.cookies.jwt;

        if(token){
            jwt.verify(token, process.env.JWT_SECRET,async (err, decodedToken) => {
                if(err){
                    console.log(err.message);
                    res.redirect("/login");
                    next();
                }else{
                    next();
                }
            })
        }else{
            res.redirect("/login");
        }
    }catch(error){
        res.status(401).json({
            succeded: false,
            error: "Not authorized"
        });
    }

};

export {authenticateToken, checkUser};