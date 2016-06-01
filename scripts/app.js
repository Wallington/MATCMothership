
/*********************************************
	AngluarJS ver. 1.4.8
	Author: Sean O'Brien
	Details: This script hold all the controller since 
	script tag does not add groups of Javascript together
	we have create one file which has controller and module 
	in same script.
*********************************************/   



var vozApp = angular.module('vozApp', ['ngMaterial','ui.bootstrap', 'ngAnimate', 'ngAria','ngMessages', 'ngRoute' ])

//define the custome google materials theme

vozApp.config(function($mdThemingProvider)
{
	$mdThemingProvider.definePalette('VOZ',
	{
		'50': 	'ffcc34',
		'100': 	'ffc51a',
		'200': 	'ffd24d',
		'300': 	'ffbf00', //main color
		'400': 	'e6ac00',
		'500': 	'e6ac00', //main color
		'600': 	'e6ac00',
		'700': 	'ffd24d',
		'800':  'ffd24d', //main color
		'900':  '64DD17',
		'A100': 'ffd24d', //main color //warn color
		'A200': '271649', //warn color
		'A400': '441154', //warn color
		'A700': '441154', //acceent color
		'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
											// on this palette should be dark or light
		'contrastLightColors': ['50', '100', //hues which contrast should be 'dark' by default
		 '200', '300', '400', 'A100'],
		'contrastDarkColors': ['600', '700', //hues which contrast should be 'dark' by default
		 '800', '900', 'A200', 'A400']    // could also specify this if default was 'dark'
	});
	$mdThemingProvider.theme('default').primaryPalette('VOZ');
});


