// snippets from: https://phasergames.com/phaser-3-snippets/phaser-3-sprite-snippets/
// https://phasergames.com/phaser-3-snippets/phaser-3-animation-snippets/

class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    // load our images or sounds
    // this.load.image('face', 'images/face.png'); // this.load.image('key', 'path')
    this.load.spritesheet('boy', 'images/boy.png', {
      frameWidth: 120, // width of each frame
      frameHeight: 200, // height of each frame, these have to be accurate...
    });
  }

  create() {
    let X_AXIS_CENTER = game.config.width / 2,
      Y_AXIS_CENTER = game.config.height / 2;
    // define our objects
    // this.face = this.add.image(0, 0, 'face'); // this.add.image(x, y, "key");
    // this.face.setOrigin(0,0)
    // center
    // this.face.x = game.config.width / 2
    // this.face.y = game.config.height / 2
    // this.face.alpha = 0.5 // transparency, min: 0, max: 1
    // this.face.angle = 45 // rotate 45 deg
    // this.face.scaleX = 0.5;
    // this.face.scaleY = 0.5;
    // this.face.displayWidth = 100 // set width to 100 pixels
    // this.face.displayHeight = 50 // set width to 100 pixels
    // this.face.scaleY = this.face.scaleX // proportional height

    this.char = this.add.sprite(X_AXIS_CENTER, Y_AXIS_CENTER, 'boy'); // x, y, key

    let frameNames = this.anims.generateFrameNumbers('boy'); // get amount of frames for sprite (needs key)

    // creating an animation
    this.anims.create({
      key: 'walk',
      frames: frameNames,
      // frames: [
      // key of sprite, frame number going from 0 to 5, x image has x many frames
      //{ key: 'boy', frame: frameNumber (0,1,2, etc...) },
      // { key: 'boy', frame: 0 },
      // { key: 'boy', frame: 1 },
      // { key: 'boy', frame: 2 },
      // { key: 'boy', frame: 3 },
      // { key: 'boy', frame: 4 },
      // { key: 'boy', frame: 5 },
      // ],
      frameRate: 8, // speed of animation
      repeat: -1, // repeat -1 is infinite, enter other positive number for set number of animation loops
    });

    this.char.play('walk'); // play animation('key')
  }
  update() {
    // constant running loop
  }

  // we can also add our own custom functions
}
