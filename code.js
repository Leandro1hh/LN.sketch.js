var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9c5a2877-a23b-40d4-8025-f13ef1628f3c","a41742c9-b1dc-4a97-a946-d6db680cd842"],"propsByKey":{"9c5a2877-a23b-40d4-8025-f13ef1628f3c":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/S.AEDL4.I7chOTFPAaBoIEX1hN5O2XBR/category_faces/kidportrait_14.png","frameSize":{"x":264,"y":375},"frameCount":1,"looping":true,"frameDelay":2,"version":"S.AEDL4.I7chOTFPAaBoIEX1hN5O2XBR","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":375},"rootRelativePath":"assets/api/v1/animation-library/gamelab/S.AEDL4.I7chOTFPAaBoIEX1hN5O2XBR/category_faces/kidportrait_14.png"},"a41742c9-b1dc-4a97-a946-d6db680cd842":{"name":"Oculos","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7MkGT8vovb6X7p5VAaK2LMPqHTiEpHoA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a41742c9-b1dc-4a97-a946-d6db680cd842.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var die = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  Oculos = createSprite(375,195,10,10);
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//adicione velocidade para fazer o carro se mover.
  car1.velocityY = 8;
  car2.velocityY = 8;
  car3.velocityY = -8;
  car4.velocityY = -8;

function draw() {
   background("white");
  text("Mortes: " + die,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.setAnimation("player");
  sam.scale = 0.05;
  Oculos.setAnimation("Oculos");
  Oculos.scale = 1
  
  
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
  if(keyDown("right")) {
    sam.x = sam.x + 2;
  }
  if(keyDown("left")) {
    sam.x = sam.x - 2;
  }
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  if(
  sam.isTouching(car1)||
  sam.isTouching(car2)||
  sam.isTouching(car3)||
  sam.isTouching(car4))
{
  sam.x = 20;
  sam.y = 190;
  die = die + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
