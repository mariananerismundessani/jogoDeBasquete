class Bolas {
    constructor(x, y){
       this.bola = Matter.Bodies.circle(x, y, 30);
        World.add(world, this.bola);
    }
    desenhar(){
        push();
        imageMode(CENTER);
        image(bolaImg, this.bola.position.x, this.bola.position.y, 30, 30);
        pop();
    }
}