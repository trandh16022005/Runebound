import Phaser from 'phaser'

const GAME_WIDTH = 1280
const GAME_HEIGHT = 720

// ======================================================
// WORLD
// ======================================================

const WORLD_WIDTH = 15000

// ======================================================
// CHECKPOINTS
// ======================================================

const CHECKPOINT_1_X = 5000
const CHECKPOINT_2_X = 10000
const CHECKPOINT_3_X = 13000

const CHECKPOINT_Y = 600

// ======================================================
// PLAYER
// ======================================================

const PLAYER_SPEED = 260
const JUMP_VELOCITY = -560

// ======================================================
// ENEMIES
// ======================================================

const ENEMY_SPEED = 60
const FAST_ENEMY_SPEED = 95

// ======================================================
// BOSS
// ======================================================

const BOSS_X = 12250
const BOSS_Y = 528

const BOSS_MAX_HP = 8
const BOSS_SIZE = 104

const BOSS_MINION_SPEED = 130

const BOSS_SPAWN_INTERVAL = 2600
const BOSS_MAX_MINIONS = 8

const BOSS_HIT_COOLDOWN = 500

// ======================================================
// GOAL
// ======================================================

const GOAL_X = 14930
const GOAL_Y = 660

// ======================================================
// PLATFORMS
// ======================================================

const PLATFORMS = [

    // ==================================================
    // STAGE 1
    // 0 -> 5000
    // ==================================================

    // Ground
    { x: 0, y: 660, width: 700, height: 60 },
    { x: 820, y: 660, width: 700, height: 60 },
    { x: 1640, y: 660, width: 650, height: 60 },
    { x: 2410, y: 660, width: 700, height: 60 },
    { x: 3230, y: 660, width: 650, height: 60 },
    { x: 4000, y: 660, width: 1000, height: 60 },

    // Section 1
    { x: 180, y: 540, width: 220, height: 24 },
    { x: 500, y: 450, width: 190, height: 24 },

    // Section 2
    { x: 900, y: 530, width: 220, height: 24 },
    { x: 1190, y: 430, width: 190, height: 24 },
    { x: 1450, y: 520, width: 180, height: 24 },

    // Section 3
    { x: 1740, y: 540, width: 220, height: 24 },
    { x: 2040, y: 440, width: 190, height: 24 },
    { x: 2260, y: 350, width: 180, height: 24 },

    // Section 4
    { x: 2550, y: 530, width: 220, height: 24 },
    { x: 2860, y: 430, width: 200, height: 24 },
    { x: 3070, y: 520, width: 180, height: 24 },

    // Section 5
    { x: 3350, y: 540, width: 220, height: 24 },
    { x: 3650, y: 450, width: 190, height: 24 },
    { x: 3860, y: 350, width: 180, height: 24 },

    // Final starter section
    { x: 4150, y: 530, width: 220, height: 24 },
    { x: 4470, y: 430, width: 190, height: 24 },
    { x: 4700, y: 520, width: 180, height: 24 },


    // ==================================================
    // STAGE 2
    // 5000 -> 10000
    // ==================================================

    // Section 6
    { x: 5000, y: 660, width: 420, height: 60 },

    { x: 5500, y: 560, width: 170, height: 24 },
    { x: 5780, y: 460, width: 150, height: 24 },
    { x: 6030, y: 540, width: 150, height: 24 },
    { x: 6300, y: 430, width: 160, height: 24 },

    { x: 6500, y: 660, width: 300, height: 60 },

    // Section 7
    { x: 6850, y: 600, width: 180, height: 24 },
    { x: 7130, y: 500, width: 150, height: 24 },
    { x: 7380, y: 390, width: 150, height: 24 },
    { x: 7640, y: 500, width: 140, height: 24 },
    { x: 7900, y: 600, width: 180, height: 24 },

    // Section 8
    { x: 8200, y: 660, width: 300, height: 60 },
    { x: 8550, y: 540, width: 150, height: 24 },
    { x: 8800, y: 420, width: 150, height: 24 },
    { x: 9000, y: 540, width: 160, height: 24 },

    // Section 9
    { x: 9300, y: 660, width: 220, height: 60 },
    { x: 9500, y: 540, width: 130, height: 24 },
    { x: 9700, y: 450, width: 120, height: 24 },
    { x: 9850, y: 660, width: 150, height: 60 },


    // ==================================================
    // STAGE 3
    // 10000 -> 15000
    // ==================================================

    // --------------------------------------------------
    // 10000 -> 11500
    // EASY APPROACH TO BOSS
    // --------------------------------------------------

    { x: 10000, y: 660, width: 1500, height: 60 },

    // small decorative/easy platforms
    { x: 10200, y: 560, width: 180, height: 24 },
    { x: 10500, y: 500, width: 180, height: 24 },
    { x: 10800, y: 560, width: 180, height: 24 },
    { x: 11100, y: 500, width: 180, height: 24 },


    // --------------------------------------------------
    // 11500 -> 13000
    // BOSS ARENA
    // --------------------------------------------------

    { x: 11500, y: 660, width: 1500, height: 60 },

    // --------------------------------------------------
    // 13000 -> 15000
    // HARD ENDGAME
    // --------------------------------------------------

    { x: 13000, y: 660, width: 250, height: 60 },

    { x: 13350, y: 560, width: 140, height: 24 },
    { x: 13600, y: 450, width: 130, height: 24 },
    { x: 13850, y: 550, width: 120, height: 24 },

    { x: 14100, y: 420, width: 130, height: 24 },
    { x: 14350, y: 520, width: 110, height: 24 },
    { x: 14580, y: 390, width: 120, height: 24 },

    { x: 14750, y: 520, width: 180, height: 24 },

    // Final ground
    { x: 14900, y: 660, width: 100, height: 60 },
]


// ======================================================
// COINS
// ======================================================

const COINS = [

    // ==================================================
    // STAGE 1
    // ==================================================

    { x: 280, y: 495 },
    { x: 595, y: 405 },

    { x: 1000, y: 485 },
    { x: 1285, y: 385 },
    { x: 1540, y: 475 },

    { x: 1840, y: 495 },
    { x: 2135, y: 395 },
    { x: 2350, y: 305 },

    { x: 2650, y: 485 },
    { x: 2950, y: 385 },
    { x: 3160, y: 475 },

    { x: 3450, y: 495 },
    { x: 3740, y: 405 },
    { x: 3950, y: 305 },

    { x: 4250, y: 485 },
    { x: 4560, y: 385 },
    { x: 4790, y: 475 },


    // ==================================================
    // STAGE 2
    // ==================================================

    { x: 5280, y: 590 },
    { x: 5585, y: 515 },
    { x: 5855, y: 415 },
    { x: 6105, y: 495 },
    { x: 6375, y: 385 },

    { x: 6940, y: 555 },
    { x: 7205, y: 455 },
    { x: 7455, y: 345 },
    { x: 7710, y: 455 },
    { x: 7960, y: 555 },

    { x: 8320, y: 590 },
    { x: 8625, y: 495 },
    { x: 8875, y: 375 },
    { x: 9075, y: 495 },

    { x: 9410, y: 590 },
    { x: 9565, y: 495 },
    { x: 9760, y: 405 },


    // ==================================================
    // STAGE 3
    // ==================================================

    { x: 10300, y: 505 },
    { x: 10600, y: 445 },
    { x: 10900, y: 505 },
    { x: 11200, y: 445 },

    // Boss arena
    { x: 11700, y: 605 },
    { x: 12600, y: 605 },

    // Endgame
    { x: 13420, y: 505 },
    { x: 13665, y: 395 },
    { x: 13910, y: 495 },
    { x: 14165, y: 365 },
    { x: 14405, y: 465 },
    { x: 14635, y: 335 },
    { x: 14820, y: 465 },
]


// ======================================================
// NORMAL ENEMIES
// ======================================================

const ENEMIES = [

    // Stage 1
    {
        x: 560,
        y: 610,
        minX: 500,
        maxX: 680,
    },

    {
        x: 980,
        y: 610,
        minX: 880,
        maxX: 1100,
    },

    {
        x: 1300,
        y: 380,
        minX: 1190,
        maxX: 1360,
    },

    {
        x: 1760,
        y: 610,
        minX: 1680,
        maxX: 1930,
    },

    {
        x: 2130,
        y: 390,
        minX: 2040,
        maxX: 2200,
    },

    {
        x: 2600,
        y: 610,
        minX: 2440,
        maxX: 2760,
    },

    {
        x: 2900,
        y: 380,
        minX: 2860,
        maxX: 3050,
    },

    {
        x: 3400,
        y: 610,
        minX: 3260,
        maxX: 3600,
    },

    {
        x: 3700,
        y: 400,
        minX: 3650,
        maxX: 3820,
    },

    {
        x: 4180,
        y: 500,
        minX: 4150,
        maxX: 4350,
    },

    {
        x: 4550,
        y: 380,
        minX: 4470,
        maxX: 4650,
    },


    // Stage 2
    {
        x: 5280,
        y: 610,
        minX: 5050,
        maxX: 5350,
    },

    {
        x: 5600,
        y: 510,
        minX: 5500,
        maxX: 5670,
    },

    {
        x: 6150,
        y: 500,
        minX: 6030,
        maxX: 6180,
    },

    {
        x: 6960,
        y: 550,
        minX: 6850,
        maxX: 7020,
    },

    {
        x: 7750,
        y: 450,
        minX: 7640,
        maxX: 7780,
    },
]


