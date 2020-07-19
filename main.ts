input.onButtonPressed(Button.A, function () {
    はかる = 1
    while (はかる == 1) {
        serial.writeValue("Celsius", input.temperature())
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    はかる = 0
})
let はかる = 0
basic.showString("Censor")
basic.forever(function () {
	
})
