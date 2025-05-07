export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Load game assets
        this.load.image('player', 'assets/Player.png');
        this.load.image('civilian', 'assets/Civilian.png');
        this.load.image('fighter', 'assets/Fighter.png');
        this.load.image('bandit', 'assets/Bandit.png');
        this.load.image('frigate', 'assets/Frigate.png');
        this.load.image('starship', 'assets/Starship.png');
        this.load.image('laser_blue', 'assets/laserBlue07.png');
        this.load.image('laser_red', 'assets/laserRed01.png');
        this.load.image('laser_green', 'assets/laserGreen13.png');
    }

    create() {
        this.scene.start('MenuScene');
    }
}