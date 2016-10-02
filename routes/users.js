var express = require('express');
var user = require('../models/user');
var router = express.Router();

var document ={};

/* GET users listing. */
router.route('/')

    .post(function(req, res, next){
    	user.create(req.body, function (err, usr){
    		if (err) throw err;
    		res.json(usr);
    	});
        
    })

	.get(function(req, res, next) {
		user.find({}, function (err, docs) {
			if (err) throw err;
			res.json(docs);
		});
	});

router.route('/:QRCode')
	.get(function(req, res, next) {
		user.find({"QRCode":req.params.QRCode}, function (err, docs) {
			if (err) throw err;
			res.json(docs);
		});
	})

    .put(function(req, res, next){
		user.findOneAndUpdate({"QRCode":req.params.QRCode}, req.body, {upsert:true}, 
			function(err, newDoc) {
				if (err) throw err;
				res.json(newDoc);
	    
});
        
    });


router.route('/short/:sc')
	.get(function(req, res, next) {
		user.find({"shortCode":req.params.sc}, function (err, docs) {
			if (err) throw err;
			console.log(req.params.sc)
			res.json(docs);
		});
	});

module.exports = router;
