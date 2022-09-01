require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require('gridfs-stream');

const mongoURI = "mongodb+srv://root:2YKasj80X1oJHFSV@wb-db.dongv5t.mongodb.net/?retryWrites=true&w=majority";


var app = express();
const client = new MongoClient(mongoURI);

app.get("/users",async (req,res) => {
    await client.connect();
    const database = await client.db("whiteblue");
    const users = database.collection('users');
    const user = await users.findOne()
    console.log(user);
    res.json(user);
})
.listen(process.env.PORT,()=> {
    console.log("wb-node-apis is running on 9000");
});