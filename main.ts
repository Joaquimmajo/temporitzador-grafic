input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    while (x != -1 && y != -1) {
        led.unplot(x, y)
        x += -1
        basic.pause(200)
        if (x == -1) {
            x = 5
            y += -1
        }
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    y = 5
    x = 5
})
let x = 0
let y = 0
y = 5
x = 5
