const express = require("express");
const app = express();
const {connectMongoDB} = require("./connect");
const PORT = 9000;
const cookieParser = require('cookie-parser');
const {restrictToLoggedinUsersOnly} = require("./middleWares/auth");

connectMongoDB("mongodb+srv://bansalsid2000:eucZB1kvKz2YgoPb@cluster0.1q28hsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=> console.log("mongo db connected"));
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(express.json());
//app.use(cors());
app.use( (req,res,next)=>{
    console.log("hello from middleware");
    console.log(req.body);
    next();
})

const userRouter = require("./routes/users");
app.use("/users" , userRouter);


app.listen(PORT,()=> console.log("server started"));








