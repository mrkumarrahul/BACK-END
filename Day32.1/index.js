const express=require("express");
const app=express();
const path=require("path");
port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
})
app.get("/", (req,res) => {
    res.send("Hello World")
})
app.get("/ig/:username", (req,res) => {
    let {username}=req.params;
    const instaData=require("./data.json")
    const data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data })
    }
    else{
        res.render("error.ejs")
    }
    console.log(instaData);
    
})