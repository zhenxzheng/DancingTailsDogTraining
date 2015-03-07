/*
 * Serve JSON to our AngularJS client
 */

var data = {
	"reviews": [
		{
			"author": "Angie & Rob",
			"location":"Berkeley",
			"image":"Hubert-low.jpg",
			"text": "Alyssa trained our French Bulldog, Huey, and we had great results! I was referred to her by one of my clients, and we fully trusted her with a key to our place. She came daily to train him with sit-stays, walking better on a leash, and not jumping on people when greeted. We knew Huey was always safe with her because of her positive reinforcement training methods... and he LOVED her! She is gentle, patient, and detailed oriented. We really appreciate how she gave us written notes, and showed us how to do everything ourselves. We highly recommend Alyssa!"
		},
		{
			"author": "Amber",
			"location":"Humboldt County",
			"image":"Autumn1-low.jpg",
			"text":"Alyssa worked with my dog Autumn. She is an amazing trainer and a very kind and considerate person with a genuine love for animals. Autumn would always get super excited when Alyssa would come to work with her." 
		},
		{
			"author": "Kay",
			"location":"Berkeley",
			"image":"Flanders-low.jpg",
			"text": "Alyssa took on the challenge of increasing my seven year old dog's recall response. The combination of her enthusiasm, attention and caring worked wonders and Flanders is much more responsive to coming when called.  Alyssa also gave me pointers on how to maintain the behavior modification that she had achieved.  I'm very happy with the result!  "
		},
		{
			"author": "Mark & Sara",
			"location":"Albany",
			"image":"Ollie-low.jpg",
			"text": "Alyssa took our lovable Wheaton Terrier, Ollie, everyday for an hour and helped groom Ollie into a wonderfully obedient dog. Ollie looked forward to his daily visits with Alyssa and showed a marked improvement in behavior. My wife and I strongly recommend Alyssa for all your dog training needs."
		}
	],
	"services": [
		{
			"title":"Puppies",
			"description":"Early Puppy Behavior Training",
			"image":"basset.jpg",
			"items":[
				{
					"service":"Pre-Puppy Planning"
				},
				{
					"service":"Puppy Manners"
				},
				{
					"service":"Puppy Socialization"
				},
				{
					"service":"Potty Training"
				},
				{
					"service":"Crate Training"
				}
			],
			"packages":[
				{
					"session":"Single Session",
					"price":"$125",
					"description":"Perfect for pre-puppy consultations and first appointments after you've brought your puppy home."
				},
				{
					"session":"4-Session Package",
					"price":"$450",
					"description":"One session per week for four weeks. Perfect for gaining traction on a small set of basic behaviors: Sit, down, stay, and walking politely on leash. I show you the training mechanics during our sessions, and you get the chance to pratice training your puppy during the week (which, by the way, is a great way to build your relationship!).."
				},
				{
					"session":"12-Session Package",
					"price":"$1,250",
					"description":"Three sessions per week for four weeks. Perfect package for busy owners without the time to train their puppy. I will come to your home to train your puppy while you are away at work, and will have intermittent coaching sessions with you as well (one per week). Each puppy will have a custom training plan, which will be discussed during the pre-consult phone call and first session."
				}
			]
		},
		{
			"title":"Basic",
			"description":"Basic Obedience & Behavior",
			"image":"bulldog.JPG",
			"items":[
				{
					"service":"Sit"
				},
				{
					"service":"Down"
				},
				{
					"service":"Sit-Stay"
				},
				{
					"service":"Down-Stay"
				},
				{
					"service":"Leave It"
				},
				{
					"service":"Come when Called"
				},
				{
					"service":"Wait at the Door"
				},
				{
					"service":"Go to Your Mat"
				},
				{
					"service":"Walking Politely on Leash"
				}
			],
			"packages":[
				{
					"session":"Single Session",
					"price":"$125",
					"description":"A single session, ideal for coaching you on training 1-2 specific behaviors you desire for your pooch."
				},
				{
					"session":"4-Session Package",
					"price":"$450",
					"description":"One session per week for four weeks. Perfect for gaining traction on a small set of basic behaviors: Sit, down, stay, and walking politely on leash. I show you the training mechanics during our sessions, and you get the chance to practice training your pooch during the week."
				},
				{
					"session":"12-Session Package",
					"price":"$1,250",
					"description":"Three sessions per week for four weeks. Perfect for busy owners without the time to train their dog. I will come to your home to train your pooch while you are away at work, and will have intermittent coaching sessions with you as well (one per week). Each dog will have a custom training plan, which will be discussed during the pre-consult phone call and first session."
				}
			]
		},
		{
			"title":"Behavior",
			"description":"Behavior modification",
			"image":"jumping.JPG",
			"items":[
				{
					"service":"Jumping"
				},
				{
					"service":"Barking"
				},
				{
					"service":"Begging"
				},
				{
					"service":"Chewing"
				},
				{
					"service":"Digging"
				},
				{
					"service":"Counter Surfing"
				},
				{
					"service":"Dog-Dog Agression"
				},
				{
					"service":"Leash Pulling"
				},
				{
					"service":"Body Handling (for Grooming)"
				},
				{
					"service":"Shy or Fearful Behavior:",
					"sub":[
						"Resource Guarding",
						"Stranger Fear",
						"Fear of Unfamiliar Sounds or Sights"
					]
				}
			],
			"packages":[
				{
					"session":"Single Session",
					"price":"$125",
					"description":"This 90-minute consult involves assessing the problem behavior and discussing best practices for training it out."
				},
				{
					"session":"4-Session Package",
					"price":"$450",
					"description":"One session per week for four weeks, where I provide you with training techniques to work on your dog’s problem behavior(s). Each session after the first will involve a check-in to see how the previous week’s training went, and best ways to move forward. This is an ideal package for the motivated owner who’s enthusiastic about being an integral part of their dog’s training."
				},
				{
					"session":"12-Session Package",
					"price":"$1,250",
					"description":"This package involves a first consult with you on the weekend. Then, I will come to your home and work with your dog on the problem behavior during the day, every business day for two weeks (10 sessions in total). Finally, during the weekend after the 10th training session I will have a consult with you to discuss your dog’s progress and how you can maintain his improved behavior going forward. This package is ideal for busy owners without the time to train their dog."
				}
			]
		}
	]
};

