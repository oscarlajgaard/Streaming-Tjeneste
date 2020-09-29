const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


const token = "CFR?XcZ!Au2$9=rj4Ty#>Q<U-oNL]S";



app.get('/video', function(req, res) {
    switch(req.query.id){
        case "1":
            res.sendFile('assets/movies/disco_ormene.mp4', { root: __dirname });
            break;
        default:
            res.send("<h1>Error!</h1>");
            break;
    }
    
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
    console.log(ip);
    
});





app.listen(4000, function () {
    console.log('Listening on port 4000!')
});