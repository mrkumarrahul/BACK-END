const express=require("express")
const app=express();
port=8080;
app.listen(port,() => {
    console.log(`listening on port: ${port} `);
});