// ======================================================
// FAST ENEMIES
// ======================================================

const FAST_ENEMIES = [

    {
        x: 8300,
        y: 610,
        minX: 8200,
        maxX: 8470,
    },

    {
        x: 8610,
        y: 490,
        minX: 8550,
        maxX: 8700,
    },

    {
        x: 9050,
        y: 490,
        minX: 9000,
        maxX: 9140,
    },

    {
        x: 9400,
        y: 610,
        minX: 9300,
        maxX: 9500,
    },

    {
        x: 9760,
        y: 426,
        minX: 9710,
        maxX: 9810,
    },
]


// ======================================================
// SPIKES
// ======================================================

const SPIKES = [

    // Stage 2
    {
        x: 5400,
        y: 648,
        width: 90,
    },

    {
        x: 6650,
        y: 648,
        width: 90,
    },

    {
        x: 8050,
        y: 588,
        width: 60,
    },

    {
        x: 9630,
        y: 546,
        width: 30,
    },
]


// ======================================================
// CHECKPOINT DATA
// ======================================================

const CHECKPOINTS = [

    {
        id: 1,
        x: CHECKPOINT_1_X,
        y: CHECKPOINT_Y,
    },

    {
        id: 2,
        x: CHECKPOINT_2_X,
        y: CHECKPOINT_Y,
    },

    {
        id: 3,
        x: CHECKPOINT_3_X,
        y: CHECKPOINT_Y,
    },
]

const BOSS_PLATFORM_MIN_X = 11700
const BOSS_PLATFORM_MAX_X = 12600

const BOSS_PLATFORM_Y = 552
const BOSS_PLATFORM_WIDTH = 100
const BOSS_PLATFORM_HEIGHT = 24

const BOSS_PLATFORM_MIN_DISTANCE = 300
const BOSS_PLATFORM_MAX_DISTANCE = 600

// ======================================================
// SCENE
// ======================================================

export class PlatformerScene extends Phaser.Scene {

    // ==================================================
    // OBJECTS
    // ==================================================

    private player!: Phaser.Physics.Arcade.Sprite

    private platforms!: Phaser.Physics.Arcade.StaticGroup

    private coins!: Phaser.Physics.Arcade.Group

    private enemies!: Phaser.Physics.Arcade.Group

    private fastEnemies!: Phaser.Physics.Arcade.Group

    private spikes!: Phaser.Physics.Arcade.StaticGroup

    private checkpointObjects!: Phaser.Physics.Arcade.StaticGroup

    private goal!: Phaser.Physics.Arcade.Sprite

    private gateway!: Phaser.Physics.Arcade.Sprite

    private boss!: Phaser.Physics.Arcade.Sprite

    private bossMinions!: Phaser.Physics.Arcade.Group

    private bossPlatform!: Phaser.Physics.Arcade.Sprite

    // ==================================================
    // INPUT
    // ==================================================

    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys

    private keys!: {
        left: Phaser.Input.Keyboard.Key
        right: Phaser.Input.Keyboard.Key
        jump: Phaser.Input.Keyboard.Key
        restart: Phaser.Input.Keyboard.Key
        debug: Phaser.Input.Keyboard.Key
    }

    // ==================================================
    // GAME STATE
    // ==================================================

    private score = 0

    private lives = 3

    private checkpointX = 80

    private checkpointY = 600

    private checkpointReached = false

    private currentCheckpoint = 0

    private isGameOver = false

    private isWon = false

    private isRespawning = false

    // ==================================================
    // BOSS STATE
    // ==================================================

    private bossHp = BOSS_MAX_HP

    private bossAlive = true

    private gatewayOpen = false

    private bossLastHitTime = 0

    private bossStompProtection = false

    private bossLastSpawnTime = 0

    // ==================================================
    // UI
    // ==================================================

    private scoreText!: Phaser.GameObjects.Text

    private livesText!: Phaser.GameObjects.Text

    private zoneText!: Phaser.GameObjects.Text

    private messageText!: Phaser.GameObjects.Text

    private coordinateText!: Phaser.GameObjects.Text

    private bossHpText!: Phaser.GameObjects.Text


    constructor() {

        super('PlatformerScene')

    }


    // ==================================================
    // CREATE
    // ==================================================

    create() {

        this.score = 0

        this.lives = 3

        this.checkpointX = 80

        this.checkpointY = 600

        this.checkpointReached = false

        this.currentCheckpoint = 0

        this.isGameOver = false

        this.isWon = false

        this.isRespawning = false

        this.bossHp = BOSS_MAX_HP

        this.bossAlive = true

        this.gatewayOpen = false

        this.bossLastHitTime = 0

        this.bossLastSpawnTime =
            this.time.now


        this.createTextures()

        this.createBackground()

        this.createPlatforms()

        this.createPlayer()

        this.createCoins()

        this.createEnemies()

        this.createFastEnemies()

        this.createSpikes()

        this.createCheckpoint()

        this.createBossMinionGroup()

        this.createBoss()

        this.createBossPlatform()

        this.createGateway()

        this.createGoal()

        this.setupInput()

        this.setupCamera()

        this.createUI()

    }


    // ==================================================
    // UPDATE
    // ==================================================

    update() {

        // ------------------------------------------------
        // WIN / GAME OVER
        // ------------------------------------------------

        if (
            this.isGameOver ||
            this.isWon
        ) {

            if (
                Phaser.Input.Keyboard.JustDown(
                    this.keys.restart,
                )
            ) {

                this.restartLevel()

            }

            return

        }


        // ------------------------------------------------
        // RESPAWN
        // ------------------------------------------------

        if (this.isRespawning) {

            this.updateEnemies(
                this.enemies,
                ENEMY_SPEED,
            )

            this.updateEnemies(
                this.fastEnemies,
                FAST_ENEMY_SPEED,
            )

            this.updateBossMinions()

            return

        }


        // ------------------------------------------------
        // DEBUG
        // ------------------------------------------------

        if (
            Phaser.Input.Keyboard.JustDown(
                this.keys.debug,
            )
        ) {

            this.coordinateText.setVisible(
                !this.coordinateText.visible,
            )

        }


        // ------------------------------------------------
        // PLAYER
        // ------------------------------------------------

        this.updatePlayer()


        // ------------------------------------------------
        // NORMAL ENEMIES
        // ------------------------------------------------

        this.updateEnemies(
            this.enemies,
            ENEMY_SPEED,
        )

        this.updateEnemies(
            this.fastEnemies,
            FAST_ENEMY_SPEED,
        )


        // ------------------------------------------------
        // BOSS
        // ------------------------------------------------

        this.updateBoss()

        this.updateBossMinions()


        // ------------------------------------------------
        // CHECKPOINTS
        // ------------------------------------------------

        this.updateCheckpoints()


        // ------------------------------------------------
        // FALL
        // ------------------------------------------------

        if (
            this.player.y >
            GAME_HEIGHT + 100
        ) {

            this.loseLife()

        }


        // ------------------------------------------------
        // GOAL
        // ------------------------------------------------

        if (
            this.player.x >= GOAL_X - 50 &&
            this.gatewayOpen
        ) {

            this.winGame()

        }


        // ------------------------------------------------
        // ZONE UI
        // ------------------------------------------------

        this.updateZone()


        // ------------------------------------------------
        // DEBUG COORDINATES
        // ------------------------------------------------

        if (
            this.coordinateText.visible
        ) {

            this.coordinateText.setText(
                `DEBUG COORDINATES\n` +
                `X: ${Math.round(this.player.x)}\n` +
                `Y: ${Math.round(this.player.y)}`,
            )

        }

    }


    // ======================================================
    // TEXTURES
    // ======================================================

    private createTextures() {

        // ==================================================
        // PLAYER
        // ==================================================

        if (
            !this.textures.exists('player')
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x4da6ff,
            )

            graphics.fillRect(
                0,
                0,
                36,
                48,
            )

            graphics.fillStyle(
                0xffffff,
            )

            graphics.fillRect(
                7,
                9,
                8,
                8,
            )

            graphics.fillRect(
                21,
                9,
                8,
                8,
            )

            graphics.fillStyle(
                0x222222,
            )

            graphics.fillRect(
                10,
                12,
                4,
                4,
            )

            graphics.fillRect(
                23,
                12,
                4,
                4,
            )

            graphics.fillStyle(
                0x1f4f91,
            )

            graphics.fillRect(
                0,
                36,
                36,
                12,
            )

            graphics.generateTexture(
                'player',
                36,
                48,
            )

            graphics.destroy()

        }


        // ==================================================
        // NORMAL PLATFORM
        // ==================================================

        if (
            !this.textures.exists(
                'platform',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x4b5563,
            )

            graphics.fillRect(
                0,
                0,
                200,
                60,
            )

            graphics.fillStyle(
                0x65c466,
            )

            graphics.fillRect(
                0,
                0,
                200,
                8,
            )

            graphics.generateTexture(
                'platform',
                200,
                60,
            )

            graphics.destroy()

        }


