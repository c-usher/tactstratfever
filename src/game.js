import Phaser from "phaser";
const config = {
  width: 1280,
  height: 720,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.DOM.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    parent: "game-canvas",
  },
  pixelArt: true, //Stops Phaser from trying to smooth out the images
  scene: [],
};

new Phaser.Game(config);
