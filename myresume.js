var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#fbeec1"; 
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});
var orange = "#fbeec1";
var debug=false;
var hero;
var cursors;
var tree1;
var plant1;
var ct1,ct2,ct3,ct4;
var bulletTime = 0;
var ctext,pythontext,javatext,jstext;
var birds;
var bubble;
var style_white = { font:"24px Roboto", fill:"#113388",align:"center" };
var style_roboto = { font:"24px Roboto", fill:"#113388",align:"center" }
var shakti;
var shakti_cup;
var shakti2;
var football;
var text;
var inst_text;
var bug;
var bug_tween;
var bug_killed = false;
var cloud_moving1;
var cloud_moving2;
var base5 = 15100;
var base6 = 17500+1400;
var base7 =19500+1400;
var platformLength = base7 - 1000;
var cupTweenDone=false;
var cupTweenSecondDone=false;
var delay =0;
var starting_point=100;
var back_btn;
var touch;
var direction = "left";
var explosion_count = 0;
var max_explosion_count=5;
function preload(){
	 
	text = game.add.text(w/2, h/2, "Loading...",{ font:"80px Roboto",fill: '#fbeec1' });
	text.anchor.setTo(0.5,0.5);
	game.load.image('publication','assets/publication.png');
	game.load.image('ground','assets/grassMid.png');
	game.load.image('back','assets/back64.png');
	game.load.image('grass','assets/grassCenter.png');
	game.load.image('brick','assets/brickWall.png');
	game.load.image('tree1','assets/tree-bright-e.png');
	game.load.image('plant1','assets/plant-lotus.png');
	game.load.image('cloud','assets/cloud.png');
	game.load.image('birds','assets/birds.png');
	game.load.image('school','assets/graph.png');
	game.load.image('mainbanner','assets/interactive-resume.png');
	game.load.image('hoarding','assets/hoarding.png')
	game.load.image('building','assets/building.png');
	game.load.image('hometown','assets/treasure.png');
	game.load.image('hill','assets/mountain.png');
	game.load.image('treeS','assets/tree-dark-d.png');
	game.load.atlasJSONHash('hero','assets/p2_walk.png','assets/p2_walk.json');
	game.load.atlasJSONHash('waterAtlas','assets/water_corrected.png','assets/water_running.json');
	game.load.atlasJSONHash('waterAtlas2','assets/water_orange.png','assets/water_running.json');
	game.load.image('dtu','assets/dtu.png');
	game.load.image('level','assets/sign.png');
	game.load.image('cocotree','assets/coco.png');
	game.load.image('python','assets/python_white.png');
	game.load.image('tata','assets/tata.png');
	game.load.image('jtb','assets/jtb.png');
	game.load.image('css','assets/amazon.png');
	game.load.image('js','assets/js.png');
	game.load.image('html','assets/html5.png');
	game.load.image('night','assets/day.webp');
	game.load.image('bush','assets/bush.png');
	game.load.image('plant','assets/plant.png');
	game.load.image('rock','assets/rock.png');
	game.load.image('infosys','assets/infosys.png');
	game.load.image('zoom','assets/zoom.png')

	//game.load.image('jquery','assets/jquery_white.png');
	game.load.image('developer','assets/fullstackS.png');
	//game.load.image('phaser','assets/phaserLogo.png');
	game.load.image('android','assets/android.png');

	game.load.image('frog','assets/frog.png');
	game.load.image('sandiskPd','assets/sandiskPd.png');
	game.load.image('sandiskLogo','assets/visa.png');
	game.load.image('instaLogo','assets/dell.png');
	game.load.image('hackerearthLogo','assets/microsoft.png');
	game.load.image('campk12Logo','assets/google.png');
	game.load.image('cbLogo','assets/cb.png');
	game.load.image('corel','assets/corel.png');
	// game.load.image('psbubble','assets/socialtables.png');
	game.load.image('games','assets/games.png');
	game.load.image('gamershq','assets/gamershq.png');
	//game.load.image('photoshop','assets/pslogo.png');
	game.load.image('bits','assets/0s1s.png');
	game.load.image('harddrive','assets/harddrive.png');
	game.load.image('hospital','assets/hospital_kalp.png');
	game.load.image('ambulance','assets/ambulance2.png');
	game.load.image('otherprojects','assets/other.png');
	//game.load.image('best','assets/best_cartoonist.png');
	game.load.image('bullet','assets/bullet.png');
	game.load.image('pipe','assets/pipe.png');
	game.load.image('cup','assets/cup.png');
	game.load.image('google','assets/google.png');
	game.load.image('csi','assets/csi.png');
	game.load.image('gaana','assets/gaanalogo.png');
	game.load.image('shephertz','assets/shephertz.png');
	game.load.image('codelhi','assets/codelhi.png');
	game.load.image('pshaktiman','assets/pshaktiman.png');
	game.load.image('chai','assets/cpc.png');
	game.load.image('football','assets/football.png');
	game.load.image('gmail','assets/gmail.png');
	game.load.image('facebook','assets/fb.png');
	game.load.image('linkedin','assets/linkedin.png');
	game.load.image('ladder','assets/ladder.png');
	game.load.image('yoga','assets/yoga.png');
	game.load.image('fly','assets/fly.png');
	game.load.image('swach_bharat','assets/swach_bharat.png');
	game.load.image('github','assets/github.png');	
	game.load.image('codechef','assets/codechef.png');
	game.load.image('spoj','assets/spojlogo.png');
	game.load.image('algae','assets/algae-b.png');
	game.load.image('cloud1', 'assets/cloud1.png');
	game.load.image('cloud2', 'assets/cloud2.png');
	game.load.image('cloud3', 'assets/cloud3.png');
	game.load.image('blogLogo','assets/icon_small.png');
	game.load.image('cisco', 'assets/cisco.png');
	game.load.image('placard', 'assets/placard.png');
	game.load.image('bug','assets/bug.png');
	game.load.image('flag','assets/flag.png');
	game.load.image('squarebrick','assets/brick_small.png');
	game.load.image('questionbrick','assets/question_block_small.png');
	game.load.image('question_hide','assets/question_block_plain_small.png');
	game.load.image('icpc','assets/icpc.jpg');
	game.load.atlasJSONHash('grari','assets/grari_map.png','assets/grari_map.json');
	game.load.atlasJSONHash('coin_moving','assets/coin-sprite.png','assets/coin-sprite-map.json');
	game.load.atlasJSONHash('digital_india','assets/digital_india.png','assets/digital_india.json');	
	game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.image('sun', 'assets/sun.png');
	//game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.atlasXML('seacreatures', 'assets/seacreatures.png', 'assets/seacreatures.xml');
   // game.load.image('undersea', 'assets/undersea.jpg');
	game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
	//game.load.image('ground','assets/ground.png');

}

