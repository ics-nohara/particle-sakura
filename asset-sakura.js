(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#444444",
	manifest: []
};



// symbols:



(lib.sakura2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkdCJQgTgLgQgKIBoh0Ihih1QANgLAQgIQBpg6CSAAQCSAABnA6QBqA7AABNQAABPhqA6QhnA6iSAAQiSAAhpg6g");
	this.shape.setTransform(1.7,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-18.1,64.3,39.1);


(lib.sakura = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiECAIiXgNQABgRAGgRQAihxBnhnQBohpBwggQB0ghA4A4QA4A4ghB0QggBwhpBoQhnBnhxAiQgVAGgTADg");
	this.shape.setTransform(-1.5,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-27,57,57.2);


// stage content:
(lib.assetsakura = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.sakura2();
	this.instance.setTransform(103.1,34.8,1,1,0,0,0,7.6,7.7);

	this.instance_1 = new lib.sakura();
	this.instance_1.setTransform(37.6,34.8,1,1,0,0,0,7.6,7.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(275,200,129.4,57.2);

})( (particlejs = particlejs||{}).assets = particlejs.assets || {} , images = images||{}, createjs = createjs||{}, ss = ss||{});
var particlejs, images, createjs, ss;