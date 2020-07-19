input.onButtonPressed(Button.A, function () {
    はかる = 1
    while (はかる == 1) {
        おんど = input.temperature()
        basic.showString("" + (おんど))
        serial.writeValue("Celsius", おんど)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    はかる = 0
})
let おんど = 0
let はかる = 0
basic.showString("Sensor")
basic.forever(function () {
	
})