function create(){

//	game.load.onLoadStart.add(loadStart, this);
   // game.load.onFileComplete.add(fileComplete, this);
  //  game.load.onLoadComplete.add(loadComplete, this);

  //  game.stage.scale.startFullScreen();
	//	game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL; //resize your window to see the stage resize too
	//	game.stage.scale.setShowAll();
	//	game.stage.scale.refresh();
	//Add Bullets.
		
	//Add Clouds
	// for(var i=0;i<20000;i+=1000){
	// 	if(i>=6800 && i<=8100){
	// 	game.add.sprite(i,h-680,'cloud');
	// 	game.add.sprite(i+400,h-630+50,'cloud');
	// 	}
	// 	else{
	// 	game.add.sprite(i,h-580,'cloud');
	// 	game.add.sprite(i+400,h-630,'cloud');
		

	// 	}
	// }

	//Add night mode
	night = game.add.tileSprite(0,0,platformLength*2,h,'night');
	night.scale.setTo(1,1.5)
	night.alpha = 1;
	//Add mountains


	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

	let x = 10;

	for(let i = 0; i < 100; i++){
		plant = game.add.sprite(x,h-170,'plant');
		x+=Math.random()*1000;
	}
	x = 10;
	for(let i = 0; i < 100; i++){
		rock = game.add.sprite(x,h-170,'rock');
		x+=Math.random()*1000;
	}
	x = 10;
	for(let i = 0; i < 100; i++){
		bush = game.add.sprite(x,h-170,'bush');
		x+=Math.random()*1000;
	}
   	
    explosions = game.add.group();

    tiles = game.add.group();
    tiles.enableBody = true;
    tiles.physicsBodyType = Phaser.Physics.ARCADE;
    tiles.createMultiple(6,'questionbrick');
    
   text.setText("");
   //touch = new Phaser.Touch();
   //game.canvas.addEventListener('touchenter', function(){ console.log("You touched here!!");}, false);

	game.stage.backgroundColor =bgColor;
	game.world.setBounds(0, 0,platformLength,h+800);

	//Add corel parachute
	// corel = game.add.sprite(9000,h-600,'corel');
	// game.add.tween(corel).to( { y:h-450}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	//game.input.onTap.add(moveforward,this);


	flag = game.add.sprite(platformLength-190,h,'flag');
	flag.scale.setTo(0.5,0.5);
	game.add.sprite(platformLength-220,h-200,'pipe');



	game.add.sprite(3060,h-350,'treeS');
	hill1=game.add.sprite(2600,h-300+400,'hill');
	
	hill2=game.add.sprite(3000,h-350+400,'hill');

	hill3=game.add.sprite(3400,h-400+400,'hill');

	

	//Add Coco Trees
	ct1  = game.add.sprite(5000,h,'cocotree');
	ct2  = game.add.sprite(5200,h,'cocotree');
	ct3  = game.add.sprite(5400,h,'cocotree');
	ct4  = game.add.sprite(5600,h,'cocotree');

	var style_white2 = { font:"30px Roboto",fill:"#fbeec1"};
	var style_lang = { font:"30px Roboto" ,fill:"#fff"};
	//var style_lang = { font:"30px monospace" ,fill:"#fff"};

	javatext = game.add.text(5050,h-320-50,'USAA \n $3M TCV',style_roboto);
	pythontext=	game.add.text(5170,h-530,'International \n Baccalaureate \n Organization\n (Renewal), $1.2M TCV',style_roboto);
	jstext = game.add.text(5430,h-550,'Federal \n Reserve System \n (Cross Sell/Upsell),\n $384K TCV',style_roboto);
	ctext = game.add.text(5660,h-460-50,'HPE, VAH, NBB,\n $347K TCV',style_roboto);

	
	javatext.alpha = 0.2;
	pythontext.alpha = 0.2;
	jstext.alpha = 0.2;
	ctext.alpha = 0.2;
	// game.add.text(5200,h-140,'LANGUAGE  ACTIVITY',style_roboto);

	//Add BrickWall
	/* This is an older brick wall  
	game.add.tileSprite(6500,h-450,2000,400,'brick');
	*/
	//Add Coin
	var mustard_style = { font: "80px Roboto", fill: "#fbeec1", align: "center" };
	codetext = game.add.text(6500,h-550,'CLIENTS =>',mustard_style);
	// var moving_coin = game.add.sprite(6610,h-550,'coin_moving');
	// moving_coin.scale.setTo(2,2);
	// moving_coin.animations.add('run');
	// moving_coin.animations.play('run',20,true);
	
	/* The newer one */
	game.add.sprite(6650,h-200,'pipe');
	new_bug = game.add.sprite(6600,h-180,'bug');
	new_bug2 = game.add.sprite(6500,h-155,'bug');
	new_bug.scale.setTo(-1,1);
	new_bug2.scale.setTo(-0.7,0.7);
	game.add.tween(new_bug).to( { x:6680}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	game.add.tween(new_bug2).to( { x:6600}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);

	var xcoord=6500;
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+119,h-450,'question_hide');
	game.add.sprite(xcoord+2*119,h-450,'squarebrick');

	var exp_index =0;
	for(xcoord = 7100;xcoord<=8200;xcoord += 2*119)
	{
		game.add.sprite(xcoord,h-450,'squarebrick');
		//game.add.sprite(xcoord+119,h-450,'question_hide');
		//game.add.sprite(xcoord+119,h-500,'kaboom');
	    
	  
		//explosions.push(temp);
		 tile = tiles.getFirstExists(false);
		 if(tile){

		 	tile.reset(xcoord+119,h-450);
		 }

		 game.add.sprite(xcoord+100,h-310,'tree1').scale.setTo(0.6,0.6);
	}
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+100,h-310,'tree1').scale.setTo(0.6,0.6);

   //Add Explosion object pool
   	explosions = game.add.group();
    explosions.createMultiple(6, 'kaboom');
	//explos.forEach(function(){ expl })
	

	//game.add.text(6600,h-160,'FULL STACK WEB DEVELOPER \t\t SERVER SIDE IN DJANGO\t\t GAME DEVELOPMENT\t\tANDROID\t\t  DESIGNING SKILLS >> \t\t\t\t\t PHOTOSHOP ',style_lang);	


	game.add.sprite(base5+150,h-420,'tree1').scale.setTo(0.8,0.8);
	game.add.sprite(base5+300,h-250,'treeS').scale.setTo(0.7,0.7);
	game.add.sprite(base6+250,h-420,'tree1').scale.setTo(0.8,0.8);
	game.add.sprite(base6+200,h-250,'treeS').scale.setTo(0.7,0.7);
	game.add.sprite(base6+380,h-300,'treeS').scale.setTo(0.8,0.8);


	var style = { font: "16px monospace", fill: "#fbeec1", align: "center" };
	game.add.text(2930,h-250,"2012 \n CrowdTorch \n CrowdCompass", style);
	game.add.text(3330,h-280,"2018 \n Quickmobile \n Kapow \n Social Tables ", style);
	game.add.text(3745,h-320,"2019 \n Wedding Spot \n Double Dutch \n", style);
	//Add Ground and Grass
	// var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	

	var ground = game.add.tileSprite(0, h-100, platformLength*2, 50, 'ground');
	var grass = game.add.tileSprite(0, h-75, platformLength*2, 2000, 'grass');
	ground.scale.setTo(0.5,0.5);
	// var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);
	

	// game.add.text(5200,h-70,'*Percentiles as calculated by HackerEarth',{font:"20px monospace",fill:"#fff"});


	// var water = game.add.tileSprite(8700,h-100,800,600,'waterAtlas');
	// game.add.sprite(8800,h+120,'algae').scale.setTo(1.5,1.5);
	// game.add.sprite(9200,h+250,'algae');
	// createBubbles();
	//game.add.tileSprite(8700,h+600-136,133*6,136,'photoshop');

	game.add.sprite(12300, h-400, 'placard').scale.setTo(0.7,0.7);
	game.add.text(12370,h-350,'Cvent Global \n Companywide \n February 16, 2021',style_roboto);
	game.add.sprite(13200, h-400, 'placard').scale.setTo(0.7,0.7);
	game.add.text(13240,h-350,'Companywide Awards\n Ceremony: APAC/IMEA\n February 17, 2021',style_roboto);
	game.add.sprite(14050, h-400, 'placard').scale.setTo(0.7,0.7);
	game.add.text(14110,h-350,'EC Divisional \n All-Hands Welcome \nMarch 2, 2021',style_roboto);
	game.add.sprite(14800, h-400, 'placard').scale.setTo(0.7,0.7);
	game.add.text(14880,h-350,'EC Divisional \nAll-Hands Part 1 \nMarch 2, 2021',style_roboto);
	// game.add.sprite(13716, h-500, 'placard').scale.setTo(0.7,0.7);


	var brick2 = game.add.sprite(12750-70,h-100-36,'brick');
	brick2.scale.setTo(0.5,0.5);
	game.add.sprite(12750-70,h-100,'brick').scale.setTo(0.5,0.5);


	game.add.sprite(12750+350,h-100-36,'brick').scale.setTo(0.5,0.5);
	game.add.sprite(12750+350,h-100,'brick').scale.setTo(0.5,0.5);
	//game.add.sprite(12650,h-400,'treeS').alpha=0.8;
	game.add.sprite(12850,h-300,'treeS').scale.setTo(0.75,0.75);

	// var water2 = game.add.tileSprite(12750,h-100-36+10,700,320,'waterAtlas2');
	// water2.scale.setTo(0.5,0.5);
	// //var water = game.add.sprite(100,300,'waterAtlas');
	// water.animations.add('run');
	// water.animations.play('run',2,true);
	
	// water2.animations.add('run');
	// water2.animations.play('run',2,true);
	
	


	//Add trees

	// tree1 = game.add.sprite(130,h-100-0.75*430,'tree1');
	// tree1.scale.setTo(.75,.75);
	//tree1.alpha = 0.5;	
	//Add Main Banner
	// var building = game.add.sprite(500,h-600,'building');
	// building.scale.setTo(0.75,0.75);
	hoarding = game.add.sprite(130,h-590,'hoarding')
	hoarding.scale.setTo(2.5,2.5);
	var banner = game.add.sprite(265,h-470,'mainbanner');
	banner.scale.setTo(0.45,0.45);

	//Add birds
	birds = game.add.sprite(50,50,'birds');
	birds.fixedToCamera = true;
	birds.scale.setTo(0.75,0.75);
	game.add.tween(birds.cameraOffset).to( { y:100 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	
	//Signboards
	game.add.sprite(1300,h-440,'level');
	game.add.text(1310,h-340,"Successful 2019");
	game.add.text(1420,h-260,"Pre Corona");

	game.add.sprite(4700,h-440,'level');
	game.add.text(4770,h-340,"2020");
	game.add.text(4840,h-260,"Sales");

	game.add.sprite(9600,h-440,'level');
	game.add.text(9670,h-340,"Backbone");
	game.add.text(9740,h-260,"Sponsors",{font:"25px Arial Black"});


	game.add.sprite(11800,h-440,'level');
	game.add.text(11870,h-340,"Upcoming...");
	game.add.text(11940,h-260,"Sessions",{font:"25px Arial Black"});


	game.add.sprite(base5+100,h-440,'level');
	game.add.text(base5+170,h-340,"Recognition");
	game.add.text(base5+240,h-260,"Awards",{font:"25px Arial Black"});


	// game.add.sprite(base6+200,h-440,'level');
	// game.add.text(base6+270,h-340,"Level 6");
	// game.add.text(base6+335,h-260,"Other Highlights",{font:"20px Arial Black"});


	// game.add.sprite(base7,h-440,'level');
	// game.add.text(base7+70,h-340,"Level 7");
	// game.add.text(base7+135,h-260,"Online Profiles",{font:"20px Arial Black"});

	//-------------------Levels Finish



	
	game.add.sprite(10200,h-420,'tree1').scale.setTo(0.75,0.75);
	game.add.sprite(11570,h-420,'tree1').scale.setTo(0.75,0.75);
	//Add frog
	for(row = 1;row<=7;row++){
		for(var xcoord=10500+(row-1)*60+200;xcoord<=11200-(row-1)*60+260;xcoord+=60){
			 if(row==7){
			 	game.add.sprite(xcoord+30,h-600,'flag').scale.setTo(0.2,0.2);
			 }
			 game.add.sprite(xcoord,h-100-row*60,'squarebrick').scale.setTo(0.5,0.5);
		}
	}

	game.add.sprite(10000,h-330,'frog').scale.setTo(0.8,0.8);
	game.add.sprite(10300,h-360,'frog').scale.setTo(0.9,0.9);
	game.add.sprite(10600,h-385,'frog');
	game.add.sprite(10900,h-450,'frog').scale.setTo(1.2,1.2);
	game.add.sprite(11300,h-485,'frog').scale.setTo(1.3,1.3);

	//Add logos
	game.add.sprite(10030,h-210,'campk12Logo').scale.setTo(0.75,0.75);
	game.add.sprite(10320,h-240,'instaLogo').scale.setTo(0.6,0.6);
	game.add.sprite(10620,h-235,'hackerearthLogo')
	game.add.sprite(10930,h-350,'sandiskLogo').scale.setTo(0.8,0.8);
	game.add.sprite(11360,h-300,'cisco').scale.setTo(0.05,0.05);

	
	cup1 = game.add.sprite(base5+820+200,-300,'cup');
	cup1.scale.setTo(0.95,0.95);
	game.add.text(base5+1110,h-250,"Cventer Of The Year",style_roboto);

	
	cup2=game.add.sprite(base5+1400,-380,'cup');
	cup2.scale.setTo(1.2,1.2);
	game.add.text(base5+1530,h-300,"Intrapreneur Of The Year",style_roboto);

	

	cup3=game.add.sprite(base5+1820,-370,'cup');
	cup3.scale.setTo(1.5,1.5);
	game.add.text(base5+2000,h-330,"Emerging Leader Of The Year",style_roboto);

	
	cup4=game.add.sprite(base5+2420,-430,'cup');
	cup4.scale.setTo(1.6,1.6);
	game.add.text(base5+2640,h-345,"Most Valuable Player",style_roboto);

	cup5=game.add.sprite(base5+3000,h-460,'cup');
	cup5.scale.setTo(1.8,1.8);
	game.add.text(base5+3250,h-380,"New Comer Of The Year",style_roboto);


	
	game.add.sprite(base6+1200-30,h-550,'tree1');
	game.add.sprite(base6+1250+30,h-400,'treeS');
	
	var hometown = game.add.sprite(1600,h-200,'hometown');
	hometown.scale.setTo(0.2,0.2)

	inst_text = game.add.text(290,h-50,"Use  Arrow Keys  OR << Screen Buttons >> ",{font:"30px Arial",fill:"#fbeec1"});
	//Add hero 
	hero = game.add.sprite(100,-100,'hero');
	hero.animations.add('run');

	var school = game.add.sprite(1900,h-250-200,'school');
	school.scale.setTo(0.8, 0.8);

	var fly = game.add.sprite(1900,h-500,'fly');
	fly.scale.setTo(0.5, 0.5);

//	hero tween
	var entryTween = game.add.tween(hero);
	entryTween.to({x:starting_point,y:h-100-hero.height},2000,Phaser.Easing.Bounce.Out, true);
	entryTween.start();
	
	cursors = game.input.keyboard.createCursorKeys();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(hero);
	game.physics.arcade.enable(night);
	night.body.velocity.x = -30;

	game.input.mouse.mouseWheelCallback = mouseWheel;

//Add a bug
	bug = game.add.sprite(5900,h-150,'bug');
	game.physics.arcade.enable(bug);

	game.camera.follow(hero);
	game.camera.follow(hero,Phaser.Camera.FOLLOW_PLATFORMER);
	back_btn = game.add.button(10,h-94,'back');
	fwd_btn = game.add.button(w-10,h-94,'back');
	fwd_btn.scale.x *= -1;
	fwd_btn.fixedToCamera = true;
	back_btn.fixedToCamera = true;
	back_btn.alpha = 1;

	night_tween = game.add.tween(night);
	night_tween.to({ alpha:0}, 10000)

	if(w<=481){
		back_btn.alpha = 1;
	}
	
	explosions = game.add.group();
    explosions.createMultiple(10, 'kaboom');
   

}


function addMovingCoin(x,y,scale){
	var moving_coin = game.add.sprite(x,y,'coin_moving');
	moving_coin.scale.setTo(scale,scale);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	return moving_coin;
	
}


function collisionHandler(bullet,tile){
   
    
	var explosion = explosions.getFirstExists(false);
	if(explosion){
	explosion_count++;
    explosion.reset(tile.body.x-50, tile.body.y-50);
    explosion.scale.setTo(1.5,1.5);
    explosion.animations.add('kaboom');
    explosion.animations.play('kaboom', 60, false, true);
    }

    tile.kill();
    bullet.kill();

    var bv = 7275;
    var inc = 119*2;

    if(explosion_count==1){
		var css = game.add.sprite(bv,h-400,'css');
		css.scale.setTo(0.02,0.02);
		css.anchor.setTo(0.5,0.5);
		game.add.tween(css).to({y:h-550},300).start();
		game.add.tween(css.scale).to({y:0.1,x:0.1},500).start();
		var coin = addMovingCoin(bv,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==2){
	var html= game.add.sprite(bv+1*inc,h-500,'infosys');
		html.scale.setTo(0.5,0.5);
		html.anchor.setTo(0.5,0.5);
		game.add.tween(html).to({y:h-550},300).start();
		game.add.tween(html.scale).to({y:0.95,x:0.95},500).start();
	
			var coin = addMovingCoin(bv+inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});
	

	}
	else if(explosion_count==3){
	var js= game.add.sprite(bv+2*inc,h-500,'zoom');
	js.scale.setTo(0.5,0.5);
	js.anchor.setTo(0.5,0.5);
	game.add.tween(js).to({y:h-550},300).start();
	game.add.tween(js.scale).to({y:0.4,x:0.4},800).start();
	
		var coin = addMovingCoin(bv+2*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});


	}

	else if(explosion_count==4){
	var py= game.add.sprite(bv+3*inc,h-500,'tata');
	py.scale.setTo(0.2,0.2);
	py.anchor.setTo(0.5,0.5);
	game.add.tween(py).to({y:h-550},300).start();
	game.add.tween(py.scale).to({y:0.8,x:0.8},500).start();

		var coin = addMovingCoin(bv+3*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	
	}
	else if(explosion_count==5){

	var andro= game.add.sprite(bv+4*inc,h-500,'jtb');
	andro.scale.setTo(0.2,0.2);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.8,x:0.8},600).start();

		var coin = addMovingCoin(bv+4*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});


	}
}


