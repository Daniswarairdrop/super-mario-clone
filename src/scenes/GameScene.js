import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }

  preload() {
    this.load.image('player', 'assets/images/mario.png')
    this.load.image('ground', 'assets/images/ground.png')
  }

  create() {
    // Ground
    const ground = this.physics.add.staticGroup()
    ground.create(400, 580, 'ground').setScale(2).refreshBody()

    // Player
    this.player = this.physics.add.sprite(100, 450, 'player')
    this.player.setBounce(0.2)
    this.player.setCollideWorldBounds(true)

    this.physics.add.collider(this.player, ground)

    // Cursor input
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)
    } else {
      this.player.setVelocityX(0)
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330)
    }
  }
}