//define the route Provider of our pages.
vozApp.config(function ($routeProvider)
{
	$routeProvider
	
	//define home route.
	.when('/',
	{
		templateUrl : 'pages/home.html',
		controller  : 'homeController'
	})
	
	.when('/about',
	{
		templateUrl : 'pages/about.html',
		controller  : 'aboutController'
	})
	.when('/new',
	{
		templateUrl : 'pages/new.html',
		controller  : 'newController'
	})
	.when('/download',
	{
		templateUrl : 'pages/download.html',
		controller  : 'downloadController'
	})
	.when('/cards',
	{
		templateUrl : 'pages/cards.html',
		controller  : 'cardsController'
	})
	.when('/boards',
	{
		templateUrl : 'pages/boards.html',
		controller  : 'boardsController'
	})
	.when('/support',
	{
		templateUrl : 'pages/support.html',
		controller  : 'supportController'
	})
	.when('/community',
	{
		templateUrl : 'pages/community.html',
		controller  : 'communityController'
	})
	.when('/media',
	{
		templateUrl : 'pages/media.html',
		controller  : 'mediaController'
	})
	.when('/contact',
	{
		templateUrl : 'pages/contact.html',
		controller  : 'contactController'
	})
	
	.when('/founder',
	{
		templateUrl : 'pages/founder.html',
		controller  : 'founderController'
	})
	.when('/founderCheckout',
	{
		templateUrl : 'pages/founderCheckout.php',
		controller  : 'founderCheckoutController'
	})
	.when('/lore',
	{
		templateUrl : 'pages/lore.html',
		controller  : 'loreController'
	})
	.when('/tutorials',
	{
		templateUrl : 'pages/tutorials.html',
		controller  : 'tutorialsController'
	});
});
//define the first and secondary nav functions
vozApp.service('Nav', function()
{
	
	this.pageName = '';
	//define the main list and secondary
	this.menuList =
	[
		{
			"name" : "New",
			"url"  : "#/new",
			"disable" : false,
			"subMenu" : 
			[
				{
					"name" : "Cards",
					"achLink" : "cards"
				},
				{
					"name" : "Realms",
					"achLink" : "realms"
				}
			]	
		},
		{
			"name"   	: "about",
			"url"   	: "#/about",
			"disable" : false,
			"subMenu"	:
			[
				{
					"name" : "About",
					"achLink" : "",
					"href" : "#/about#about"
				},
				{
					"name" : "Tutorials",
					"achLink" : "",
					"href" : "#/tutorials"
				},
				{
					"name" : "Lore",				
					"achLink" : "",
					"href" : "#/lore"
				}
			]
		},
		{
			"name" : "Cards",
			"url"  : "#/cards",
			"disable" : false,
			"subMenu" : 
			[
				{
					"name" : "Materia",
					"achLink" : "materia"
				},
				{
					"name" : "Terrain",
					"achLink" : "terrain"
				},
				{
					"name" : "Ambush",
					"achLink" : "ambush"
				},
				{
					"name" : "Glyph",
					"achLink" : "glyph"
				},
				{
					"name" : "Spell",
					"achLink" : "spell"
				},
				{
					"name" : "Enchant",
					"achLink" : "enchant"
				},
				{
					"name" : "Minion",
					"achLink" : "minion"
				},
				{
					"name" : "Boss",
					"achLink" : "boss"
				}
			]
			 
		},
		{
			
			"name" : "Boards",
			"url"  : "#/boards",
			"disable" : false,
			"subMenu" :
			[
				{
					"name" : "Realms",
					"achLink" : "realms"
				},
				{
					"name" : "PVP",
					"achLink" : "pvp"
				},
				{
					"name" : "PVE",
					"achLink" : "pve"
				},
				{
					"name" : "Conquest",
					"achLink" : "conquest"
				},
				{
					"name" : "Raids",
					"achLink" : "raids"
				}
			] 	
		},
		{
			"name"   	: "community",
			"url"   	: "#/community",
			"disable" : false,
			"subMenu"	:
			[ 
				{
					"name" : "Forums",
					"achLink" : "forums",
					"url" : 'http://forums.visionsofzosimos.net/'
				},
				{
					"name" : "Blog",
					"achLink" : "blog",
					"url": "http://vozdevblog.blogspot.com/"
				},
				{
					"name" : "Fan art",
					"achLink" : "fanArt"
				}
			]	
		},
		{
			"name"   	: "media",
			"url"   	: "#/media",
			"disable" : false,
			"subMenu"	:
			[
				{
					"name" : "News",
					"achLink" : 'news'
				},
				{
					"name" : "Video",
					"achLink" : "video"
				},
				{
					"name" : "Live!",
					"achLink" : "live"
				},
				{
					"name" : "Sketch Up",
					"achLink" : "sketchup"
				},
				{
					"name" : "Wallpaper",
					"achLink" : "wallpaper"
				}
				
			]
		}
	]; 
	
	//this hold the secondary menu
	this.subMenuList = [];
	
	
	this.OpenNav = function(menuName)
	{
		switch(menuName) //we check the name for match if 
		{
			case 'new':
				this.subMenuList = this.menuList[0].subMenu;
				break;
			case 'about':
				this.subMenuList = this.menuList[1].subMenu;
				break;
			case 'cards':
				this.subMenuList = this.menuList[2].subMenu;
				console.log(this.subMenuList);
				break;
			case 'boards':
				this.subMenuList = this.menuList[3].subMenu;
				
				break;
			case 'community':
				this.subMenuList = this.menuList[4].subMenu;
				
				break;
			case 'media':
				this.subMenuList = this.menuList[5].subMenu;
				
				break;
			case 'support':
				this.subMenuList = this.menuList[6].subMenu;
				
				break;
			default:
				this.subMenuList ='';
				break;
		}
		
		
	}
});