function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime && direction=="right"&&explosion_count<max_explosion_count)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(hero.x+hero.width/2+50, hero.y+100);
            bullet.scale.setTo(1.5,1);
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 200;
        }

        bullet2 = bullets.getFirstExists(false);

        if (bullet2)
        {
            //  And fire it
            bullet2.reset(hero.x+ hero.width/2+100, hero.y+100);
            bullet2.scale.setTo(1.5,1);
            bullet2.body.velocity.y = -400;
            bulletTime = game.time.now + 300;
        }
    

    }

}

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function moveBack(){
	hero.x -= 80;
	hero.animations.play('run',15,true);
}

function mouseWheel(event) {
		inst_text.setText("");
		if(game.input.mouse.wheelDelta>0){
			
			hero.x +=60;
			hero.animations.play('run',15,true);	
		 }
		
		else{
			hero.x -=60;
			hero.animations.play('run',15,true);		
		}

}

function moveforward(){

	inst_text.setText("");
	hero.x +=80;
	
}

function forwardButtonPressed(){
	
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left"){
		direction= "right";
		hero.scale.setTo(1,1);
		hero.anchor.setTo(0,0);	
		}
		return true;
	}
	else
		{
			return false;
		}

}

function backButtonPressed(){
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
		direction= "left";
		hero.scale.setTo(-1,1);
	}
	return true;
	}
	else		
		return false;
}

