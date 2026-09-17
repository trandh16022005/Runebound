import Phaser from 'phaser'

export interface PauseMenuCallbacks {
    onResume: () => void
    onRestart: () => void
    onMainMenu: () => void
}

export class PauseMenu {

    private scene: Phaser.Scene

    private callbacks: PauseMenuCallbacks

    private container!: Phaser.GameObjects.Container

    private escKey!: Phaser.Input.Keyboard.Key

    private opened = false


    constructor(
        scene: Phaser.Scene,
        callbacks: PauseMenuCallbacks,
    ) {

        this.scene = scene

        this.callbacks = callbacks

        this.create()

        this.setupKeyboard()
    }


    // ======================================================
    // CREATE
    // ======================================================

    private create() {

        const width =
            this.scene.scale.width

        const height =
            this.scene.scale.height


        // --------------------------------------------------
        // DARK BACKGROUND
        // --------------------------------------------------

        const overlay =
            this.scene.add.rectangle(
                width / 2,
                height / 2,
                width,
                height,
                0x05070d,
                0.78,
            )

        overlay.setInteractive()


        // --------------------------------------------------
        // PANEL SHADOW
        // --------------------------------------------------

        const shadow =
            this.scene.add.rectangle(
                width / 2 + 8,
                height / 2 + 10,
                470,
                500,
                0x000000,
                0.55,
            )


        // --------------------------------------------------
        // PANEL OUTER
        // --------------------------------------------------

        const outerPanel =
            this.scene.add.rectangle(
                width / 2,
                height / 2,
                470,
                500,
                0x090d18,
                1,
            )

        outerPanel.setStrokeStyle(
            3,
            0xc9a227,
            0.85,
        )


        // --------------------------------------------------
        // PANEL INNER
        // --------------------------------------------------

        const innerPanel =
            this.scene.add.rectangle(
                width / 2,
                height / 2,
                450,
                480,
                0x111827,
                1,
            )

        innerPanel.setStrokeStyle(
            1,
            0xffffff,
            0.08,
        )


        // --------------------------------------------------
        // TOP DECORATION
        // --------------------------------------------------

        const topLine =
            this.scene.add.rectangle(
                width / 2,
                height / 2 - 190,
                300,
                2,
                0xc9a227,
                0.8,
            )


        const topDiamond =
            this.scene.add.polygon(
                width / 2,
                height / 2 - 190,
                [
                    0, -7,
                    7, 0,
                    0, 7,
                    -7, 0,
                ],
                0xc9a227,
                1,
            )


        // --------------------------------------------------
        // TITLE
        // --------------------------------------------------

        const title =
            this.scene.add.text(
                width / 2,
                height / 2 - 150,
                'PAUSED',
                {
                    fontFamily: 'Georgia, serif',
                    fontSize: '52px',
                    fontStyle: 'bold',
                    color: '#f5df9b',
                    stroke: '#000000',
                    strokeThickness: 5,
                },
            )

        title.setOrigin(0.5)


        // --------------------------------------------------
        // SUBTITLE
        // --------------------------------------------------

        const subtitle =
            this.scene.add.text(
                width / 2,
                height / 2 - 105,
                'THE JOURNEY AWAITS',
                {
                    fontFamily: 'Arial',
                    fontSize: '12px',
                    fontStyle: 'bold',
                    color: '#8f9bb3',
                    letterSpacing: 3,
                },
            )

        subtitle.setOrigin(0.5)


        // --------------------------------------------------
        // BUTTONS
        // --------------------------------------------------

        const resumeButton =
            this.createButton(
                width / 2,
                height / 2 - 40,
                'RESUME',
                () => {

                    this.close()

                    this.callbacks.onResume()
                },
                true,
            )


        const restartButton =
            this.createButton(
                width / 2,
                height / 2 + 35,
                'RESTART',
                () => {

                    this.close()

                    this.callbacks.onRestart()
                },
            )


        const mainMenuButton =
            this.createButton(
                width / 2,
                height / 2 + 110,
                'MAIN MENU',
                () => {

                    this.close()

                    this.callbacks.onMainMenu()
                },
            )


        // --------------------------------------------------
        // BOTTOM DECORATION
        // --------------------------------------------------

        const bottomLine =
            this.scene.add.rectangle(
                width / 2,
                height / 2 + 158,
                220,
                1,
                0xc9a227,
                0.35,
            )


        // --------------------------------------------------
        // ESC HINT
        // --------------------------------------------------

        const hint =
            this.scene.add.text(
                width / 2,
                height / 2 + 183,
                'ESC  •  RESUME',
                {
                    fontFamily: 'Arial',
                    fontSize: '13px',
                    fontStyle: 'bold',
                    color: '#707b91',
                },
            )

        hint.setOrigin(0.5)


        // --------------------------------------------------
        // CONTAINER
        // --------------------------------------------------

        this.container =
            this.scene.add.container(
                0,
                0,
                [
                    overlay,
                    shadow,
                    outerPanel,
                    innerPanel,

                    topLine,
                    topDiamond,

                    title,
                    subtitle,

                    resumeButton,
                    restartButton,
                    mainMenuButton,

                    bottomLine,
                    hint,
                ],
            )


        this.container.setDepth(1000)

        this.container.setScrollFactor(0)

        this.container.setVisible(false)
    }


    // ======================================================
    // BUTTON
    // ======================================================

