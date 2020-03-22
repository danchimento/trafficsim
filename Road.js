export default class Road {
    constructor(scene) {
        this.scene = scene;
        this.length = this.scene.game.config.width;
        this.laneCount = 1;
        this.laneSize = 150;
        
        this.shoulderSize = 100;

        this.lineWidth = 5;
        this.lineLength = 50;
        this.lineStyle = "DOTTED";
        this.lineSpacing = 30;
        this.lineColors = {
            WITH_TRAFFIC: "0xffffff",
            AGAINST_TRAFFIC: "0xe1ad01"
        }
    }

    update() {

    }

    draw() {
        this.scene.add.rectangle(0, this.shoulderSize, this.length, this.lineWidth, this.lineColors.WITH_TRAFFIC).setOrigin(0, 0);

        for (var i = 1; i < this.laneCount; i ++)
        {
            var x = 0;
            while (x < this.length) {
                this.scene.add.rectangle(x, this.shoulderSize + this.laneSize * i, this.lineLength, this.lineWidth, this.lineColors.WITH_TRAFFIC).setOrigin(0, 0);
                x += this.lineSpacing + this.lineLength
            }
        }

        this.scene.add.rectangle(0, this.shoulderSize + this.laneCount * this.laneSize, this.length, this.lineWidth, this.lineColors.WITH_TRAFFIC).setOrigin(0, 0);
    }
}