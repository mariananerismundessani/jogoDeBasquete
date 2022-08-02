const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bola, quadra, bolaImg;
var ground;
var jogador1, jogador2, jogador3, jogador4;
var jogadores;

function preload(){
  quadra = loadImage("assets/quadra.jpeg");
  bolaImg = loadImage("assets/bola.png");
  jogador1 = loadImage("um.png")
  jogador2 = loadImage("dois.png")
  jogador3 = loadImage("tres.png")
  jogador4 = loadImage("quatro.png")
}

function setup() {
  
  createCanvas(1000, 640);


 
// ground = Bodies.rectangle(0, height - 1, 1000, 640, {isStatic: true});
 //World.add(world, ground);

 jogadores = new Group();

}

function draw() {
  background(0); 

  image(quadra, 0, 0, 1000, 640)





criarJogadores();

drawSprites();
}

function criarJogadores(){
  if(frameCount % 100 === 0){
    var jogador = createSprite(0, 540);
    jogador.velocityX = 3
    var imagem = Math.round(random(1,4));
    switch(imagem){
      case 1: jogador.addImage(jogador1)
      break
      case 2: jogador.addImage(jogador2)
      break
      case 3: jogador.addImage(jogador3)
      break
      case 4: jogador.addImage(jogador4)
      break
    }
    jogador.scale = 0.3
    jogador.lifetime = 400
    jogadores.add(jogador);
  }
}