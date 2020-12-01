let Mesure = 0
input.onButtonPressed(Button.A, function () {
    Mesure = pins.analogReadPin(AnalogPin.P0)
    basic.pause(100)
    led.plotBarGraph(
    Mesure,
    1023
    )
    basic.pause(2000)
    basic.showNumber(Mesure)
})
