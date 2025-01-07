const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: function () {
      this.load.image("sky", "src/assets/sky.jpeg");
    },
    create: function () {
      this.add.image(400, 300, "sky");
    },
  },
};

const game = new Phaser.Game(config);
