const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var umbrella;
var maxDrops
var thunder1, thunder2;

function preload() {

}

function setup() {
    umbrella = new Umbrella(200, 500);

    var maxDrops = 100;
    for (var i = 0; i < maxDrops; i++) {
        drops.push(new createDrop(random(0, 400), random(0, 400)));
    }

    engine = Engine.create();
    world = engine.world;
}

function draw() {
    createCanvas(500, 700);
    background(0);

    rand = Math.round(random(1, 4));
    if (frameCound % 80 === 0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10, 370));
        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);

    }
    if (thunderCreatedFrame + 10 === frameCount && Thunder) {
        Thunder.destroy();
    }
    umbrella.display();

    drawSprites();

}


if (this.rain.position.y > height) {
    Matter.Body.setPosition(this.rain, { x: random(0, 400), y: random(0, 400) })

}

