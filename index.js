const express = require("express");
const app = express();
const {connectMongoDB} = require("./connect");
const {connectMySql,dataToInsert,disConnectMysql} = require("./database");
const PORT = 9000;
const{createNeoConnection} = require("./neo4jDb");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
connectMySql();
createNeoConnection();
connectMongoDB("mongodb+srv://bansalsid2000:eucZB1kvKz2YgoPb@cluster0.1q28hsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log("mongo db connected"));
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(express.json());

app.use( (req,res,next)=>{
    console.log("hello from middleware");
    console.log(req.body);
    next();
})

app.use(session({
    secret: 'sid',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({  mongoUrl: 'mongodb+srv://bansalsid2000:eucZB1kvKz2YgoPb@cluster0.1q28hsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' })
}));


const userRouter = require("./routes/users");
app.use("/users" , userRouter);


app.listen(PORT,()=> console.log("server started"));