//define for the shop.
vozApp.service ('Store', function($http, $window)
{
	this.item = [];
	this.itemCount = 0;
	
	this.payer =
	{
		card : '',
		type : '',
		email: '',
		exMonth : null,
		exYear	: null,
		cvv2    : '',
		first   : '',
		last    : '',
		address : 
		{
			line1 : '',
			city : '',
			country : '',
			postalCode : '',
			state : ''
		},
		state   : '',
		validUntil : ''
	}
	
	//this add items to the shoping card
	this.AddItem = function(itemName, itemPrice, elementCodeName)
	{ 	
	  if(this.item.length == 0)  //check if cart has any item start off if not is true
	  {
		 this.item.push
		  (
			  {
				  copy: 1, //how many copy of the founder code
				  name : itemName, //get the name
				  price : itemPrice, //get the price
				  img: elementCodeName //get name of image
			  }
		  );
		  this.itemCount++;  
	  }
	  else //if cart does have item then were see if there duplicated item
	  {
		   for(var i = 0; i < this.item.length; i++)
		   {
			   //console.log("start of loop");
			   //console.log("input name: " + itemName)
			   //console.log("loop name: " + this.item[i].name);
				if(itemName == this.item[i].name)
				{
					//console.log("found duplicates in the loop");
					this.item[i].copy++; //incress the number of copys of this item then break from loop
					//console.log("duplication side");
					this.itemCount++;
					break;
						
				}
				else //if not then like the top where pop new segment into it.
				{
					//console.log("found non duplicates in the loop");
					this.item.push
					(
						{
							copy: 1, //how many copy of the founder code
							name : itemName, //get the name
							price : itemPrice, //get the price
							img: elementCodeName //get name of image
						}
					);
					this.itemCount++;
					break;  	
				}
		   }
		   
	  }
	  
   }
	
	
	 this.CalulateTotal = function()
	  {
		 var totalPrice = 0; //clean total set at zero
		 for(var i = 0; i < this.item.length; i++) //for each item we want get each copy * set cost price
		 {
			 totalPrice += (this.item[i].copy * this.item[i].price);
		 }
		 return totalPrice;
	  }
	 this.UpdateItem = function()
	 {
		 this.itemCount= 0; //clean total set at zero
		 for(var i = 0; i < this.item.length; i++) //for each item we want get each copy * set cost price
		 {
			 this.itemCount += this.item[i].copy;
		 } 
	 }
	
	this.RemoveItem = function(itemId)
	{
		if(this.item.length != 1) //if not last item in list 
		{
			this.item.splice(itemId,1)
		}
		else
		{
			this.item.pop();	
		}
		
	}
	
	
	this.CheckOut = function(method) //method is the key which check out should open and load to proccess the order
	{
		if(method == 'paypal')
		{
			$window.open('php/createPayPalPayment.php?items=' + JSON.stringify(this.item), "_blank");
		}
	}
	
	this.Clear = function()
	{
		this.item = [];
		this.itemCount = 0;	
	}
});


//define the mainController 
vozApp.controller('mainController',function($scope, $mdSidenav, $window, Nav, $location, $anchorScroll)
{
	$scope.ToggleRight = function()
	{
		$mdSidenav('right').toggle();	
	}
	$scope.ToggleLeft = function()
	{
		$mdSidenav('left').toggle();	
	}
	$scope.Close = function(direction)
	{
		$mdSidenav(direction).close();
	}
	
	//json the list of each of our social media pages
	$scope.socialList = 
	[
		{
			'icon' : 'fa fa-2x fa-facebook',
			'name' : 'Facebook',
			'url'  : 'https://www.facebook.com/VisionsofZosimos?fref=ts' 
		},
		{
			'icon' : 'fa fa-2x fa-google-plus',
			'name' : 'Google Plus',
			'url'  : 'https://plus.google.com/+VisionsOfZosimosNet' 
		},
		{
			'icon' : 'fa fa-2x fa-tumblr',
			'name' : 'Tumblr',
			'url'  : 'http://visionsofzosimos.tumblr.com/' 
		},
		{
			'icon' : 'fa fa-2x fa-twitter',
			'name' : 'Twitter',
			'url'  : 'https://twitter.com/VoZCCG' 
		},
		{
			'icon' : 'fa fa-2x fa-youtube',
			'name' : 'Youtube',
			'url'  : 'https://www.youtube.com/channel/UCCJeVduLe44tjWt8l5ZZjEw' 
		},
		{
			'icon' : 'fa fa-2x fa-twitch',
			'name' : 'Twitch',
			'url'  : 'https://www.twitch.tv/visionsofzosimos/' 
		}
	];
	
	$scope.Tab = function(url)
	{
		$window.open(url, "_blank");	
	}
	
	var originatorEv;
	
	$scope.OpenMenu = function($mdOpenMenu, event)
	{
		originatorEv = event;
		$mdOpenMenu(event);
	}
	
	$scope.menuList = Nav.menuList;
	
	$scope.openSubNav = function()
	{
		$scope.subMenuList = Nav.subMenuList;
		$scope.isNavOpen = Nav.isNavOpen;
	}
	
	$scope.GoToAch = function(archTag)
	{
		if( archTag == 'forums')
		{
			$window.open('http://forums.visionsofzosimos.net/', "_blank");
		}
		else if(archTag == 'blog')
		{
			$window.open('http://vozdevblog.blogspot.com/', "_blank");
		}
		else
		{
			$location.hash(archTag);
			$anchorScroll();
		}
	}
	
	$scope.GoToTop = function()
	{
		$location.hash('top');
		$anchorScroll();
	}
	
});

