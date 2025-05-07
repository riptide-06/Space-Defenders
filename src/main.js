import { BootScene } from './Scenes/BootScene.js';
import { PreloadScene } from './Scenes/PreloadScene.js';
import { GameScene } from './Scenes/GameScene.js';
import { BackgroundScene } from './Scenes/BackgroundScene.js';
import { MenuScene } from './Scenes/MenuScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [BootScene, PreloadScene, MenuScene, BackgroundScene, GameScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

window.addEventListener('load', () => {
    new Phaser.Game(config);
});