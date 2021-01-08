var snake1,snake2
var database
var food1,food2,foodImage,gameover,gameoverImage;
var bomb,bombImage
var gameState = 0
var score1 = 0
var score2 = 0
var gameState = 0
var edges
var group,group2,anothersnake,anothersnake2;
var playerCount,r;
var player,form;




function preload(){
		foodImage = loadImage("apple.png")
		bombImage = loadImage("bomb.png")

		gameoverImage = loadImage("game over.png")
}


function setup(){
	createCanvas(600,600)

	database = firebase.database()
	edges = createEdgeSprites();

	group = new Group()
	group2 = new Group()

	r = new Game()
	r.getState()
	r.start()

	snake1 =new snake(120)
	snake2 = new snake(450)



	group.add(snake1.object)
	group2.add(snake2.object)

	food1 = createSprite(200,200,50,50)
		food2 = createSprite(400,400,50,50)
		gameover = createSprite(300,300,300,300)
		gameover.visible = false

	food1.addImage("apple.png",foodImage)
	food2.addImage("apple.png",foodImage)
	gameover.addImage("game over.png",gameoverImage)

	food1.scale = 0.1
	food2.scale = 0.1



	
	
}

function draw(){

console.log(gameState)


if(playerCount === 2){
	r.update(1)
	

}

		if(gameState === 1){


			r.game()
}



}