/////////////////////////////////////////////
/* Sub pages controllers                   */
/////////////////////////////////////////////

//define the about sub pages Controller
vozApp.controller('homeController', function($scope, $http, Nav)
{
	
	$scope.rand = 0;  
	$scope.survey =
	{
		question  		: '',
		choiceList		: [],
		answer    		: '',
		email 	  		: '',
		timeStamp 		: '' 	
	}
	$scope.server = 
	{
		message : '',
		colorCode : ''	
	}
	
	Nav.OpenNav('home');  //define what page were on
	$scope.openSubNav(); // update the main controller 
	
	//getting data from JSON file
	$http
	(
		{
			medthod: 'GET',
			url: 'surveyQuestion/survey.json'	
		}
	).then(function successCallback(response)
	{
		var maxRandomNumber = response.data.length; //get the length of the JSON array
		$scope.rand = Math.floor((Math.random() * maxRandomNumber)); //choices one of X in the JSON array
		
		$scope.survey.question = response.data[$scope.rand].question;
		$scope.survey.choiceList = response.data[$scope.rand].questionChoices
	},
	function errorCallback(response)
	{
		console.log("ERROR");
	});
	
	$scope.Submit = function(htmlForm)
	{
		if($scope.survey.email.length < 10 || $scope.survey.email == '' || $scope.survey.email.length >= 100)
		{
			return false;	
		}
		else if($scope.survey.answer == '')
		{
			return false;	
		}
		else
		{
			$http
			(
				{
					medthod: 'GET',
					url: 'scripts/sendSurvey.php'
				}
			).then(function successCallback(response)
			{
				$scope.server.colorCode = response.data.colorCode;
				$scope.server.message = response.data.message;
			},
			function errorCallback(response)
			{
				$scope.server.colorCode = 'alert alert-danger';
				$scope.server.message = 'Error: Was not able connect to DB at this time';
			});
		}
		
	}
	
	
});

vozApp.controller('homeCarousel', function($scope) //this controlls the home slider
{
	$scope.slides =
	[
		'images/IndieGoGoBanner.png', //slide 1
		'images/GenConBanner.png', //slide 2
		'images/eldjotnar.jpg' //slide 3, end of slides
	]
	
});

vozApp.controller('tutorialsController', function($scope, $mdMedia, $document, $interval,$timeout)
{
	
	$scope.serverMessageBool = true;
	$timeout
	(
		function()
		{
			$scope.serverMessageBool = false;
		}, 5000
	);
	$scope.setBook = function()
	{
		//extrating media querrys from Google Matterals API
		//to get the size of said screen and taken lowest to maxium
		//the veiws siad smaller screens.
		if($mdMedia('xl'))
		{
			$("#flipbook-xl").turn
			(
				{
					width: 1864,
					height: 1242	
				}
			);
			
		}
		else if ($mdMedia('lg'))
		{
			$("#flipbook-lg").turn
			(
				{
					width: 1224,
					height: 792	
				}
			);
		}
		else if ($mdMedia('md'))
		{
			$("#flipbook-md").turn
			(
				{
					width: 943,
					height: 611	
				}
			);
		}
		else if ($mdMedia('sm'))
		{
			$("#flipbook-sm").turn
			(
				{
					width: 600,
					height: 388	
				}
			);
		}
		else
		{
			return null;	
		}
	}
	
	$scope.setBook();
	
	
	
	
	
});

