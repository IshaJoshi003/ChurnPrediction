var express    = require('express'),
    Bourne     = require('bourne'),
    bodyParser = require('body-parser'),
    crypto     = require('crypto'),
    db         = new Bourne('user.json'),
    router     = express.Router();

function hash(password){
	return crypto.createHash('sha256').update(password).digest('hex');
}    

router
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
      }))

.post('/login',function(req,res){
	var user = {
		username :req.body.username,
        password :hash(req.body.password)
	}
	db.find(user,function(err,data){
		if(data.length >0){
			res.json({
				status:true,
				success:'valid username and password ' 
			});
		}  else{
    		   console.log('error');
               res.json({ status: false, failure:'Invalid username and password'});
           }
	})

})
.post('/signup',function(req,res){
	var user = {
		username :req.body.username,
		password :hash(req.body.password)
	};
	console.log(req.body);
	db.find(user,function(err,data){
		if(data.length>0){
			res.json({
				status:false,
				failure:'user already exists'
			});

		} else{
			db.insert(user,function(err,data){
				res.json({
					status:true,
					success:'succesfully register user'

				});
			})
		}
	})
})

module.exports = router;
