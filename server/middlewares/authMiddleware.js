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
    try {
        const token = req.cookies.jwt;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                if (err) {
                    console.log(err.message);
                    return res.redirect("/users/login");
                } else {
                    const user = await User.findById(decodedToken.userID);
                    if (!user) {
                        return res.redirect("/users/login");
                    }
                    req.user = user;
                    next();
                }
            })
        } else {
            return res.redirect("/users/login");
        }
    } catch (error) {
        res.status(401).json({
            succeded: false,
            error: error.message
        });
    }
};

export { authenticateToken, checkUser };