vozApp.controller('loreController', function($scope, $mdMedia, $document, $interval,$timeout)
{
	
	$scope.serverMessageBool = true;
	$timeout
	(
		function()
		{
			$scope.serverMessageBool = false;
		}, 5000
	);
	$scope.setBook = function()
	{
		//extrating media querrys from Google Matterals API
		//to get the size of said screen and taken lowest to maxium
		//the veiws siad smaller screens.
		if($mdMedia('xl'))
		{
			$("#flipbook2-xl").turn
			(
				{
					width: 1064,
					height: 825	
				}
			);
			
		}
		else if ($mdMedia('lg'))
		{
			$("#flipbook2-lg").turn
			(
				{
					width: 1064,
					height: 825	
				}
			);
		}
		else if ($mdMedia('md'))
		{
			$("#flipbook2-md").turn
			(
				{
					width: 943,
					height: 692	
				}
			);
		}
		else if ($mdMedia('sm'))
		{
			$("#flipbook2-sm").turn
			(
				{
					width: 600,
					height: 441	
				}
			);
		}
		else
		{
			return null;	
		}
	}
	
	$scope.setBook();
	
	
	
	
	
});

vozApp.controller('downloadController', function($scope, $http,$location)
{
	$scope.request =
	{
		name : '',
		email : '',
	};
	
	$scope.serverFeedback = "alert"; //were define default css so when $http done it will either add alert-success or alert-danger
	$scope.message; // were get error message back from server was successful or fail send data
	
	
	$scope.Submit = function(htmlForm)
	{
		
		if($scope.request.email.length < 10 || $scope.request.email == '' || $scope.request.email.length >= 100)
		{
			return false;	
		}
		else if($scope.request.name.length < 5 || $scope.request.name == '')
		{
			return false;	
		}
		else
		{
			$http
			(
				{
					medthod: 'GET',
					url: 'scripts/sendAlphaKeys.php?name=' + $scope.request.name + "&email=" + $scope.request.email	
				}
			).then(function successCallback(response)
			{
				$scope.serverMesage = response.data.message;
				$scope.serverFeedback = response.data.serverState;
			},
			function errorCallback(response)
			{
				$scope.serverMesage = response.data.message;
				$scope.serverFeedback = response.data.serverState;
			});
		}
		$scope.showMessage = true;
		
		
	}
	
});


//define the contact sub pages Controller


vozApp.controller('newController', function($scope, Nav, $location)
{
	Nav.OpenNav('new');
	$scope.openSubNav(); //this render the sub menu
	
});

vozApp.controller('aboutController', function($scope, Nav, $location)
{
	Nav.OpenNav('about');
	$scope.openSubNav(); //this render the sub menu
	
});

vozApp.controller('cardsController', function($scope, Nav, $location)
{
	Nav.OpenNav('cards');
	$scope.openSubNav(); //this render the sub menu
	
});
vozApp.controller('boardsController', function($scope, Nav, $location)
{
	Nav.OpenNav('boards');
	$scope.openSubNav(); //this render the sub menu
	
});



vozApp.controller('communityController', function($scope, Nav, $location)
{
	Nav.OpenNav('community');
	$scope.openSubNav();
		
});


