const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/my-angular-app'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/