exports.reviews = function (req, res) {
	var reviews = [];
	data.reviews.forEach(function(review, i){
		reviews.push({
			author:review.author,
			location:review.location,
			image:review.image?review.image:"paw-white.png",
			text:review.text
		});
	});
	res.json({
		reviews:reviews
	});
};
var auth = require('../auth');
var youtube = auth.youtube;
exports.videos = function (req, res) {
	var jsondata = {
		channel:[],
		videos:[]
	};
	youtube.channels.list({
		"part":"snippet,statistics",
		"id":"UCsM9t3PX5wriPBHigH9intw",
		"maxResults":50
	}, function(err, data){
		if(err){
			console.log(err);
		}
		else {
			jsondata.channel = data.items;
		}
	});
	youtube.playlistItems.list({
		"part":"snippet",
		"playlistId":"UUsM9t3PX5wriPBHigH9intw",
		"maxResults":50
	}, function(err,data){
		if (err){
			console.log(err);
		}
		else{
			jsondata.videos = data.items;
			res.json(jsondata);
		}
	});
};

exports.services = function(req,res){
	var services = []
	data.services.forEach(function(service, i){
		service.state = false;
		service.packages.forEach(function(package, i){
			package.state=false;
		});
	});
	res.json({
		services:data.services
	})
}
exports.post = function(req, res){
	var id = req.params.id;
	if (id >= 0 && id < data.posts.length){
		res.json({
			post: data.posts[id]
		});
	}
	else{
		res.json(false);
	}
}

//POST
exports.addPost = function(req, res){
	data.posts.push(req.body);
	res.json(req.body);
};

//PUT
exports.editPost = function(req, res){
	var id = req.params.id;
	if (id>=0 && id < data.posts.length){
		data.posts[id] = req.body;
		res.json(true);
	}
	else res.json(false);
}

exports.deletePost = function(req, res){
	var id = req.params.id;
	if(id>=0 && id<data.posts.length){
		data.posts.splice(id,1);
		res.json(true);
	}
	else res.json(false);
}