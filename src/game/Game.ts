import Phaser from 'phaser'
import { PlatformerScene } from './scenes/PlatformerScene'

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    backgroundColor: '#87ceeb',

    parent: 'game-container',

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1200,
            },
            debug: false,
        },
    },

    scene: [PlatformerScene],
}

export function createGame(
    onMainMenu: () => void,
) {

    const game =
        new Phaser.Game(
            gameConfig,
        )

    game.events.once(
        Phaser.Core.Events.READY,
        () => {

            const scene =
                game.scene.getScene(
                    'PlatformerScene',
                )

            scene.events.on(
                'main-menu',
                onMainMenu,
            )
        },
    )

    return game
}