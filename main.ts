input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.AB)) {
        music.playMelody("E B C5 A B G A F ", 300)
        basic.showString("Hello!")
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.showString("TRY PRESS LOGO AND A")
