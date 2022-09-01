const express = require("express");
var app = express();

app.get("/",(req,res) => {
    res.json({ message : "hello world " });
})
.listen(9000,()=> {
    console.log("wb-node-apis is running on 9000");
});