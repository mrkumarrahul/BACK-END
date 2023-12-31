const express = require("express");
const app = express();
let port = 3000;
// app.use((req,res) => {
//     console.log("request received");
//     res.send("Response sent")
// })
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
app.get('/contact', (req, res) => {
    res.send("This is Contact Path")
})
app.get('/info', (req, res) => {
    res.send({
        name: "Rahul",
        class: "sem III"
    })
})
app.get('/html', (req, res) => {
    let code = "<h1>Fruits</h1><ul><li>Mango</li><li>Orange</li></ul>"
    res.send(code);
})
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    console.log(req.params);
    res.send(`Welcome to the page of ${username} with id ${id}`);
});
app.get('/search', (req, res) => {
    let { q } = req.query
    res.send(`Search results for query:${q} `)
})