vozApp.controller('mediaController', function($scope, Nav, $http, $window)
{
	Nav.OpenNav('media');
	$scope.openSubNav();
	
	$scope.wallpaperList =
	[
		{
			name: "Assassin",
			img: "images/wallpaper/icon/Assassin_icon.jpg",
			url: "images/wallpaper/Assassin.jpg"	
		},
		{
			name: "Soothsayer",
			img: "images/wallpaper/icon/Soothsayer_icon.jpg",
			url: "images/wallpaper/Soothsayer.jpg"	
		},
		{
			name: "Eldjatnor",
			img: "images/wallpaper/icon/Eldjatnor_icon.jpg",
			url: "images/wallpaper/Eldjatnor.jpg"	
		},
		{
			name: "InfernalFootSoldier",
			img: "images/wallpaper/icon/InfernalFootSoldier_icon.jpg",
			url: "images/wallpaper/InfernalFootSoldier.jpg"	
		},
		{
			name: "VisionTrailer_10",
			img: "images/wallpaper/icon/VisionTrailer_10_icon.jpg",
			url: "images/wallpaper/VisionTrailer_10.jpg"	
		},
		{
			name: "VisionTrailer_19",
			img: "images/wallpaper/icon/VisionTrailer_19_icon.jpg",
			url: "images/wallpaper/VisionTrailer_19.jpg"	
		}
	];
	
	$scope.Download = function(image)
	{
		$window.open(image, "_blank");
	}
	
});

vozApp.controller('supportController', function($scope, Nav, $location)
{
	Nav.OpenNav('a');
	$scope.openSubNav();
		
});


vozApp.controller('contactController', function($scope, Nav, $uibModal)
{
	Nav.OpenNav('contact');
	$scope.openSubNav(); //this render the sub menu
		
	
	$scope.OpenEmailModel = function()
	{
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'emailModal.html',
				 controller: 'emailController',
				size: 'lg'
			}
		);	
	}	
	
	$scope.OpenPartnerModel = function()
	{
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'partnerModal.html',
				 controller: 'partnerController',
				size: 'lg'
			}
		);	
	}
	
});



//define the founder page Controller
vozApp.controller('founderController', function($scope, $http, $uibModal, Store ,$interval,Nav, $location)
{	
	Nav.OpenNav('founder');  //define what page were on
	$scope.openSubNav(); // update the main controller 
		
	$interval
	(
		function()
		{
			if($scope.itemCounter > 0)
			{
				$scope.checker = false;	
			}
			else
			{
				$scope.checker = true;
			}
			$scope.itemCounter = Store.itemCount;
		}, 1000 / 60
	);
	$scope.AddToCart = function(name, price, elementCodeName)
	{
		Store.AddItem(name,price,elementCodeName);
		$scope.itemCounter = Store.item.length;	
	}
	
	$http
	(
		{
			medthod: 'GET',
			url: 'json/founderTiers.json',
			headers: 
			{
        		'Content-Type': 'application/json', 
        		'Accept': 'application/json' 
   			}	
		}
	).then(function successCallback(response)
	{
		$scope.tiers = response.data;
	},
	function errorCallback(response)
	{
		console.log('error: ' + response.status );
	});
	
	
	$scope.ToggleDetail = function(id)
	{
		console.log($scope.tiers[id]);
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'teirModal.html',
				 controller: 'teirModalController',
				size: 'lg',
				resolve: 
				{
					teir : function()
					{
						return $scope.tiers[id];	
					}
				}
			}
		);
	}
	
	$scope.ToggleCart = function()
	{
		
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'cartModal.html',
				 controller: 'cartModalController',
				size: 'lg'
			}
		);
	}
	
	$scope.CheckOut = function()
	{
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'paymentOptionModal.html',
				 controller: 'paymentOptionModalController',
				size: 'lg'
			}
		);
	}
});

vozApp.controller('founderCheckoutController', function($scope, $http, $uibModal, Store ,$interval,Nav, $location)
{
		
});