function update(){

	game.physics.arcade.overlap(bullets, tiles, collisionHandler, null, this);
	var scroll = game.input.mouse.wheelDelta;

	if(hero.x>2600&&hero.x<=2650){
		moveHillsUp();
	}

	if(forwardButtonPressed()){
		inst_text.setText("");
		hero.x +=30;
		//console.log("Pointer:"+game.input.activePointer.x);
		hero.animations.play('run',15,true);
	}


	else if(backButtonPressed()){
		hero.x -=30;
	}
	else{
		hero.animations.stop('run');
	}
	
	if(hero.x<=0 && direction=="right"){
		hero.x =0;
	}
	if(hero.x <=150 && direction=="left"){
		hero.x = 150;
	}
	
	if(hero.x<=6450 && hero.x>=6200 && hero.y == h-550 && backButtonPressed() ){
		game.add.tween(hero).to({x:5800,y:h-200},300).start();
		hero.x=5780;
		hero.y = h-100;
		//console.log("This tween");
	}


	if(hero.x >base5){

		night_tween.start();
	}


	if(hero.x > 4500){
		showPlantsFromBottom();
		moveBugLeft();
	}

	if(hero.x > base5+800 && hero.x <=base5+900 && !cupTweenDone){
	
	cupTweenDone =true;
	
	var cupTween1 = game.add.tween(cup1);
	cupTween1.to({y:h-280},2000,Phaser.Easing.Bounce.Out, true);
	
	var cupTween2 = game.add.tween(cup2);
	cupTween2.to({y:h-340},2000,Phaser.Easing.Bounce.Out, true);
	cupTween1.start();
	cupTween2.start();

	}
	if(hero.x > base5+1600 && hero.x <=base5+1700 && !cupTweenSecondDone){
		cupTweenSecondDone=true;
	
	var cupTween3 = game.add.tween(cup3);
	cupTween3.to({y:h-410},2000,Phaser.Easing.Bounce.Out, true);
	cupTween3.start();

	var cupTween4 = game.add.tween(cup4);
	cupTween4.to({y:h-410},2000,Phaser.Easing.Bounce.Out, true);
	cupTween4.start();

	}


	if(hero.x>platformLength-350){
		hero.x = platformLength-350;
		var t = game.add.tween(flag).to({y:h-400},1000);
		t.start();
		t.onComplete.add(function(){game.add.text(platformLength-185,h-370,"Thanks for\n Visiting !",style_white);},this);
	
	}

	
	if(hero.x>5800 && hero.x <=6000 && hero.y>= h-245-hero.height-50 && direction!='left'){
		game.add.tween(hero).to({x:6500,y:h-550},100).start();
		

	}
	

	if((bug.x - hero.x)<=100){
		bug.body.velocity.x = 0;


		bug.scale.setTo(1,0.2);
		bug.body.y = h - 110;
		
		if(bug_killed==false){
		game.add.text(bug.x,h-200,"RIP Bugs.!",style_roboto);
		bug_killed =true;
		}
	}
	//Throw onto Ground
	if(hero.x > 6830 && hero.x <7000 && direction=="right"){
		hero.y = h - 200;  

	}
	if(hero.x <=7000&&hero.x>6900 && direction=="left" ){
		hero.y = h - 550;

	}
	
	if(hero.x > 9250 && hero.x <9300 && hero.y > h &&direction!='left'){
		var t =game.add.tween(hero).to({x:9350,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1; birds.alpha=1;game.camera.y -=150;})
	}


	if(hero.x >=7100 && hero.x <=8200){
		fireBullet();
	}

}