        // ==================================================
        // SMALL PLATFORM
        // ==================================================

        if (
            !this.textures.exists(
                'small-platform',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x4b5563,
            )

            graphics.fillRect(
                0,
                0,
                200,
                24,
            )

            graphics.fillStyle(
                0x65c466,
            )

            graphics.fillRect(
                0,
                0,
                200,
                6,
            )

            graphics.generateTexture(
                'small-platform',
                200,
                24,
            )

            graphics.destroy()

        }


        // ==================================================
        // CHALLENGE PLATFORM
        // ==================================================

        if (
            !this.textures.exists(
                'challenge-platform',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x453a50,
            )

            graphics.fillRect(
                0,
                0,
                200,
                60,
            )

            graphics.fillStyle(
                0xc06c52,
            )

            graphics.fillRect(
                0,
                0,
                200,
                8,
            )

            graphics.generateTexture(
                'challenge-platform',
                200,
                60,
            )

            graphics.destroy()

        }


        // ==================================================
        // CHALLENGE SMALL PLATFORM
        // ==================================================

        if (
            !this.textures.exists(
                'challenge-small-platform',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x453a50,
            )

            graphics.fillRect(
                0,
                0,
                200,
                24,
            )

            graphics.fillStyle(
                0xc06c52,
            )

            graphics.fillRect(
                0,
                0,
                200,
                6,
            )

            graphics.generateTexture(
                'challenge-small-platform',
                200,
                24,
            )

            graphics.destroy()

        }


        // ==================================================
        // STAGE 3 PLATFORM
        // ==================================================

        if (
            !this.textures.exists(
                'stage3-platform',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x30263d,
            )

            graphics.fillRect(
                0,
                0,
                200,
                60,
            )

            graphics.fillStyle(
                0xe5a84b,
            )

            graphics.fillRect(
                0,
                0,
                200,
                8,
            )

            graphics.generateTexture(
                'stage3-platform',
                200,
                60,
            )

            graphics.destroy()

        }


        // ==================================================
        // STAGE 3 SMALL PLATFORM
        // ==================================================

        if (
            !this.textures.exists(
                'stage3-small-platform',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x30263d,
            )

            graphics.fillRect(
                0,
                0,
                200,
                24,
            )

            graphics.fillStyle(
                0xe5a84b,
            )

            graphics.fillRect(
                0,
                0,
                200,
                6,
            )

            graphics.generateTexture(
                'stage3-small-platform',
                200,
                24,
            )

            graphics.destroy()

        }


        // ==================================================
        // COIN
        // ==================================================

        if (
            !this.textures.exists(
                'coin',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0xffd43b,
            )

            graphics.fillCircle(
                12,
                12,
                10,
            )

            graphics.lineStyle(
                2,
                0xffa500,
            )

            graphics.strokeCircle(
                12,
                12,
                10,
            )

            graphics.generateTexture(
                'coin',
                24,
                24,
            )

            graphics.destroy()

        }


        // ==================================================
        // NORMAL ENEMY
        // ==================================================

        if (
            !this.textures.exists(
                'enemy',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0xe05252,
            )

            graphics.fillRoundedRect(
                0,
                0,
                38,
                34,
                8,
            )

            graphics.fillStyle(
                0xffffff,
            )

            graphics.fillCircle(
                10,
                11,
                5,
            )

            graphics.fillCircle(
                28,
                11,
                5,
            )

            graphics.fillStyle(
                0x222222,
            )

            graphics.fillCircle(
                10,
                11,
                2,
            )

            graphics.fillCircle(
                28,
                11,
                2,
            )

            graphics.generateTexture(
                'enemy',
                38,
                34,
            )

            graphics.destroy()

        }


        // ==================================================
        // FAST ENEMY
        // ==================================================

        if (
            !this.textures.exists(
                'fast-enemy',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x8e44ad,
            )

            graphics.fillRoundedRect(
                0,
                0,
                42,
                38,
                8,
            )

            graphics.fillStyle(
                0xffffff,
            )

            graphics.fillCircle(
                11,
                12,
                5,
            )

            graphics.fillCircle(
                31,
                12,
                5,
            )

            graphics.fillStyle(
                0x111111,
            )

            graphics.fillCircle(
                11,
                12,
                2,
            )

            graphics.fillCircle(
                31,
                12,
                2,
            )

            graphics.fillStyle(
                0x5b2c6f,
            )

            graphics.fillRect(
                0,
                31,
                42,
                7,
            )

            graphics.generateTexture(
                'fast-enemy',
                42,
                38,
            )

            graphics.destroy()

        }


        // ==================================================
        // SPIKE
        // ==================================================

        if (
            !this.textures.exists(
                'spike',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0xd9d9d9,
            )

            graphics.fillTriangle(
                0,
                24,
                15,
                0,
                30,
                24,
            )

            graphics.lineStyle(
                2,
                0x666666,
            )

            graphics.strokeTriangle(
                0,
                24,
                15,
                0,
                30,
                24,
            )

            graphics.generateTexture(
                'spike',
                30,
                24,
            )

            graphics.destroy()

        }


        // ==================================================
        // CHECKPOINT
        // ==================================================

        if (
            !this.textures.exists(
                'checkpoint',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0xffffff,
            )

            graphics.fillRect(
                5,
                0,
                6,
                100,
            )

            graphics.fillStyle(
                0x38d9a9,
            )

            graphics.fillTriangle(
                11,
                8,
                60,
                25,
                11,
                42,
            )

            graphics.fillCircle(
                8,
                100,
                8,
            )

            graphics.generateTexture(
                'checkpoint',
                70,
                110,
            )

            graphics.destroy()

        }


        // ==================================================
        // GOAL FLAG
        // ==================================================

        if (
            !this.textures.exists(
                'flag',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0xffffff,
            )

            graphics.fillRect(
                5,
                0,
                5,
                100,
            )

            graphics.fillStyle(
                0xff5252,
            )

            graphics.fillTriangle(
                10,
                5,
                55,
                20,
                10,
                35,
            )

            graphics.generateTexture(
                'flag',
                60,
                100,
            )

            graphics.destroy()

        }


        // ==================================================
        // GATEWAY
        // ==================================================

        if (
            !this.textures.exists(
                'gateway',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x17121f,
            )

            graphics.fillRect(
                0,
                0,
                140,
                180,
            )

            graphics.lineStyle(
                8,
                0xe5a84b,
            )

            graphics.strokeRect(
                4,
                4,
                132,
                172,
            )

            graphics.fillStyle(
                0x8f5f26,
            )

            graphics.fillRect(
                20,
                40,
                100,
                120,
            )

            graphics.generateTexture(
                'gateway',
                140,
                180,
            )

            graphics.destroy()

        }


        // ==================================================
        // BOSS
        // ==================================================

        if (
            !this.textures.exists(
                'boss',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            // Body
            graphics.fillStyle(
                0x3b1f47,
            )

            graphics.fillRoundedRect(
                10,
                20,
                100,
                90,
                18,
            )

            // Head
            graphics.fillStyle(
                0x5d2f6f,
            )

            graphics.fillCircle(
                60,
                42,
                38,
            )

            // Horns
            graphics.fillStyle(
                0xe5a84b,
            )

            graphics.fillTriangle(
                25,
                25,
                38,
                0,
                45,
                30,
            )

            graphics.fillTriangle(
                75,
                30,
                82,
                0,
                95,
                25,
            )

            // Eyes
            graphics.fillStyle(
                0xff5252,
            )

            graphics.fillCircle(
                47,
                42,
                7,
            )

            graphics.fillCircle(
                73,
                42,
                7,
            )

            // Armor
            graphics.fillStyle(
                0x222222,
            )

            graphics.fillRect(
                25,
                75,
                70,
                25,
            )

            graphics.fillStyle(
                0xe5a84b,
            )

            graphics.fillRect(
                52,
                80,
                16,
                15,
            )

            graphics.generateTexture(
                'boss',
                BOSS_SIZE,
                BOSS_SIZE,
            )

            graphics.destroy()

        }


        // ==================================================
        // BOSS MINION
        // ==================================================

        if (
            !this.textures.exists(
                'boss-minion',
            )
        ) {

            const graphics =
                this.make.graphics({
                    x: 0,
                    y: 0,
                })

            graphics.fillStyle(
                0x9b3047,
            )

            graphics.fillRoundedRect(
                0,
                0,
                42,
                38,
                8,
            )

            graphics.fillStyle(
                0xffd6d6,
            )

            graphics.fillCircle(
                11,
                12,
                5,
            )

            graphics.fillCircle(
                31,
                12,
                5,
            )

            graphics.fillStyle(
                0x111111,
            )

            graphics.fillCircle(
                11,
                12,
                2,
            )

            graphics.fillCircle(
                31,
                12,
                2,
            )

            graphics.fillStyle(
                0x641f31,
            )

            graphics.fillRect(
                0,
                30,
                42,
                8,
            )

            graphics.generateTexture(
                'boss-minion',
                42,
                38,
            )

            graphics.destroy()

        }

    }


    // ======================================================
    // BACKGROUND
    // ======================================================

