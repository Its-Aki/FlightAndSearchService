const express=require("express");

const { port }= require('./config/serverconfig');

const setupAndStartServer=async()=>{
    const app=express();
    app.listen(port,()=>{
        console.log(`server Started at ${ port }`);
    });
}

setupAndStartServer();