function animateBubble(){

				bubble.scale.setTo(0.75,0.75);
				game.physics.enable(bubble,Phaser.Physics.ARCADE);
				bubble.body.angularVelocity = 100;
}
function moveBugLeft(){

	if(bug_killed===false && hero.x >=4900 ){
			bug.body.velocity.x = -200;
	}



}
function moveHillsUp(){

	var hillsTween = game.add.tween(hill1);
	hillsTween.to({y:h-300},1500);
	hillsTween.start();

	var hills2Tween = game.add.tween(hill2);
	hills2Tween.to({y:h-350},2000);
	hills2Tween.start();

	var hills3Tween = game.add.tween(hill3);
	hills3Tween.to({y:h-400},2500);
	hills3Tween.start();

}

function showPlantsFromBottom(){

	var plantsTween = game.add.tween(ct1);
	plantsTween.to({y:h-300},300);
	plantsTween.start();

	var plantsTween2 = game.add.tween(ct2);
	plantsTween2.to({y:h-400},300);
	plantsTween2.start();

	
	var plantsTween3 = game.add.tween(ct3);
	plantsTween3.to({y:h-420},300);
	plantsTween3.start();

	
	var plantsTween4 = game.add.tween(ct4);
	plantsTween4.to({y:h-420},300);
	plantsTween4.start();
	plantsTween4.onComplete.add(fadeText,this);

}


function fadeText(){

	 game.add.tween(jstext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(ctext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(pythontext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(javatext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
}

function render(){
	
	if(debug)
		{game.debug.spriteInfo(hero,32,32);}
}

function loadStart() {

	text.anchor.setTo(0.5,0.5);
	text.setText("Loading ...");

	console.log("File complete...");

	console.log("Called Log Start !");
}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
	//game.add.sprite(w/2,h/2,'loader');
	console.log("File complete...");

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

}





