import Phaser from 'phaser'

export interface ResultMenuCallbacks {
    onRetry: () => void
    onMainMenu: () => void
    onContinue: () => void
}

type ResultType = 'game-over' | 'level-complete'

export class ResultMenu {
    private scene: Phaser.Scene
    private callbacks: ResultMenuCallbacks

    private container!: Phaser.GameObjects.Container

    private titleText!: Phaser.GameObjects.Text
    private subtitleText!: Phaser.GameObjects.Text
    private detailText!: Phaser.GameObjects.Text

    private retryButton!: Phaser.GameObjects.Container
    private continueButton!: Phaser.GameObjects.Container
    private mainMenuButton!: Phaser.GameObjects.Container

    private visible = false
    private actionLocked = false

    constructor(
        scene: Phaser.Scene,
        callbacks: ResultMenuCallbacks,
    ) {
        this.scene = scene
        this.callbacks = callbacks
        this.create()
    }

    // ======================================================
    // CREATE
    // ======================================================

    private create(): void {
        const width = this.scene.scale.width
        const height = this.scene.scale.height

        const centerX = width / 2
        const centerY = height / 2

        const panelWidth = Math.min(500, width - 32)
        const panelHeight = Math.min(490, height - 32)

        const elements: Phaser.GameObjects.GameObject[] = []

        // DARK OVERLAY
        const overlay = this.scene.add.rectangle(
            centerX,
            centerY,
            width,
            height,
            0x03050b,
            0.86,
        )

        // Chặn tương tác xuyên qua lớp phủ.
        overlay.setInteractive()

        elements.push(overlay)

        // PANEL SHADOW
        const shadow = this.scene.add.rectangle(
            centerX + 8,
            centerY + 10,
            panelWidth,
            panelHeight,
            0x000000,
            0.65,
        )

        elements.push(shadow)

        // OUTER PANEL
        const outerPanel = this.scene.add.rectangle(
            centerX,
            centerY,
            panelWidth,
            panelHeight,
            0x090d18,
            1,
        )

        outerPanel.setStrokeStyle(3, 0xc9a227, 0.95)
        elements.push(outerPanel)

        // INNER PANEL
        const innerPanel = this.scene.add.rectangle(
            centerX,
            centerY,
            panelWidth - 16,
            panelHeight - 16,
            0x111827,
            1,
        )

        innerPanel.setStrokeStyle(1, 0xffffff, 0.08)
        elements.push(innerPanel)

        // DECORATIVE LINES
        const topY = centerY - panelHeight / 2 + 32
        const bottomY = centerY + panelHeight / 2 - 28
        const lineWidth = Math.min(300, panelWidth - 80)

        const topLine = this.scene.add.rectangle(
            centerX, topY, lineWidth, 2, 0xc9a227, 0.85,
        )

        const bottomLine = this.scene.add.rectangle(
            centerX, bottomY, lineWidth, 2, 0xc9a227, 0.65,
        )

        const topDiamond = this.scene.add.polygon(
            centerX,
            topY,
            [0, -7, 7, 0, 0, 7, -7, 0],
            0xc9a227,
            1,
        )

        const bottomDiamond = this.scene.add.polygon(
            centerX,
            bottomY,
            [0, -6, 6, 0, 0, 6, -6, 0],
            0xc9a227,
            1,
        )

        elements.push(topLine, bottomLine, topDiamond, bottomDiamond)

        // DECORATIVE EMBLEM
        const emblemY = centerY - panelHeight / 2 + 78

        const emblemOuter = this.scene.add.circle(
            centerX, emblemY, 25, 0x1c2638, 1,
        )

        emblemOuter.setStrokeStyle(2, 0xc9a227, 0.9)

        const emblemInner = this.scene.add.circle(
            centerX, emblemY, 17, 0x0b1220, 1,
        )

        emblemInner.setStrokeStyle(1, 0xf5df9b, 0.6)

        const emblem = this.scene.add.text(
            centerX,
            emblemY - 1,
            '✦',
            {
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                color: '#f5df9b',
            },
        )

        emblem.setOrigin(0.5)

        elements.push(emblemOuter, emblemInner, emblem)

        // TITLE
        this.titleText = this.scene.add.text(
            centerX,
            centerY - panelHeight / 2 + 135,
            '',
            {
                fontFamily: 'Georgia, serif',
                fontSize: width < 500 ? '32px' : '42px',
                fontStyle: 'bold',
                color: '#f5df9b',
                stroke: '#000000',
                strokeThickness: 5,
                align: 'center',
            },
        )

        this.titleText.setOrigin(0.5)
        elements.push(this.titleText)

        // SUBTITLE
        this.subtitleText = this.scene.add.text(
            centerX,
            centerY - panelHeight / 2 + 174,
            '',
            {
                fontFamily: 'Georgia, serif',
                fontSize: '15px',
                fontStyle: 'italic',
                color: '#aebbd0',
                align: 'center',
            },
        )

        this.subtitleText.setOrigin(0.5)
        elements.push(this.subtitleText)

        // DIVIDER
        const divider = this.scene.add.rectangle(
            centerX,
            centerY - panelHeight / 2 + 198,
            Math.min(240, panelWidth - 80),
            1,
            0x66728a,
            0.55,
        )

        elements.push(divider)

        // DETAIL TEXT
        this.detailText = this.scene.add.text(
            centerX,
            centerY - panelHeight / 2 + 230,
            '',
            {
                fontFamily: 'Arial, sans-serif',
                fontSize: '15px',
                color: '#d1d9e6',
                align: 'center',
                lineSpacing: 8,
                wordWrap: {
                    width: panelWidth - 70,
                },
            },
        )

        this.detailText.setOrigin(0.5)
        elements.push(this.detailText)

        // BUTTONS
        const buttonWidth = Math.min(320, panelWidth - 70)
        const buttonHeight = 48

        this.retryButton = this.createButton(
            0,
            0,
            buttonWidth,
            buttonHeight,
            'RETRY',
            true,
            () => {
                this.runAction(() => this.callbacks.onRetry())
            },
        )

        this.continueButton = this.createButton(
            0,
            0,
            buttonWidth,
            buttonHeight,
            'CONTINUE',
            true,
            () => {
                this.runAction(() => this.callbacks.onContinue())
            },
        )

        this.mainMenuButton = this.createButton(
            0,
            0,
            buttonWidth,
            buttonHeight,
            'MAIN MENU',
            false,
            () => {
                this.runAction(() => this.callbacks.onMainMenu())
            },
        )

        elements.push(
            this.retryButton,
            this.continueButton,
            this.mainMenuButton,
        )

        // FOOTER
        const footer = this.scene.add.text(
            centerX,
            centerY + panelHeight / 2 - 50,
            'RUNEBOUND  •  YOUR ADVENTURE CONTINUES',
            {
                fontFamily: 'Arial, sans-serif',
                fontSize: '10px',
                color: '#718096',
                letterSpacing: 1,
                align: 'center',
            },
        )

        footer.setOrigin(0.5)
        elements.push(footer)

        // ROOT CONTAINER
        this.container = this.scene.add.container(0, 0, elements)

        this.container.setScrollFactor(0)
        this.container.setDepth(10000)
        this.container.setVisible(false)

        this.retryButton.setVisible(false)
        this.continueButton.setVisible(false)
        this.mainMenuButton.setVisible(false)
    }