    private createBackground() {

        // ==================================================
        // STAGE 1 SKY
        // ==================================================

        this.add.rectangle(
            2500,
            GAME_HEIGHT / 2,
            5000,
            GAME_HEIGHT,
            0x87ceeb,
        )


        // ==================================================
        // STAGE 2 SKY
        // ==================================================

        this.add.rectangle(
            7500,
            GAME_HEIGHT / 2,
            5000,
            GAME_HEIGHT,
            0x493c68,
        )


        // ==================================================
        // STAGE 3 SKY
        // ==================================================

        this.add.rectangle(
            12500,
            GAME_HEIGHT / 2,
            5000,
            GAME_HEIGHT,
            0x21162f,
        )


        // ==================================================
        // STAGE 1 CLOUDS
        // ==================================================

        const clouds = [
            { x: 180, y: 100 },
            { x: 650, y: 150 },
            { x: 1150, y: 90 },
            { x: 1650, y: 130 },
            { x: 2150, y: 80 },
            { x: 2700, y: 140 },
            { x: 3250, y: 90 },
            { x: 3800, y: 150 },
            { x: 4350, y: 80 },
            { x: 4800, y: 130 },
        ]

        for (
            const cloud of clouds
            ) {

            this.add.ellipse(
                cloud.x,
                cloud.y,
                110,
                40,
                0xffffff,
                0.85,
            )

            this.add.ellipse(
                cloud.x - 35,
                cloud.y + 5,
                55,
                35,
                0xffffff,
                0.85,
            )

            this.add.ellipse(
                cloud.x + 35,
                cloud.y + 5,
                60,
                35,
                0xffffff,
                0.85,
            )

        }


        // ==================================================
        // STAGE 2 CLOUDS
        // ==================================================

        const darkClouds = [
            { x: 5350, y: 100 },
            { x: 6100, y: 160 },
            { x: 6900, y: 90 },
            { x: 7700, y: 150 },
            { x: 8450, y: 90 },
            { x: 9200, y: 140 },
            { x: 9800, y: 100 },
        ]

        for (
            const cloud of darkClouds
            ) {

            this.add.ellipse(
                cloud.x,
                cloud.y,
                150,
                45,
                0x8b7aa8,
                0.65,
            )

            this.add.ellipse(
                cloud.x - 45,
                cloud.y + 5,
                70,
                40,
                0x8b7aa8,
                0.65,
            )

            this.add.ellipse(
                cloud.x + 45,
                cloud.y + 5,
                75,
                40,
                0x8b7aa8,
                0.65,
            )

        }


        // ==================================================
        // STAGE 3 LIGHTS
        // ==================================================

        const lights = [
            10100,
            10400,
            10700,
            11000,
            11300,
            11600,
            12000,
            12400,
            12800,
        ]

        for (
            const x of lights
            ) {

            this.add.rectangle(
                x,
                300,
                8,
                120,
                0x55405f,
            )

            this.add.circle(
                x,
                365,
                16,
                0xffb84d,
                0.8,
            )

        }


        // ==================================================
        // STAGE 3 BOSS PILLARS
        // ==================================================

        const pillars = [
            11450,
            11700,
            12850,
            13100,
        ]

        for (
            const x of pillars
            ) {

            this.add.rectangle(
                x,
                535,
                55,
                250,
                0x392b45,
            )

            this.add.rectangle(
                x,
                420,
                80,
                25,
                0x5b405f,
            )

        }

    }


    // ======================================================
    // PLATFORMS
    // ======================================================

    private createPlatforms() {

        this.platforms =
            this.physics.add.staticGroup()


        for (
            const platform of PLATFORMS
            ) {

            let texture:
                string

            if (
                platform.x >= 10000
            ) {

                texture =
                    platform.height <= 30
                        ? 'stage3-small-platform'
                        : 'stage3-platform'

            } else if (
                platform.x >= 5000
            ) {

                texture =
                    platform.height <= 30
                        ? 'challenge-small-platform'
                        : 'challenge-platform'

            } else {

                texture =
                    platform.height <= 30
                        ? 'small-platform'
                        : 'platform'

            }


            const sprite =
                this.platforms.create(
                    platform.x +
                    platform.width / 2,

                    platform.y +
                    platform.height / 2,

                    texture,
                ) as Phaser.Physics.Arcade.Sprite


            sprite.setDisplaySize(
                platform.width,
                platform.height,
            )

            sprite.refreshBody()

        }

    }


    // ======================================================
    // PLAYER
    // ======================================================

    private createPlayer() {

        this.player =
            this.physics.add.sprite(
                80,
                600,
                'player',
            )


        this.player.setCollideWorldBounds(
            false,
        )

        this.player.setBounce(0)

        this.player.setDragX(900)

        this.player.setMaxVelocity(
            PLAYER_SPEED,
            1000,
        )


        this.physics.add.collider(
            this.player,
            this.platforms,
        )

    }


    // ======================================================
    // COINS
    // ======================================================

    private createCoins() {

        this.coins =
            this.physics.add.group({
                allowGravity: false,
                immovable: true,
            })


        for (
            const coin of COINS
            ) {

            const sprite =
                this.coins.create(
                    coin.x,
                    coin.y,
                    'coin',
                ) as Phaser.Physics.Arcade.Sprite


            sprite.setCircle(10)

            sprite.setBounce(0)

        }


        this.physics.add.overlap(
            this.player,
            this.coins,
            this.collectCoin,
            undefined,
            this,
        )

    }


    // ======================================================
    // NORMAL ENEMIES
    // ======================================================

    private createEnemies() {

        this.enemies =
            this.physics.add.group({
                allowGravity: true,
                immovable: false,
            })


        for (
            const enemyData of ENEMIES
            ) {

            const enemy =
                this.enemies.create(
                    enemyData.x,
                    enemyData.y,
                    'enemy',
                ) as Phaser.Physics.Arcade.Sprite


            enemy.setData(
                'minX',
                enemyData.minX,
            )

            enemy.setData(
                'maxX',
                enemyData.maxX,
            )


            enemy.setVelocityX(
                ENEMY_SPEED,
            )

            enemy.setBounce(0)

        }


        this.physics.add.collider(
            this.enemies,
            this.platforms,
        )


        this.physics.add.overlap(
            this.player,
            this.enemies,
            this.handleEnemyCollision,
            undefined,
            this,
        )

    }


    // ======================================================
    // FAST ENEMIES
    // ======================================================

    private createFastEnemies() {

        this.fastEnemies =
            this.physics.add.group({
                allowGravity: true,
                immovable: false,
            })


        for (
            const enemyData of FAST_ENEMIES
            ) {

            const enemy =
                this.fastEnemies.create(
                    enemyData.x,
                    enemyData.y,
                    'fast-enemy',
                ) as Phaser.Physics.Arcade.Sprite


            enemy.setData(
                'minX',
                enemyData.minX,
            )

            enemy.setData(
                'maxX',
                enemyData.maxX,
            )


            enemy.setVelocityX(
                FAST_ENEMY_SPEED,
            )

            enemy.setBounce(0)

        }


        this.physics.add.collider(
            this.fastEnemies,
            this.platforms,
        )


        this.physics.add.overlap(
            this.player,
            this.fastEnemies,
            this.handleEnemyCollision,
            undefined,
            this,
        )

    }


    // ======================================================
    // SPIKES
    // ======================================================

    private createSpikes() {

        this.spikes =
            this.physics.add.staticGroup()


        for (
            const spikeData of SPIKES
            ) {

            const count =
                Math.floor(
                    spikeData.width / 30,
                )


            for (
                let i = 0;
                i < count;
                i++
            ) {

                const spike =
                    this.spikes.create(
                        spikeData.x +
                        i * 30 +
                        15,

                        spikeData.y,

                        'spike',
                    ) as Phaser.Physics.Arcade.Sprite


                spike.refreshBody()

            }

        }


        this.physics.add.overlap(
            this.player,
            this.spikes,
            this.handleSpikeCollision,
            undefined,
            this,
        )

    }


    // ======================================================
    // CHECKPOINTS
    // ======================================================

    private createCheckpoint() {

        this.checkpointObjects =
            this.physics.add.staticGroup()


        for (
            const checkpoint of CHECKPOINTS
            ) {

            const flag =
                this.checkpointObjects.create(
                    checkpoint.x,
                    660,
                    'checkpoint',
                ) as Phaser.Physics.Arcade.Sprite


            flag.setOrigin(
                0.5,
                1,
            )


            flag.setData(
                'checkpointId',
                checkpoint.id,
            )


            // CP3 is locked until boss dies
            if (
                checkpoint.id === 3
            ) {

                flag.setActive(false)

                flag.setVisible(false)

                const body =
                    flag.body as Phaser.Physics.Arcade.StaticBody

                body.enable = false

            }


            flag.refreshBody()


            this.physics.add.overlap(
                this.player,
                flag,
                this.handleCheckpointCollision,
                undefined,
                this,
            )

        }

    }

    // ======================================================
    // CREATE BOSS PLATFORM
    // ======================================================

