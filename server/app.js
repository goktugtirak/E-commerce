import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import pageRoute from './src/routes/pageRoute.js';
import userRoute from './src/routes/userRoute.js';
import connect from './db.js';
import { checkUser } from './middlewares/authMiddleware.js';

const __dirname = path.resolve(); 

const app = express();

connect(); // DB connection

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use(checkUser);
app.use('/', pageRoute);
app.use('/users', userRoute);


app.listen(process.env.PORT, () => {
    console.log("server running:8000")
})