    // ======================================================
    // CREATE BUTTON
    // ======================================================

    private createButton(
        x: number,
        y: number,
        width: number,
        height: number,
        labelText: string,
        highlighted: boolean,
        callback: () => void,
    ): Phaser.GameObjects.Container {
        const normalColor = highlighted ? 0x263247 : 0x151d2c
        const hoverColor = highlighted ? 0x35445e : 0x25334a

        // Tọa độ các thành phần bên trong container là tọa độ cục bộ.
        const shadow = this.scene.add.rectangle(
            3, 4, width, height, 0x000000, 0.45,
        )

        const button = this.scene.add.rectangle(
            0, 0, width, height, normalColor, 1,
        )

        button.setStrokeStyle(
            highlighted ? 2 : 1,
            highlighted ? 0xc9a227 : 0x66728a,
            highlighted ? 0.95 : 0.55,
        )

        const leftDecoration = this.scene.add.rectangle(
            -width / 2 + 8,
            0,
            3,
            24,
            highlighted ? 0xc9a227 : 0x56647d,
            1,
        )

        const rightDecoration = this.scene.add.rectangle(
            width / 2 - 8,
            0,
            3,
            24,
            highlighted ? 0xc9a227 : 0x56647d,
            1,
        )

        const label = this.scene.add.text(0, 0, labelText, {
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            fontStyle: 'bold',
            color: highlighted ? '#f5df9b' : '#e8edf5',
            letterSpacing: 2,
            align: 'center',
        })

        label.setOrigin(0.5)

        // Tạo container của nút trước khi đăng ký vùng tương tác.
        const buttonContainer = this.scene.add.container(
            x,
            y,
            [shadow, button, leftDecoration, rightDecoration, label],
        )

        buttonContainer.setSize(width, height)

        buttonContainer.setInteractive({
            useHandCursor: true,
        })

        buttonContainer.on('pointerover', () => {
            if (!this.visible || this.actionLocked) return

            button.setFillStyle(hoverColor, 1)
            button.setStrokeStyle(2, 0xc9a227, 0.95)
            label.setColor('#f5df9b')

            leftDecoration.setFillStyle(0xc9a227, 1)
            rightDecoration.setFillStyle(0xc9a227, 1)
        })

        buttonContainer.on('pointerout', () => {
            button.setFillStyle(normalColor, 1)

            button.setStrokeStyle(
                highlighted ? 2 : 1,
                highlighted ? 0xc9a227 : 0x66728a,
                highlighted ? 0.95 : 0.55,
            )

            label.setColor(highlighted ? '#f5df9b' : '#e8edf5')

            leftDecoration.setFillStyle(
                highlighted ? 0xc9a227 : 0x56647d,
                1,
            )

            rightDecoration.setFillStyle(
                highlighted ? 0xc9a227 : 0x56647d,
                1,
            )
        })

        buttonContainer.on('pointerdown', () => {
            if (!this.visible || this.actionLocked) return

            console.log(`[ResultMenu] Clicked: ${labelText}`)
            callback()
        })

        return buttonContainer
    }

