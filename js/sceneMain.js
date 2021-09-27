// snippets from: https://phasergames.com/phaser-3-snippets/phaser-3-sprite-snippets/
// https://phasergames.com/phaser-3-snippets/phaser-3-animation-snippets/

class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload() {
    // load our images or sounds
    // this.load.image('face', 'images/face.png'); // this.load.image('key', 'path')
    //   this.load.spritesheet('boy', 'images/boy.png', {
    //     frameWidth: 120, // width of each frame
    //     frameHeight: 200, // height of each frame, these have to be accurate...
    //   });
    // this.graphics = this.add.graphics();
    // this.graphics.lineStyle(8, 0xff0000); // thickness, color
    // this.graphics.moveTo(0, 0); // x, y
    // this.graphics.lineTo(100, 300); // line direction
    // this.graphics.strokePath(); // draw line
    // this.graphics.strokeRect(100, 200, 50, 50); // draw rectangle
    // this.graphics.fillStyle(0xff00ff, 0.5); // draw circle
    // this.graphics.fillCircle(100, 200, 60); // filled circle
    // this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
    this.load.image('apple', 'images/apple.png');
  }

  create() {
    let X_AXIS_CENTER = game.config.width / 2,
      Y_AXIS_CENTER = game.config.height / 2;
    // define our objects
    // this.face = this.add.image(X_AXIS_CENTER, Y_AXIS_CENTER, 'face'); // this.add.image(x, y, "key");
    // this.face.setInteractive(); // tells phaser to listen to events on this object.
    // // pointedown means click
    // this.face.on('pointerdown', () => {
    //   this.face.alpha = 0.5;
    // });
    // // function that runs on event, can be declared in class or callback
    // this.face.on('pointerup', () => {
    //   this.face.alpha = 1;
    // });

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

    // this.char = this.add.sprite(0, Y_AXIS_CENTER, 'boy'); // x, y, key

    // let frameNames = this.anims.generateFrameNumbers('boy'); // get amount of frames for sprite (needs key)

    // creating an animation
    // this.anims.create({
    //   key: 'walk',
    //   frames: frameNames,
    //   // frames: [
    //   // key of sprite, frame number going from 0 to 5, x image has x many frames
    //   //{ key: 'boy', frame: frameNumber (0,1,2, etc...) },
    //   // { key: 'boy', frame: 0 },
    //   // { key: 'boy', frame: 1 },
    //   // { key: 'boy', frame: 2 },
    //   // { key: 'boy', frame: 3 },
    //   // { key: 'boy', frame: 4 },
    //   // { key: 'boy', frame: 5 },
    //   // ],
    //   frameRate: 8, // speed of animation
    //   repeat: -1, // repeat -1 is infinite, enter other positive number for set number of animation loops
    // });

    // this.char.play('walk'); // play animation('key')

    // this.doWalk();

    // adding text
    // this.text1 = this.add.text(X_AXIS_CENTER, Y_AXIS_CENTER, 'hello', {
    //   // jss
    //   fontFamily: 'Anton',
    //   color: '#ff0000',
    //   fontSize: '40px',
    // });
    // this.text1.setOrigin(0.5, 0.5);

    // sounds
    // this.catSound = this.sound.add('cat'); // (key)
    // this.catSound.play();

    let appleGroup = this.add.group();

    // groups
    for (let i = 0; i < 5; i++) {
      let xx = Phaser.Math.Between(100, 400); // location
      let yy = Phaser.Math.Between(100, 400); // location
      let apple = this.add.image(xx, yy, 'apple');
      apple.setScale(0.5); // img size
      appleGroup.add(apple);
    }
    testObj = appleGroup; // assign to global var so can use in console
    // to loop through and detect collisions, can use appleGroup.children.entries. thats the point of using groups
  }
  // doWalk() {
  //   // another way of moving sprite
  //   this.tweens.add({
  //     targets: this.char,
  //     duration: 5000, // 1 second in ms
  //     x: game.config.width, // go in x axis
  //     y: 0, // go in y axis
  //     alpha: 0, // transparency
  //     onComplete: this.onCompleteHandler.bind(this), // function that runs when the tween sequence end, put scope of scene to the function with .bind
  //     onCompleteParams: [this], // pas it to scope of onCompleteHandler
  //   });
  // }

  // onCompleteHandler(tween, targets, custom) {
  //   let Y_AXIS_CENTER = game.config.height / 2;

  //   console.log('complete!');
  //   let char = targets[0]; // have to access it as a local variable through targets for the next lines to work, can't use this.char
  //   char.x = 0;
  //   char.y = Y_AXIS_CENTER;
  //   char.alpha = 1;

  //   this.doWalk();
  // }
  update() {
    // constant running loop, can remember it by comparing to a useEffect with no dependency array.
    // WAY 1 OF MOVING SPRITES
    /* 
    this.char.x += 2; // move char in xAxis +2 units in constant loop
    
    if (this.char.x > game.config.width) {
      // if character went past game max width, bring him back to beginning.
      this.char.x = 0;
    }
      */
  }

  // we can also add our own custom functions
}
