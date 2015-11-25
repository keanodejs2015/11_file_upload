var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});

app.use(express.static('public'));

app.post('/photos', upload.single('avt'), function(req, res) {

    console.log(req.file);
    console.log(req.body.exEmail);
    res.send({
        'name': req.file
    });
});


app.listen(3000);
