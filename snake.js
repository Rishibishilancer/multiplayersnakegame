class snake{

constructor(x){

    this.object = createSprite(x,300,20,20)

    
        
    this.tail = []

        this.object.shapeColor = "red"

}



eat(food){

if(this.object.isTouching(food)){
    food.y = random(10,590)
    if(this.object.x < 300){
        food.x = random(10,290)
    this.grow(1);
        score1 ++
    }

    else {
        
        food.x = random(310,590); score2 ++
    
        this.grow(2)
    }

}


}

snakemoving(move){
switch(move){
    case 1:
    if(keyDown(UP_ARROW)){
        
        this.object.setSpeedAndDirection(2,-90);
    }
    
    if(keyDown(LEFT_ARROW)){
        
        this.object.setSpeedAndDirection(2,180);
    }
    if(keyDown(DOWN_ARROW)){
        
        this.object.setSpeedAndDirection(2,90);
    }
    if(keyDown(RIGHT_ARROW)){
        
        this.object.setSpeedAndDirection(2,0);
    }
    break;
    case 2:
        
        if(keyDown("w")){
        
            this.object.setSpeedAndDirection(2,-90);
        }
        
        if(keyDown("a")){
            
            this.object.setSpeedAndDirection(2,180);

            
        }
        if(keyDown("s")){
            
            this.object.setSpeedAndDirection(2,90);
        }
        if(keyDown("d")){
            
            this.object.setSpeedAndDirection(2,0);
        }
break;
default:break;

}
    

}

getState(){

    if(this.object.isTouching(edges)|| this.object.x === 300){

        this.object.velocityX = 0
        this.object.velocityY = 0

        gameover.visible = true
        gameState = 2
    }

}

grow(r){

    

    
   
    

    if(r===1){

        anothersnake = createSprite(this.object.x ,this.object.y ,20,20)
    anothersnake.shapeColor = "red"
        group.add(anothersnake) 
    }
    else if(r===2){
        anothersnake2 = createSprite(this.object.x,this.object.y,20,20)
        anothersnake2.shapeColor = "red"
        group2.add(anothersnake2)
    }

}

}

