class Food{
    constructor(){
        this.foodStock=0;
        this.image=loadImage("Milk.png");
        
        
        var button=createButton("Feed the Dog");
        button.position(400,125);

        if(button.mousePressed(function(){
            foodS=foodS-1;
            gamestate=1;
            db.ref('/').update({'gameState':gamestate})
        }));

        var addFood=createButton("Add Food");
        addFood.position(500,125);
      
        if(addFood.mousePressed(function(){
          foodS=foodS+1;
          gamestate=2;
          db.ref('/').update({'gameState':gamestate});
        }));


    }
   
    display(){
     var x=80 , y=100;

     imageMode(CENTER)
     image(this.image, 720,220,70,70);

     if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
     }
    
    }
    

   
}