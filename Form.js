class Form {
  constructor() {
     
     this.button = createButton('Play'); 
     this.greeting = createElement('h2'); 
     this.title = createElement('h2'); 
     this.reset = createButton('Reset'); 
    } 

  display(){
 
    this.title.html("snake Game");
    this.title.position(130, 0);
   
      var input = createInput('name')
      

  
    this.reset.position(300,10)
    this.reset.mousePressed(function(){

r.update(0)
player.updateCount(0);

    });
    

    input.position(130, 160);
   this.button.position(300, 300);

   this.button.mousePressed(function(){

    input.hide();
    

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
  
      this.greeting.html("waiting for 1 more player...")
      this.greeting.position(130, 160)
    });

  }


    hide(){ 
      this.greeting.hide(); this.button.hide(); this.title.hide(); 
    }


  
}