vozApp.controller('teirModalController', function ($scope, $uibModalInstance, teir, Store) //if they were look at more details on that teir
{

 	$scope.selectedTeir = teir;
	
	$scope.AddToCart = function(name,price,elementName)
	{
		Store.AddItem(name,price,elementName);
		$uibModalInstance.dismiss('cancel');
	}
	

	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
});
vozApp.controller('cartModalController', function ($scope, $uibModalInstance, Store, $interval, $uibModal) //shoping cart of all the items
{
	 $scope.itemLists = Store.item ;
	 $interval(function()
	 {
		 if($scope.numItem > 0)
			{
				$scope.checker = false;	
			}
			else
			{
				$scope.checker = true;
			}
		 $scope.total = Store.CalulateTotal();
		 Store.UpdateItem();
	     $scope.numItem = Store.itemCount;
	 },1000 / 60);
	 
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	 
	 $scope.DeleteItem = function(id)
	 {
		Store.RemoveItem(id);
	 };
	 
	 $scope.CheckOut = function()
	{
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'paymentOptionModal.html',
				 controller: 'paymentOptionModalController',
				size: 'lg'
			}
		);
		Store.CheckOut(method); 
		$uibModalInstance.dismiss('close');
		Store.Clear();
	}
	 
});

vozApp.controller('ceditCardPaymentController', function ($scope, $uibModalInstance, Store, $interval) //selecting payment
{
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	 
	 $scope.CheckOutWith = function(method)
	 {
		Store.CheckOut(method); 
		$uibModalInstance.dismiss('close');
		Store.Clear();
	 };
	 
});

vozApp.controller('paymentOptionModalController', function ($scope, $uibModalInstance, Store, $interval, $uibModal) //selecting payment
{
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	 
	 $scope.CheckOutWith = function(method)
	 {
		Store.CheckOut(method); 
		$uibModalInstance.dismiss('close');
		Store.Clear();
	 };
	 
	 $scope.disableSend = true;
	 
	 $scope.openCard = function()
	 {
		$uibModalInstance.dismiss('close');
			
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'ceditCard.html',
				 controller: 'ceditCardPaymentController',
				size: 'lg',
				resolve: 
				{
					
				}
			}
		);
			
		
	 }
	 
});

vozApp.controller('emailController', function ($scope, $uibModalInstance, $http, $timeout) //selecting payment
{
	 //cencel also form of close the 
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	
	$scope.code = 
	[
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten"
	];
	
	$scope.disableSend = false;
	
	$scope.answerCodeA = (Math.floor(Math.random() * 10) + 1);
	$scope.answerCodeB = (Math.floor(Math.random() * 10) + 1);
	
	$scope.serverCodeA = $scope.code[ $scope.answerCodeA - 1];
	$scope.serverCodeB = $scope.code[ $scope.answerCodeB - 1];
	
	$scope.email =
	{
		email : '',
		name: '',
		subject : '',
		message : '',
		code: ''
	};
	
	$scope.serverFeedback = ""; //were define default css so when $http done it will either add alert-success or alert-danger
	$scope.serverMessage = ''; // were get error message back from server was successful or fail send data
	
	$scope.Submit = function(htmlForm)
	{
		$scope.serverMessage = "Creating Email...";
		$scope.serverFeedback = "alert alert-info";
		$scope.showMessage = true;
		//checking if the code system is right if not we give new set of number 
		if($scope.email.code == ($scope.answerCodeA + $scope.answerCodeB))
		{
			$http
			(
				{
					medthod: 'GET',
					url: 'scripts/sendEmail.php?name=' + $scope.email.name + "&email=" + $scope.email.email + "&subject=" + $scope.email.subject + "&message=" + $scope.email.message
				}
			).then(function successCallback(response)
			{
				$scope.serverMessage = response.data[0].serverMessage;
				$scope.serverFeedback = response.data[0].serverFeedback;
				$timeout(function()
				{
					$uibModalInstance.dismiss('close');
				}, 2000);
				
			},
			function errorCallback(response)
			{
				
				$scope.serverMessage = response.data[0].serverMessage;
				$scope.serverFeedback = response.data[0].serverFeedback;
			});
		}
		else
		{
			$scope.serverFeedback = "alert alert-danger";
			$scope.serverMessage = "Opps not right answer";	
			
		}
	}
	
	 
});
