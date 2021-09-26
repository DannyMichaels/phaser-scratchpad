// snippets from: https://phasergames.com/phaser-3-snippets/phaser-3-sprite-snippets/
class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    // load our images or sounds
    this.load.image("face", "images/face.png"); // this.load.image('key', 'path')
  }
  create() {
    // define our objects
    this.face = this.add.image(100, 200, "face"); // this.add.image(x, y, "key");
    // this.face.alpha = 0.5 // transparency, min: 0, max: 1
    // this.face.angle = 45 // rotate 45 deg
    // this.face.scaleX = 0.5;
    // this.face.scaleY = 0.5;
    this.face.displayWidth = 100 // set width to 100 pixels
    // this.face.displayHeight = 50 // set width to 100 pixels
    this.face.scaleY = this.face.scaleX // proportionate height
  }
  update() {
    // constant running loop
  }

  // we can also add our own custom functions
}
