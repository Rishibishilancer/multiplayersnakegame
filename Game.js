class Game {
  constructor(){}
  
  game(){
    background("lightgreen")
  form.hide();
    for(var i = group.length -1;i>0;i --){

      group.get(i).x  =  group.get(i-1).x
  group.get(i).y  =  group.get(i-1).y
  
    }
    
    for(var g = group2.length -1;g>0;g --){

      group2.get(g).x  =  group2.get(g-1).x
  group2.get(g).y  =  group2.get(g-1).y
    
  }

snake1.getState()
snake2.getState()


text(score1,10,10)
text(score2,580,10)


snake1.eat(food1)
snake2.eat(food2)


snake1.snakemoving(1);
snake2.snakemoving(2);


for(i = 0; i<600;i += 50){
  
  line(300,i+20,300,i)
}



drawSprites()

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
