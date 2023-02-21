const express = require('express');
const db = require("./config/connection");
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){
    res.sendFile(path.join(_dirnmae + '/indexhtml'))
})