    private createBossPlatform() {

        const x =
            Phaser.Math.Between(
                BOSS_PLATFORM_MIN_X +
                BOSS_PLATFORM_WIDTH / 2,
                BOSS_PLATFORM_MAX_X -
                BOSS_PLATFORM_WIDTH / 2,
            )


        this.bossPlatform =
            this.physics.add.staticSprite(
                x,
                BOSS_PLATFORM_Y,
                'platform',
            )


        this.bossPlatform.setDisplaySize(
            BOSS_PLATFORM_WIDTH,
            BOSS_PLATFORM_HEIGHT,
        )


        this.bossPlatform.refreshBody()


        // ================================================
        // PLAYER ĐỨNG ĐƯỢC TRÊN BỆ
        // ================================================

        this.physics.add.collider(
            this.player,
            this.bossPlatform,
        )

    }

    // ======================================================
    // MOVE BOSS PLATFORM
    // ======================================================

    private moveBossPlatform() {

        if (
            !this.bossPlatform ||
            !this.bossPlatform.active
        ) {
            return
        }

        const oldX =
            this.bossPlatform.x

        const MIN_DISTANCE =
            BOSS_PLATFORM_MIN_DISTANCE

        const MAX_DISTANCE =
            BOSS_PLATFORM_MAX_DISTANCE

        let newX = oldX
        let attempts = 0

        while (
            attempts < 50
            ) {

            const candidateX =
                Phaser.Math.Between(
                    BOSS_PLATFORM_MIN_X +
                    BOSS_PLATFORM_WIDTH / 2,

                    BOSS_PLATFORM_MAX_X -
                    BOSS_PLATFORM_WIDTH / 2,
                )

            const distance =
                Math.abs(
                    candidateX -
                    oldX,
                )

            if (
                distance >= MIN_DISTANCE &&
                distance <= MAX_DISTANCE
            ) {

                newX = candidateX

                break
            }

            attempts += 1
        }

        // Fallback nếu random 50 lần
        // mà chưa tìm được vị trí phù hợp
        if (
            newX === oldX
        ) {

            const direction =
                oldX <
                (
                    BOSS_PLATFORM_MIN_X +
                    BOSS_PLATFORM_MAX_X
                ) / 2
                    ? 1
                    : -1

            newX =
                oldX +
                direction *
                MIN_DISTANCE

            newX =
                Phaser.Math.Clamp(
                    newX,

                    BOSS_PLATFORM_MIN_X +
                    BOSS_PLATFORM_WIDTH / 2,

                    BOSS_PLATFORM_MAX_X -
                    BOSS_PLATFORM_WIDTH / 2,
                )
        }

        this.bossPlatform.disableBody(
            true,
            true,
        )

        this.bossPlatform.enableBody(
            true,
            newX,
            BOSS_PLATFORM_Y,
            true,
            true,
        )

        this.bossPlatform.setDisplaySize(
            BOSS_PLATFORM_WIDTH,
            BOSS_PLATFORM_HEIGHT,
        )

        this.bossPlatform.refreshBody()
    }

    // ======================================================
    // BOSS
    // ======================================================

    private createBoss() {

        this.boss =
            this.physics.add.sprite(
                BOSS_X,
                BOSS_Y,
                'boss',
            )


        this.boss.setDisplaySize(
            BOSS_SIZE,
            BOSS_SIZE,
        )


        this.boss.setBounce(0)

        this.boss.setCollideWorldBounds(
            false,
        )


        this.boss.setData(
            'hp',
            BOSS_MAX_HP,
        )


        this.physics.add.collider(
            this.boss,
            this.platforms,
        )


        this.physics.add.overlap(
            this.player,
            this.boss,
            this.handleBossCollision,
            undefined,
            this,
        )

    }

    // ======================================================
    // BOSS UPDATE
    // ======================================================

    private updateBoss() {

        if (
            !this.bossAlive
        ) {

            return

        }


        // -----------------------------------------------
        // BOSS PATROL
        // Boss không đuổi Player
        // -----------------------------------------------

        const BOSS_LEFT_X = 11600
        const BOSS_RIGHT_X = 12800
        const BOSS_PATROL_SPEED = 55


        const bossBody =
            this.boss.body as Phaser.Physics.Arcade.Body


        // -----------------------------------------------
        // Nếu Boss đang đứng yên
        // thì bắt đầu đi sang phải
        // -----------------------------------------------

        if (
            bossBody.velocity.x === 0
        ) {

            this.boss.setVelocityX(
                BOSS_PATROL_SPEED,
            )

        }


        // -----------------------------------------------
        // CHẠM BIÊN TRÁI
        // -----------------------------------------------

        if (
            this.boss.x <=
            BOSS_LEFT_X
        ) {

            this.boss.setX(
                BOSS_LEFT_X,
            )

            this.boss.setVelocityX(
                BOSS_PATROL_SPEED,
            )

            this.boss.setFlipX(
                false,
            )

        }


            // -----------------------------------------------
            // CHẠM BIÊN PHẢI
        // -----------------------------------------------

        else if (
            this.boss.x >=
            BOSS_RIGHT_X
        ) {

            this.boss.setX(
                BOSS_RIGHT_X,
            )

            this.boss.setVelocityX(
                -BOSS_PATROL_SPEED,
            )

            this.boss.setFlipX(
                true,
            )

        }

    }

    // ======================================================
    // SPAWN BOSS MINIONS
    // ======================================================

    private spawnBossMinions() {

        if (
            !this.bossAlive
        ) {

            return

        }


        // -----------------------------------------------
        // COUNT ACTIVE MINIONS
        // -----------------------------------------------

        const activeMinions =
            this.bossMinions
                .getChildren()
                .filter(
                    object =>
                        (
                            object as Phaser.Physics.Arcade.Sprite
                        ).active,
                )


        const currentCount =
            activeMinions.length


        if (
            currentCount >=
            BOSS_MAX_MINIONS
        ) {

            return

        }


        // -----------------------------------------------
        // SPAWN 1 WAVE
        // -----------------------------------------------

        const amount =
            Math.min(
                2,
                BOSS_MAX_MINIONS -
                currentCount,
            )


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const offset =
                i === 0
                    ? -70
                    : 70


            let minion:
                Phaser.Physics.Arcade.Sprite | null =
                null


            // -------------------------------------------
            // REUSE INACTIVE MINION
            // -------------------------------------------

            const inactiveMinion =
                this.bossMinions
                    .getChildren()
                    .find(
                        object =>
                            !(
                                object as Phaser.Physics.Arcade.Sprite
                            ).active,
                    )


            if (
                inactiveMinion
            ) {

                minion =
                    inactiveMinion as Phaser.Physics.Arcade.Sprite


                minion.enableBody(
                    true,
                    this.boss.x + offset,
                    560,
                    true,
                    true,
                )


                minion.setTexture(
                    'boss-minion',
                )

            }

                // -------------------------------------------
                // CREATE NEW MINION
            // -------------------------------------------

            else if (
                this.bossMinions
                    .getChildren()
                    .length <
                BOSS_MAX_MINIONS
            ) {

                minion =
                    this.bossMinions.create(
                        this.boss.x + offset,
                        560,
                        'boss-minion',
                    ) as Phaser.Physics.Arcade.Sprite

            }


            // -------------------------------------------
            // SAFETY CHECK
            // -------------------------------------------

            if (
                !minion
            ) {

                continue

            }


            // -------------------------------------------
            // RESET MINION
            // -------------------------------------------

            minion.setActive(true)

            minion.setVisible(true)

            minion.setBounce(0)


            minion.setData(
                'spawned',
                true,
            )


            // -------------------------------------------
            // INITIAL DIRECTION
            // -------------------------------------------

            if (
                this.player.x >
                minion.x
            ) {

                minion.setVelocityX(
                    BOSS_MINION_SPEED,
                )

                minion.setFlipX(
                    false,
                )

            } else {

                minion.setVelocityX(
                    -BOSS_MINION_SPEED,
                )

                minion.setFlipX(
                    true,
                )

            }

        }


        // -----------------------------------------------
        // VISUAL WARNING
        // -----------------------------------------------