    private createButton(
        x: number,
        y: number,
        text: string,
        callback: () => void,
        highlighted = false,
    ) {

        const normalColor =
            highlighted
                ? 0x473b1b
                : 0x1a2233

        const hoverColor =
            highlighted
                ? 0x6b5720
                : 0x29354d


        // --------------------------------------------------
        // BUTTON SHADOW
        // --------------------------------------------------

        const shadow =
            this.scene.add.rectangle(
                x + 4,
                y + 5,
                310,
                58,
                0x000000,
                0.45,
            )


        // --------------------------------------------------
        // BUTTON
        // --------------------------------------------------

        const button =
            this.scene.add.rectangle(
                x,
                y,
                310,
                58,
                normalColor,
                1,
            )


        button.setStrokeStyle(
            highlighted ? 2 : 1,
            highlighted
                ? 0xc9a227
                : 0x66728a,
            highlighted ? 0.9 : 0.45,
        )


        button.setInteractive({
            useHandCursor: true,
        })


        // --------------------------------------------------
        // LEFT DECORATION
        // --------------------------------------------------

        const leftDecoration =
            this.scene.add.rectangle(
                x - 145,
                y,
                4,
                28,
                highlighted
                    ? 0xc9a227
                    : 0x56647d,
                1,
            )


        // --------------------------------------------------
        // RIGHT DECORATION
        // --------------------------------------------------

        const rightDecoration =
            this.scene.add.rectangle(
                x + 145,
                y,
                4,
                28,
                highlighted
                    ? 0xc9a227
                    : 0x56647d,
                1,
            )


        // --------------------------------------------------
        // LABEL
        // --------------------------------------------------

        const label =
            this.scene.add.text(
                x,
                y,
                text,
                {
                    fontFamily: 'Arial',
                    fontSize: '18px',
                    fontStyle: 'bold',
                    color: highlighted
                        ? '#f5df9b'
                        : '#e8edf5',
                },
            )

        label.setOrigin(0.5)


        // --------------------------------------------------
        // HOVER
        // --------------------------------------------------

        button.on(
            'pointerover',
            () => {

                button.setFillStyle(
                    hoverColor,
                    1,
                )

                button.setStrokeStyle(
                    2,
                    0xc9a227,
                    0.85,
                )

                label.setColor(
                    '#f5df9b',
                )

                leftDecoration.setFillStyle(
                    0xc9a227,
                    1,
                )

                rightDecoration.setFillStyle(
                    0xc9a227,
                    1,
                )

                this.scene.tweens.add({
                    targets: [
                        button,
                        label,
                        leftDecoration,
                        rightDecoration,
                    ],
                    scaleX: 1.02,
                    scaleY: 1.02,
                    duration: 100,
                    ease: 'Quad.easeOut',
                })
            },
        )


        // --------------------------------------------------
        // HOVER OUT
        // --------------------------------------------------

        button.on(
            'pointerout',
            () => {

                button.setFillStyle(
                    normalColor,
                    1,
                )

                button.setStrokeStyle(
                    highlighted ? 2 : 1,
                    highlighted
                        ? 0xc9a227
                        : 0x66728a,
                    highlighted ? 0.9 : 0.45,
                )

                label.setColor(
                    highlighted
                        ? '#f5df9b'
                        : '#e8edf5',
                )

                leftDecoration.setFillStyle(
                    highlighted
                        ? 0xc9a227
                        : 0x56647d,
                    1,
                )

                rightDecoration.setFillStyle(
                    highlighted
                        ? 0xc9a227
                        : 0x56647d,
                    1,
                )

                this.scene.tweens.add({
                    targets: [
                        button,
                        label,
                        leftDecoration,
                        rightDecoration,
                    ],
                    scaleX: 1,
                    scaleY: 1,
                    duration: 100,
                    ease: 'Quad.easeOut',
                })
            },
        )


        // --------------------------------------------------
        // CLICK
        // --------------------------------------------------

        button.on(
            'pointerdown',
            callback,
        )


        return this.scene.add.container(
            0,
            0,
            [
                shadow,
                button,
                leftDecoration,
                rightDecoration,
                label,
            ],
        )
    }


    // ======================================================
    // KEYBOARD
    // ======================================================

    private setupKeyboard() {

        const keyboard =
            this.scene.input.keyboard

        if (!keyboard) {
            return
        }


        this.escKey =
            keyboard.addKey(
                Phaser.Input.Keyboard.KeyCodes.ESC,
            )


        this.escKey.on(
            'down',
            () => {

                this.toggle()
            },
        )
    }


    // ======================================================
    // OPEN
    // ======================================================

    open() {

        if (this.opened) {
            return
        }


        this.opened = true

        this.container.setVisible(true)


        this.scene.physics.pause()

        this.scene.time.paused = true
    }


    // ======================================================
    // CLOSE
    // ======================================================

    close() {

        if (!this.opened) {
            return
        }


        this.opened = false

        this.container.setVisible(false)


        this.scene.time.paused = false

        this.scene.physics.resume()
    }


    // ======================================================
    // TOGGLE
    // ======================================================

    toggle() {

        if (this.opened) {
            this.close()
        }
        else {
            this.open()
        }
    }


    // ======================================================
    // STATE
    // ======================================================

    isOpen() {

        return this.opened
    }


    // ======================================================
    // DESTROY
    // ======================================================

    destroy() {

        if (this.escKey) {

            this.escKey.removeAllListeners()
        }


        if (this.container) {

            this.container.destroy(
                true,
            )
        }
    }
}