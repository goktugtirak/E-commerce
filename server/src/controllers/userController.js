import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const getRegisterPage = (req, res) => {
    res.render('register');
}

const registerUser = async (req, res) => {
    try{
        const {username, email, password} =req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        // DB kaydı
        await User.create({ username, email, password: hashedPassword });

        res.send(`<h1>Hoşgeldin, ${username}!</h1><p>Kayıt başarılı.</p>`);
    } catch (error){
        res.status(500).json({
            succeded: false,
            error,
        });
    }
}

const getLoginPage = (req, res) => {
    res.render('login');
}

const loginUser = async (req, res) => {
    
    try{
        const { username, password } = req.body;

        const user = await User.findOne({username})

        let same = false

        if(user) {
            same = await bcrypt.compare(password, user.password)

        }else{
            return res.status(401).json({
                succeded: false,
                error: "There is no such user",
            });
        }

        if(same){

            const token = createToken(user._id)
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 1000*60*60*24,
            });

            res.redirect("/");
        }else{
            res.status(401).json({
                succeded: false,
                error: "password are not match",
            });
        }
    } catch (error){
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};

const logoutUser = (req, res) => {
    try{
        res.cookie("jwt", "", {
            httpOnly: true,
            maxAge: 1,
        });
    
        res.redirect("/");
    }catch(error){
        res.status(500).json({
            succeded: false,
            error: error.message,
        });
    }
};

const createToken = (userID) => {
    return jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

export {registerUser, loginUser, logoutUser, getLoginPage, getRegisterPage};