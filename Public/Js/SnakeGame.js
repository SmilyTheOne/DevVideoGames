import Phase1 from "./Phase1.js";

const config = {
    width: 640,
    height: 640,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [Phase1],
};

new Phaser.Game(config)