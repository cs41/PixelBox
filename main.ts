input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        shiftDemo()
    }
})
function frame2 () {
    PixelBox.pixelBoxRow(RCIndex.Zero, 0x000000, 0x000000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.One, 0x000000, 0xffffff, 0xffffff, 0xff0000, 0xff0000, 0xffffff, 0xffffff, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Two, 0xffffff, 0x0000ff, 0x0000ff, 0xffffff, 0xffffff, 0x0000ff, 0x0000ff, 0xffffff)
    PixelBox.pixelBoxRow(RCIndex.Three, 0xffffff, 0x0000ff, 0x0000ff, 0xffffff, 0xffffff, 0x0000ff, 0x0000ff, 0xffffff)
    PixelBox.pixelBoxRow(RCIndex.Four, 0xff0000, 0xffffff, 0xffffff, 0xff0000, 0xff0000, 0xffffff, 0xffffff, 0xff0000)
    PixelBox.pixelBoxRow(RCIndex.Five, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000)
    PixelBox.pixelBoxRow(RCIndex.Six, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000)
    PixelBox.pixelBoxRow(RCIndex.Seven, 0xff0000, 0x000000, 0xff0000, 0x000000, 0xff0000, 0xff0000, 0x000000, 0xff0000)
}
function shiftDemo () {
    frame2()
    strip.show()
    basic.pause(500)
    for (let index = 0; index < 8; index++) {
        PixelBox.shiftImage(ShiftDirection.right, ShiftPixels.One, 0x000000)
        strip.show()
        basic.pause(100)
    }
    frame2()
    PixelBox.replaceColor(0xff0000, 0x00ffff)
    strip.show()
    basic.pause(500)
    for (let index = 0; index < 8; index++) {
        PixelBox.shiftImage(ShiftDirection.up, ShiftPixels.One, 0x000000)
        strip.show()
        basic.pause(100)
    }
    frame2()
    PixelBox.replaceColor(0xff0000, 0x00ff00)
    strip.show()
    basic.pause(500)
    for (let index = 0; index < 8; index++) {
        PixelBox.shiftImage(ShiftDirection.left, ShiftPixels.One, 0x000000)
        strip.show()
        basic.pause(100)
    }
    frame2()
    PixelBox.replaceColor(0xff0000, 0x4b0082)
    strip.show()
    basic.pause(500)
    for (let index = 0; index < 8; index++) {
        PixelBox.shiftImage(ShiftDirection.down, ShiftPixels.One, 0x000000)
        strip.show()
        basic.pause(100)
    }
}
function frame3 () {
    PixelBox.pixelBoxRow(RCIndex.Zero, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.One, 0x000000, 0x000000, 0x4b0082, 0x4b0082, 0x4b0082, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Two, 0x000000, 0x4b0082, 0x000000, 0x000000, 0x000000, 0x4b0082, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Three, 0x000000, 0x4b0082, 0x000000, 0x000000, 0x000000, 0x4b0082, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Four, 0x000000, 0x4b0082, 0x000000, 0x000000, 0x000000, 0x4b0082, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Five, 0x4b0082, 0x000000, 0x4b0082, 0x000000, 0x4b0082, 0x000000, 0x4b0082, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Six, 0x000000, 0x4b0082, 0x4b0082, 0x000000, 0x4b0082, 0x4b0082, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Seven, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
}
function frame1 () {
    PixelBox.pixelBoxRow(RCIndex.Zero, 0xff0000, 0xff00ff, 0xffb6c1, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.One, 0xff8000, 0xffff00, 0xdaa520, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Two, 0x008000, 0x00ff00, 0x90ee90, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Three, 0x0000ff, 0x00ffff, 0x008080, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Four, 0x4b0082, 0x9370db, 0xe6e6fa, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Five, 0x8b4513, 0xd2b48c, 0xf5deb3, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Six, 0x303030, 0x808080, 0xd0d0d0, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Seven, 0x000000, 0xffffff, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
}
function scrollDemo () {
    for (let index = 0; index < 8; index++) {
        PixelBox.scrollImage(ShiftDirection.right, ShiftPixels.One)
        strip.show()
        basic.pause(100)
    }
    PixelBox.replaceColor(0xff0000, 0x00ffff)
    for (let index = 0; index < 8; index++) {
        PixelBox.scrollImage(ShiftDirection.up, ShiftPixels.One)
        strip.show()
        basic.pause(100)
    }
    PixelBox.replaceColor(0x00ffff, 0x00ff00)
    for (let index = 0; index < 8; index++) {
        PixelBox.scrollImage(ShiftDirection.left, ShiftPixels.One)
        strip.show()
        basic.pause(100)
    }
    PixelBox.replaceColor(0x00ff00, 0x4b0082)
    for (let index = 0; index < 8; index++) {
        PixelBox.scrollImage(ShiftDirection.down, ShiftPixels.One)
        strip.show()
        basic.pause(100)
    }
}
function frame0 () {
    PixelBox.pixelBoxRow(RCIndex.Zero, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.One, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Two, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Three, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Four, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Five, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Six, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
    PixelBox.pixelBoxRow(RCIndex.Seven, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000)
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB)
