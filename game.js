const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: function () {
      this.load.image("sky", "assets/sky.jpeg");
    },
    create: function () {
      this.add.image(400, 300, "sky");
    },
  },
};

const game = new Phaser.Game(config);
