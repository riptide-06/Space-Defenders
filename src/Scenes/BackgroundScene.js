export class BackgroundScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BackgroundScene', active: false });
        this.stars = [];
        this.planets = [];
    }

    create() {
        // Create stars
        for (let i = 0; i < 100; i++) {
            const x = Phaser.Math.Between(0, this.sys.game.config.width);
            const y = Phaser.Math.Between(0, this.sys.game.config.height);
            const star = this.add.circle(x, y, 1, 0xffffff);
            this.stars.push({
                obj: star,
                speed: Phaser.Math.FloatBetween(0.1, 0.5)
            });
        }

        // Create planets
        const planetColors = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff];
        for (let i = 0; i < 4; i++) {
            const x = Phaser.Math.Between(0, this.sys.game.config.width);
            const y = Phaser.Math.Between(0, this.sys.game.config.height);
            const planet = this.add.circle(x, y, Phaser.Math.Between(5, 15), planetColors[i]);
            this.planets.push({
                obj: planet,
                speedX: Phaser.Math.FloatBetween(-0.2, 0.2),
                speedY: Phaser.Math.FloatBetween(-0.2, 0.2)
            });
        }
    }

    update() {
        const width = this.sys.game.config.width;
        const height = this.sys.game.config.height;

        // Animate stars
        for (const star of this.stars) {
            star.obj.x -= star.speed;
            if (star.obj.x < 0) {
                star.obj.x = width;
                star.obj.y = Phaser.Math.Between(0, height);
            }
        }

        // Animate planets
        for (const planet of this.planets) {
            planet.obj.x += planet.speedX;
            planet.obj.y += planet.speedY;

            if (planet.obj.x < 0 || planet.obj.x > width) planet.speedX *= -1;
            if (planet.obj.y < 0 || planet.obj.y > height) planet.speedY *= -1;
        }
    }
}