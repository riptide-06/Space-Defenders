export class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Add title
        this.add.text(width / 2, height / 3, 'SPACE DEFENDER', {
            fontSize: '48px',
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // Add play button
        const playButton = this.add.rectangle(width / 2, height / 2, 200, 50, 0x00ff00);
        const playText = this.add.text(width / 2, height / 2, 'PLAY GAME', {
            fontSize: '24px',
            fontFamily: 'Arial',
            color: '#000000'
        }).setOrigin(0.5);

        // Make button interactive
        playButton.setInteractive();
        playButton.on('pointerover', () => {
            playButton.setFillStyle(0x00cc00);
        });
        playButton.on('pointerout', () => {
            playButton.setFillStyle(0x00ff00);
        });
        playButton.on('pointerdown', () => {
            this.scene.start('BackgroundScene');
            this.scene.start('GameScene');
        });

        // Add instructions
        this.add.text(width / 2, height * 0.7, 'Use arrow keys to move\nPress SPACE to shoot\nProtect civilian ships!', {
            fontSize: '20px',
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    }
}