let lt = 0
let temp = 0
basic.showString("temp/lt")
basic.pause(500)
basic.forever(function () {
    temp = input.temperature()
    lt = led.brightness()
    serial.writeValue("temp", temp)
    serial.writeValue("lt", lt)
    basic.pause(10000)
})
