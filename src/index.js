const express=require("express");
const bodyparser=require("body-parser");
const { port }= require('./config/serverconfig');

const setupAndStartServer=async()=>{
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(port,()=>{
        console.log(`server Started at ${ port }`);

    });
}

setupAndStartServer();