        this.cameras.main.flash(
            120,
            180,
            70,
            70,
        )

    }


    // ======================================================
    // BOSS MINIONS
    // ======================================================

    private createBossMinionGroup() {

        this.bossMinions =
            this.physics.add.group({
                allowGravity: true,
                immovable: false,
                maxSize: BOSS_MAX_MINIONS,
            })


        this.physics.add.collider(
            this.bossMinions,
            this.platforms,
        )


        this.physics.add.overlap(
            this.player,
            this.bossMinions,
            this.handleBossMinionCollision,
            undefined,
            this,
        )

    }


    // ======================================================
    // UPDATE BOSS MINIONS
    // ======================================================

    private updateBossMinions() {

        if (
            !this.bossMinions
        ) {

            return

        }


        this.bossMinions
            .getChildren()
            .forEach(
                object => {

                    const minion =
                        object as Phaser.Physics.Arcade.Sprite


                    if (
                        !minion.active
                    ) {

                        return

                    }


                    // -------------------------------------
                    // ALWAYS CHASE PLAYER
                    // -------------------------------------

                    if (
                        this.player.x >
                        minion.x
                    ) {

                        minion.setVelocityX(
                            BOSS_MINION_SPEED,
                        )

                        minion.setFlipX(
                            false,
                        )

                    } else {

                        minion.setVelocityX(
                            -BOSS_MINION_SPEED,
                        )

                        minion.setFlipX(
                            true,
                        )

                    }


                    // -------------------------------------
                    // REMOVE IF FALLS
                    // -------------------------------------

                    if (
                        minion.y >
                        GAME_HEIGHT + 150
                    ) {

                        minion.disableBody(
                            true,
                            true,
                        )

                    }

                },
            )

    }


    // ======================================================
    // GATEWAY
    // ======================================================

    private createGateway() {

        this.gateway =
            this.physics.add.staticSprite(
                CHECKPOINT_3_X,
                570,
                'gateway',
            )

        this.gateway.setDisplaySize(
            140,
            220,
        )

        this.gateway.refreshBody()

        // ================================================
        // GATEWAY COLLISION
        // Chặn player nhảy qua khi Boss còn sống
        // ================================================

        const body =
            this.gateway.body as Phaser.Physics.Arcade.StaticBody

        body.setSize(
            140,
            220,
        )

        body.setOffset(
            0,
            0,
        )

        this.gateway.refreshBody()

        this.physics.add.collider(
            this.player,
            this.gateway,
        )
    }


    // ======================================================
    // GOAL
    // ======================================================

    private createGoal() {

        this.goal =
            this.physics.add.staticSprite(
                GOAL_X,
                GOAL_Y,
                'flag',
            )


        this.goal.setOrigin(
            0.5,
            1,
        )


        this.goal.refreshBody()


        this.physics.add.overlap(
            this.player,
            this.goal,
            this.winGame,
            undefined,
            this,
        )

    }


    // ======================================================
    // INPUT
    // ======================================================

    private setupInput() {

        const keyboard =
            this.input.keyboard


        if (!keyboard) {

            throw new Error(
                'Phaser keyboard input is unavailable.',
            )

        }


        this.cursors =
            keyboard.createCursorKeys()


        this.keys = {

            left:
                keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.A,
                ),

            right:
                keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.D,
                ),

            jump:
                keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.SPACE,
                ),

            restart:
                keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.R,
                ),

            debug:
                keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.Q,
                ),

        }

    }


    // ======================================================
    // CAMERA
    // ======================================================

    private setupCamera() {

        this.physics.world.setBounds(
            0,
            0,
            WORLD_WIDTH,
            GAME_HEIGHT,
        )


        this.cameras.main.setBounds(
            0,
            0,
            WORLD_WIDTH,
            GAME_HEIGHT,
        )


        this.cameras.main.startFollow(
            this.player,
            true,
            0.08,
            0.08,
        )


        this.cameras.main.setDeadzone(
            300,
            150,
        )

    }


    // ======================================================
    // UI
    // ======================================================

    private createUI() {

        this.scoreText =
            this.add.text(
                24,
                20,
                'COINS: 0',
                {
                    fontFamily: 'Arial',
                    fontSize: '24px',
                    color: '#ffffff',
                    stroke: '#222222',
                    strokeThickness: 4,
                },
            )


        this.livesText =
            this.add.text(
                24,
                54,
                'LIVES: ❤️❤️❤️',
                {
                    fontFamily: 'Arial',
                    fontSize: '22px',
                    color: '#ffffff',
                    stroke: '#222222',
                    strokeThickness: 4,
                },
            )


        this.zoneText =
            this.add.text(
                GAME_WIDTH / 2,
                20,
                'STARTER ZONE',
                {
                    fontFamily: 'Arial',
                    fontSize: '22px',
                    color: '#ffffff',
                    stroke: '#222222',
                    strokeThickness: 4,
                },
            )


        this.zoneText.setOrigin(
            0.5,
            0,
        )


        this.coordinateText =
            this.add
                .text(
                    20,
                    110,
                    '',
                    {
                        fontSize: '18px',
                        color: '#ffffff',
                        backgroundColor: '#000000',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 8,
                            bottom: 8,
                        },
                    },
                )
                .setScrollFactor(0)
                .setDepth(100)
                .setVisible(false)


        this.add.text(
            GAME_WIDTH - 24,
            20,
            'LEVEL 1',
            {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff',
                stroke: '#222222',
                strokeThickness: 4,
            },
        ).setOrigin(
            1,
            0,
        )


        this.messageText =
            this.add.text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2,
                '',
                {
                    fontFamily: 'Arial',
                    fontSize: '52px',
                    color: '#ffffff',
                    stroke: '#222222',
                    strokeThickness: 6,
                    align: 'center',
                },
            )


        this.messageText.setOrigin(0.5)

        this.messageText.setScrollFactor(0)

        this.scoreText.setScrollFactor(0)

        this.livesText.setScrollFactor(0)

        this.zoneText.setScrollFactor(0)

        this.messageText.setVisible(false)


        // Boss HP
        this.bossHpText =
            this.add.text(
                GAME_WIDTH / 2,
                80,
                '',
                {
                    fontFamily: 'Arial',
                    fontSize: '22px',
                    color: '#ff7070',
                    stroke: '#222222',
                    strokeThickness: 4,
                },
            )


        this.bossHpText.setOrigin(
            0.5,
            0,
        )

        this.bossHpText.setScrollFactor(0)

        this.bossHpText.setVisible(false)

    }


    // ======================================================
    // PLAYER UPDATE
    // ======================================================

    private updatePlayer() {

        const left =
            this.cursors.left.isDown ||
            this.keys.left.isDown


        const right =
            this.cursors.right.isDown ||
            this.keys.right.isDown


        if (left) {

            this.player.setVelocityX(
                -PLAYER_SPEED,
            )

            this.player.setFlipX(true)

        } else if (right) {

            this.player.setVelocityX(
                PLAYER_SPEED,
            )

            this.player.setFlipX(false)

        } else {

            this.player.setVelocityX(0)

        }


        const jumpPressed =
            Phaser.Input.Keyboard.JustDown(
                this.cursors.up,
            ) ||
            Phaser.Input.Keyboard.JustDown(
                this.keys.jump,
            )


        const body =
            this.player.body as Phaser.Physics.Arcade.Body


        if (
            jumpPressed &&
            body.blocked.down
        ) {

            this.player.setVelocityY(
                JUMP_VELOCITY,
            )

        }

    }


    // ======================================================
    // ENEMY UPDATE
    // ======================================================

    private updateEnemies(
        group:
        Phaser.Physics.Arcade.Group,
        speed: number,
    ) {

        const enemies =
            group.getChildren()


        enemies.forEach(
            enemyObject => {

                const enemy =
                    enemyObject as Phaser.Physics.Arcade.Sprite


                if (
                    !enemy.active
                ) {

                    return

                }


                const minX =
                    enemy.getData(
                        'minX',
                    ) as number


                const maxX =
                    enemy.getData(
                        'maxX',
                    ) as number


                if (
                    enemy.x <= minX
                ) {

                    enemy.setX(minX)

                    enemy.setVelocityX(
                        speed,
                    )

                    enemy.setFlipX(false)

                }


                if (
                    enemy.x >= maxX
                ) {

                    enemy.setX(maxX)

                    enemy.setVelocityX(
                        -speed,
                    )

                    enemy.setFlipX(true)

                }

            },
        )

    }


    // ======================================================
    // CHECKPOINT UPDATE
    // ======================================================

    private updateCheckpoints() {

        // CP1
        if (
            this.currentCheckpoint < 1 &&
            this.player.x >= CHECKPOINT_1_X
        ) {

            this.activateCheckpoint(1)

        }


        // CP2
        if (
            this.currentCheckpoint < 2 &&
            this.player.x >= CHECKPOINT_2_X
        ) {

            this.activateCheckpoint(2)

        }


        // CP3 only after boss
        if (
            this.gatewayOpen &&
            this.currentCheckpoint < 3 &&
            this.player.x >= CHECKPOINT_3_X
        ) {

            this.activateCheckpoint(3)

        }

    }


    // ======================================================
    // ZONE
    // ======================================================

    private updateZone() {

        if (
            this.player.x < 5000
        ) {

            this.zoneText.setText(
                'STARTER ZONE',
            )

            this.bossHpText.setVisible(
                false,
            )

        } else if (
            this.player.x < 10000
        ) {

            this.zoneText.setText(
                'CHALLENGE ZONE',
            )

            this.bossHpText.setVisible(
                false,
            )

        } else if (
            this.player.x < 11500
        ) {

            this.zoneText.setText(
                'DARK FRONTIER',
            )

            this.bossHpText.setVisible(
                false,
            )

        } else if (
            this.player.x < 13000
        ) {

            this.zoneText.setText(
                'BOSS ARENA',
            )

            if (
                this.bossAlive
            ) {

                this.bossHpText.setVisible(
                    true,
                )

                this.bossHpText.setText(
                    `BOSS HP: ${this.bossHp} / ${BOSS_MAX_HP}`,
                )

            } else {

                this.bossHpText.setVisible(
                    false,
                )

            }

        } else {

            this.zoneText.setText(
                'FINAL GAUNTLET',
            )

            this.bossHpText.setVisible(
                false,
            )

        }

    }


    // ======================================================
    // COIN
    // ======================================================

    private collectCoin(
        _player:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,

        coin:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,
    ) {

        const coinSprite =
            coin as Phaser.Physics.Arcade.Sprite


        if (
            !coinSprite.active
        ) {

            return

        }


        coinSprite.disableBody(
            true,
            true,
        )


        this.score += 1


        this.scoreText.setText(
            `COINS: ${this.score}`,
        )

    }


    // ======================================================
    // NORMAL ENEMY COLLISION
    // ======================================================

    private handleEnemyCollision(
        playerObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,

        enemyObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,
    ) {

        if (
            this.isRespawning ||
            this.isGameOver ||
            this.isWon
        ) {

            return

        }


        const player =
            playerObject as Phaser.Physics.Arcade.Sprite


        const enemy =
            enemyObject as Phaser.Physics.Arcade.Sprite


        if (
            !enemy.active
        ) {

            return

        }


        const playerBody =
            player.body as Phaser.Physics.Arcade.Body


        // Jump on enemy
        if (
            playerBody.velocity.y > 0 &&
            player.y < enemy.y - 8
        ) {

            enemy.disableBody(
                true,
                true,
            )


            player.setVelocityY(
                JUMP_VELOCITY * 0.65,
            )


            this.score += 2


            this.scoreText.setText(
                `COINS: ${this.score}`,
            )


            return

        }


        this.loseLife()

    }


    // ======================================================
    // BOSS COLLISION
    // ======================================================

    private handleBossCollision(
        playerObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,

        bossObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,
    ) {

        if (
            !this.bossAlive ||
            this.isRespawning ||
            this.isGameOver ||
            this.isWon
        ) {

            return

        }


        // Đang trong thời gian bảo vệ sau khi dẫm Boss
        if (
            this.bossStompProtection
        ) {

            return

        }


        const player =
            playerObject as Phaser.Physics.Arcade.Sprite


        const boss =
            bossObject as Phaser.Physics.Arcade.Sprite


        if (
            !boss.active
        ) {

            return

        }


        const playerBody =
            player.body as Phaser.Physics.Arcade.Body


        // ==================================================
        // PLAYER STOMPS BOSS
        // ==================================================

        if (
            playerBody.velocity.y > 0 &&
            player.y < boss.y - 45
        ) {

            // Boss mất máu + tung đệ
            this.damageBoss()


            // Bounce player
            player.setVelocityY(
                JUMP_VELOCITY * 0.75,
            )


            // Bảo vệ player khỏi bị tính là side hit
            this.bossStompProtection = true


            this.time.delayedCall(
                250,
                () => {

                    this.bossStompProtection = false

                },
            )


            return

        }


        // ==================================================
        // SIDE HIT
        // ==================================================

        this.loseLife()

    }


    // ======================================================
    // DAMAGE BOSS
    // ======================================================

    private damageBoss() {

        if (
            !this.bossAlive
        ) {

            return

        }


        if (
            this.time.now -
            this.bossLastHitTime <
            BOSS_HIT_COOLDOWN
        ) {

            return

        }


        this.bossLastHitTime =
            this.time.now


        this.bossHp -= 1


        // ==================================================
        // BOSS TUNG SKILL
        // 1 LẦN DẪM BOSS = 1 LẦN SPAWN ĐỆ
        // 1 LẦN DẪM BOSS + ĐỔI BỆ
        // ==================================================

        if (
            this.bossHp > 0
        ) {

            this.spawnBossMinions()
            this.moveBossPlatform()

        }


        this.boss.setTint(
            0xffffff,
        )


        this.time.delayedCall(
            120,
            () => {

                if (
                    this.boss.active
                ) {

                    this.boss.clearTint()

                }

            },
        )


        this.cameras.main.flash(
            100,
            255,
            255,
            255,
        )


        this.score += 5


        this.scoreText.setText(
            `COINS: ${this.score}`,
        )


        if (
            this.bossHp <= 0
        ) {

            this.killBoss()

        }

    }



    // ======================================================
    // KILL BOSS
    // ======================================================

    private killBoss() {

        if (
            !this.bossAlive
        ) {

            return

        }


        this.bossAlive = false

        this.bossHp = 0


        this.boss.setVelocity(
            0,
            0,
        )


        this.boss.disableBody(
            true,
            true,
        )


        // Remove all boss minions
        this.bossMinions
            .getChildren()
            .forEach(
                object => {

                    const minion =
                        object as Phaser.Physics.Arcade.Sprite

                    minion.disableBody(
                        true,
                        true,
                    )

                },
            )


        this.openGateway()


        this.messageText.setText(
            'BOSS DEFEATED!\n\nGATEWAY OPEN!',
        )


        this.messageText.setVisible(
            true,
        )


        this.cameras.main.shake(
            350,
            0.015,
        )


        this.time.delayedCall(
            1800,
            () => {

                if (
                    !this.isGameOver &&
                    !this.isWon
                ) {

                    this.messageText.setVisible(
                        false,
                    )

                }

            },
        )

    }


    // ======================================================
    // OPEN GATEWAY
    // ======================================================

    private openGateway() {

        if (
            this.gatewayOpen
        ) {

            return

        }


        this.gatewayOpen = true


        this.gateway.disableBody(
            true,
            true,
        )


        // Activate Checkpoint 3
        const checkpoint =
            this.checkpointObjects
                .getChildren()
                .find(
                    object =>
                        (
                            object as Phaser.Physics.Arcade.Sprite
                        ).getData('checkpointId') === 3,
                ) as
                | Phaser.Physics.Arcade.Sprite
                | undefined


        if (
            checkpoint
        ) {

            checkpoint.setActive(true)

            checkpoint.setVisible(true)

            const body =
                checkpoint.body as Phaser.Physics.Arcade.StaticBody

            body.enable = true

            checkpoint.refreshBody()

        }

    }


    // ======================================================
    // BOSS MINION COLLISION
    // ======================================================

    private handleBossMinionCollision(
        _playerObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,

        minionObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,
    ) {

        if (
            this.isRespawning ||
            this.isGameOver ||
            this.isWon
        ) {

            return

        }


        const minion =
            minionObject as Phaser.Physics.Arcade.Sprite


        if (
            !minion.active
        ) {

            return

        }


        const playerBody =
            this.player.body as Phaser.Physics.Arcade.Body


        // Player can stomp minion
        if (
            playerBody.velocity.y > 0 &&
            this.player.y < minion.y - 8
        ) {

            minion.disableBody(
                true,
                true,
            )


            this.player.setVelocityY(
                JUMP_VELOCITY * 0.65,
            )


            this.score += 3


            this.scoreText.setText(
                `COINS: ${this.score}`,
            )


            return

        }


        // Minion hits player
        this.loseLife()

    }


    // ======================================================
    // SPIKE COLLISION
    // ======================================================

    private handleSpikeCollision() {

        if (
            this.isRespawning ||
            this.isGameOver ||
            this.isWon
        ) {

            return

        }


        this.loseLife()

    }


    // ======================================================
    // CHECKPOINT COLLISION
    // ======================================================

    private handleCheckpointCollision(
        _playerObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,

        checkpointObject:
        Phaser.Types.Physics.Arcade.GameObjectWithBody,
    ) {

        const checkpoint =
            checkpointObject as Phaser.Physics.Arcade.Sprite


        const id =
            checkpoint.getData(
                'checkpointId',
            ) as number


        if (
            id <= this.currentCheckpoint
        ) {

            return

        }


        // CP3 only works after boss
        if (
            id === 3 &&
            !this.gatewayOpen
        ) {

            return

        }


        this.activateCheckpoint(id)

    }


    // ======================================================
    // ACTIVATE CHECKPOINT
    // ======================================================

    private activateCheckpoint(
        id: number,
    ) {

        if (
            id <= this.currentCheckpoint
        ) {

            return

        }


        let checkpointX = 80


        if (
            id === 1
        ) {

            checkpointX =
                CHECKPOINT_1_X + 60

        }


        if (
            id === 2
        ) {

            checkpointX =
                CHECKPOINT_2_X + 60

        }


        if (
            id === 3
        ) {

            checkpointX =
                CHECKPOINT_3_X + 100

        }


        this.currentCheckpoint =
            id


        this.checkpointReached =
            true


        this.checkpointX =
            checkpointX


        this.checkpointY =
            CHECKPOINT_Y


        if (
            id === 1
        ) {

            this.zoneText.setText(
                'CHALLENGE ZONE',
            )

            this.messageText.setText(
                'CHECKPOINT 1!\n\nThe challenge begins...',
            )

        }


        if (
            id === 2
        ) {

            this.zoneText.setText(
                'DARK FRONTIER',
            )

            this.messageText.setText(
                'CHECKPOINT 2!\n\nSomething powerful is ahead...',
            )

        }


        if (
            id === 3
        ) {

            this.zoneText.setText(
                'FINAL GAUNTLET',
            )

            this.messageText.setText(
                'CHECKPOINT 3!\n\nThe final challenge begins!',
            )

        }


        this.messageText.setVisible(
            true,
        )


        this.cameras.main.flash(
            350,
            80,
            220,
            180,
        )


        this.time.delayedCall(
            1400,
            () => {

                if (
                    !this.isGameOver &&
                    !this.isWon
                ) {

                    this.messageText.setVisible(
                        false,
                    )

                }

            },
        )

    }


    // ======================================================
    // LIFE
    // ======================================================

    private loseLife() {

        if (
            this.isRespawning ||
            this.isGameOver ||
            this.isWon
        ) {

            return

        }


        this.isRespawning = true


        this.lives -= 1


        this.updateLivesText()


        // ------------------------------------------------
        // GAME OVER
        // ------------------------------------------------

        if (
            this.lives <= 0
        ) {

            this.gameOver()

            return

        }


        // ------------------------------------------------
        // PLAYER
        // ------------------------------------------------

        this.player.setVelocity(
            0,
            0,
        )


        this.player.setPosition(
            this.checkpointX,
            this.checkpointY,
        )


        this.player.setAcceleration(
            0,
            0,
        )


        this.player.setActive(true)

        this.player.setVisible(true)


        const playerBody =
            this.player.body as Phaser.Physics.Arcade.Body

        playerBody.enable = true


        // ------------------------------------------------
        // CAMERA
        // ------------------------------------------------

        this.cameras.main.flash(
            250,
            255,
            80,
            80,
        )


        this.cameras.main.stopFollow()


        this.cameras.main.setScroll(
            Math.max(
                0,
                this.checkpointX -
                GAME_WIDTH / 2,
            ),
            0,
        )


        this.cameras.main.startFollow(
            this.player,
            true,
            0.08,
            0.08,
        )


        // ------------------------------------------------
        // RESPAWN DELAY
        // ------------------------------------------------

        this.time.delayedCall(
            700,
            () => {

                if (
                    !this.isGameOver &&
                    !this.isWon
                ) {

                    this.isRespawning = false

                }

            },
        )

    }


    // ======================================================
    // UPDATE LIVES
    // ======================================================

    private updateLivesText() {

        const hearts =
            '❤️'.repeat(
                this.lives,
            )


        this.livesText.setText(
            `LIVES: ${hearts || '0'}`,
        )

    }


    // ======================================================
    // RESTART
    // ======================================================

    private restartLevel() {

        // ------------------------------------------------
        // RESET GAME STATE
        // ------------------------------------------------

        this.score = 0

        this.lives = 3

        this.checkpointX = 80

        this.checkpointY = 600

        this.checkpointReached = false

        this.currentCheckpoint = 0

        this.isGameOver = false

        this.isWon = false

        this.isRespawning = false

        this.bossStompProtection = false


        // ------------------------------------------------
        // RESET BOSS
        // ------------------------------------------------

        this.bossHp =
            BOSS_MAX_HP

        this.bossAlive = true

        this.gatewayOpen = false

        this.bossLastHitTime =
            this.time.now


        // ------------------------------------------------
        // RESET UI
        // ------------------------------------------------

        this.scoreText.setText(
            'COINS: 0',
        )

        this.updateLivesText()

        this.zoneText.setText(
            'STARTER ZONE',
        )

        this.messageText.setVisible(
            false,
        )

        this.bossHpText.setVisible(
            false,
        )


        // ------------------------------------------------
        // RESET PLAYER
        // ------------------------------------------------

        this.player.setActive(true)

        this.player.setVisible(true)

        this.player.setPosition(
            80,
            600,
        )

        this.player.setVelocity(
            0,
            0,
        )

        this.player.setAcceleration(
            0,
            0,
        )

        this.player.setFlipX(false)


        const playerBody =
            this.player.body as Phaser.Physics.Arcade.Body

        playerBody.enable = true


        // ------------------------------------------------
        // RESET COINS
        // ------------------------------------------------

        this.coins
            .getChildren()
            .forEach(
                (object, index) => {

                    const coin =
                        object as Phaser.Physics.Arcade.Sprite


                    const data =
                        COINS[index]


                    if (
                        !data
                    ) {

                        return

                    }


                    coin.enableBody(
                        true,
                        data.x,
                        data.y,
                        true,
                        true,
                    )


                    coin.setActive(true)

                    coin.setVisible(true)

                    coin.setVelocity(
                        0,
                        0,
                    )

                },
            )


        // ------------------------------------------------
        // RESET NORMAL ENEMIES
        // ------------------------------------------------

        this.enemies
            .getChildren()
            .forEach(
                (object, index) => {

                    const enemy =
                        object as Phaser.Physics.Arcade.Sprite


                    const data =
                        ENEMIES[index]


                    if (
                        !data
                    ) {

                        return

                    }


                    enemy.enableBody(
                        true,
                        data.x,
                        data.y,
                        true,
                        true,
                    )


                    enemy.setActive(true)

                    enemy.setVisible(true)

                    enemy.setVelocity(
                        ENEMY_SPEED,
                        0,
                    )

                    enemy.setAcceleration(
                        0,
                        0,
                    )

                    enemy.setFlipX(false)


                    enemy.setData(
                        'minX',
                        data.minX,
                    )

                    enemy.setData(
                        'maxX',
                        data.maxX,
                    )

                },
            )


        // ------------------------------------------------
        // RESET FAST ENEMIES
        // ------------------------------------------------

        this.fastEnemies
            .getChildren()
            .forEach(
                (object, index) => {

                    const enemy =
                        object as Phaser.Physics.Arcade.Sprite


                    const data =
                        FAST_ENEMIES[index]


                    if (
                        !data
                    ) {

                        return

                    }


                    enemy.enableBody(
                        true,
                        data.x,
                        data.y,
                        true,
                        true,
                    )


                    enemy.setActive(true)

                    enemy.setVisible(true)

                    enemy.setVelocity(
                        FAST_ENEMY_SPEED,
                        0,
                    )

                    enemy.setAcceleration(
                        0,
                        0,
                    )

                    enemy.setFlipX(false)


                    enemy.setData(
                        'minX',
                        data.minX,
                    )

                    enemy.setData(
                        'maxX',
                        data.maxX,
                    )

                },
            )


        // ------------------------------------------------
        // RESET BOSS
        // ------------------------------------------------

        this.boss.enableBody(
            true,
            BOSS_X,
            BOSS_Y,
            true,
            true,
        )


        this.boss.setActive(true)

        this.boss.setVisible(true)

        this.boss.setVelocity(
            0,
            0,
        )

        this.boss.setAcceleration(
            0,
            0,
        )

        this.boss.clearTint()


        // ------------------------------------------------
        // RESET BOSS MINIONS
        // ------------------------------------------------

        if (
            this.bossMinions
        ) {

            this.bossMinions
                .getChildren()
                .forEach(
                    object => {

                        const minion =
                            object as Phaser.Physics.Arcade.Sprite

                        minion.disableBody(
                            true,
                            true,
                        )

                    },
                )

        }


        // ------------------------------------------------
        // RESET GATEWAY
        // ------------------------------------------------

        this.gateway.setActive(true)

        this.gateway.setVisible(true)

        this.gateway.enableBody(
            false,
            CHECKPOINT_3_X,
            570,
            true,
            true,
        )

        this.gateway.refreshBody()


        // ------------------------------------------------
        // RESET CHECKPOINTS
        // ------------------------------------------------

        this.checkpointObjects
            .getChildren()
            .forEach(
                object => {

                    const checkpoint =
                        object as Phaser.Physics.Arcade.Sprite


                    const id =
                        checkpoint.getData(
                            'checkpointId',
                        ) as number


                    checkpoint.setActive(
                        id !== 3,
                    )

                    checkpoint.setVisible(
                        id !== 3,
                    )


                    const body =
                        checkpoint.body as Phaser.Physics.Arcade.StaticBody


                    body.enable =
                        id !== 3


                    checkpoint.refreshBody()

                },
            )


        // ------------------------------------------------
        // RESET CAMERA
        // ------------------------------------------------

        this.cameras.main.stopFollow()

        this.cameras.main.setScroll(
            0,
            0,
        )

        this.cameras.main.startFollow(
            this.player,
            true,
            0.08,
            0.08,
        )


        // ------------------------------------------------
        // RESET KEY STATES
        //
        // DO NOT:
        // scene.restart()
        // removeAllKeys()
        // ------------------------------------------------

        this.keys.left.reset()

        this.keys.right.reset()

        this.keys.jump.reset()

        this.keys.restart.reset()

        this.keys.debug.reset()

        this.cursors.left.reset()

        this.cursors.right.reset()

        this.cursors.up.reset()

        this.cursors.down.reset()

    }


    // ======================================================
    // GAME OVER
    // ======================================================

    private gameOver() {

        this.isGameOver = true

        this.isRespawning = false


        this.player.setVelocity(
            0,
            0,
        )


        this.messageText.setText(
            `GAME OVER\n\nPress R to restart`,
        )


        this.messageText.setVisible(
            true,
        )

    }


    // ======================================================
    // WIN
    // ======================================================

    private winGame() {

        if (
            this.isWon ||
            this.isGameOver ||
            !this.gatewayOpen
        ) {

            return

        }


        this.isWon = true


        this.player.setVelocity(
            0,
            0,
        )


        this.messageText.setText(
            `LEVEL 1 COMPLETE!\n\nPress R to play again`,
        )


        this.messageText.setVisible(
            true,
        )

    }

}