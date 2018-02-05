var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form.ejs', { title: 'form' });
});





var userSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
});


var Users = mongoose.model('Users', userSchema);


router.post('/form', function(req, res, next) {




    var name = new Users({
        FirstName:req.body.firstname,
        LastName: req.body.lastname,
    });


    name.save(function (err, v) {
        console.log(v)


        res.render('form_submited.ejs', {title: 'form'});

    });

    // Name.save();
});





// router.get('/form', function(req, res, next) {
//     res.render('datta..html', { title: 'Express' });
// });


router.get('/userdata', function(req, res, next) {


    Users.find({}, function(err, users){



        console.log(users)
        res.render('usersdata.ejs', { title: 'form', users:users});
    }); 
    
});



// router.get('/form', function(req, res, next) {
//     res.render('datta..html', { title: 'Express' });
// });



// ./routes/index.js
module.exports = router;