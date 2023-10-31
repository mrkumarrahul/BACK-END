const express=require("express");
const app=express();
let port=3000;
// app.use((req,res) => {
//     console.log("request received");
//     res.send("Response sent")
// })
app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
})
app.get('/contact',(req,res) => {
  res.send("This is Contact Path")     
})
app.get('/info',(req,res) => {
    res.send({
        name:"Rahul",
        class:"sem III"
    })
})
app.get('/html',(req,res) => {
    let code="<h1>Fruits</h1><ul><li>Mango</li><li>Orange</li></ul>"
    res.send(code);
})