    // ======================================================
    // SHOW GAME OVER
    // ======================================================

    showGameOver(): void {
        this.show('game-over')
    }

    // ======================================================
    // SHOW LEVEL COMPLETE
    // ======================================================

    showLevelComplete(): void {
        this.show('level-complete')
    }

    // ======================================================
    // SHOW RESULT
    // ======================================================

    private show(type: ResultType): void {
        if (this.visible) return

        this.visible = true
        this.actionLocked = false

        const width = this.scene.scale.width
        const height = this.scene.scale.height

        const centerX = width / 2
        const centerY = height / 2

        const panelHeight = Math.min(490, height - 32)
        const buttonStartY = centerY + 62
        const buttonHeight = 48
        const buttonGap = 15

        this.titleText.setPosition(
            centerX,
            centerY - panelHeight / 2 + 135,
        )

        this.subtitleText.setPosition(
            centerX,
            centerY - panelHeight / 2 + 174,
        )

        this.detailText.setPosition(
            centerX,
            centerY - panelHeight / 2 + 230,
        )

        this.retryButton.setPosition(centerX, buttonStartY)
        this.continueButton.setPosition(centerX, buttonStartY)

        this.mainMenuButton.setPosition(
            centerX,
            buttonStartY + buttonHeight + buttonGap,
        )

        if (type === 'game-over') {
            this.titleText.setText('GAME OVER')
            this.titleText.setColor('#f28b82')

            this.subtitleText.setText('THE JOURNEY ENDS... FOR NOW')

            this.detailText.setText(
                'Your strength has faded, adventurer.\n' +
                'Rise again and try a different path.',
            )

            this.retryButton.setVisible(true)
            this.continueButton.setVisible(false)
            this.mainMenuButton.setVisible(true)
        } else {
            this.titleText.setText('VICTORY!')
            this.titleText.setColor('#f5df9b')

            this.subtitleText.setText('A NEW LEGEND IS BORN')

            this.detailText.setText(
                'You have conquered this challenge!\n' +
                'Your adventure is far from over.',
            )

            this.retryButton.setVisible(false)
            this.continueButton.setVisible(true)
            this.mainMenuButton.setVisible(true)
        }

        this.container.setVisible(true)
        this.container.setAlpha(0)

        // Dừng gameplay nhưng giữ Scene Clock hoạt động.
        this.scene.physics.pause()

        this.scene.tweens.add({
            targets: this.container,
            alpha: 1,
            duration: 220,
            ease: 'Quad.easeOut',
        })
    }

    // ======================================================
    // RUN ACTION
    // ======================================================

    private runAction(callback: () => void): void {
        if (this.actionLocked || !this.visible) return

        this.actionLocked = true
        callback()
    }

    // ======================================================
    // HIDE
    // ======================================================

    hide(): void {
        if (!this.visible) return

        this.visible = false
        this.actionLocked = false

        this.scene.tweens.killTweensOf(this.container)

        this.container.setVisible(false)
        this.container.setAlpha(1)

        this.scene.physics.resume()
    }

    // ======================================================
    // STATE
    // ======================================================

    isVisible(): boolean {
        return this.visible
    }

    // ======================================================
    // DESTROY
    // ======================================================

    destroy(): void {
        this.scene.tweens.killTweensOf(this.container)

        this.container.destroy(true)

        this.visible = false
        this.actionLocked = false
    }
}