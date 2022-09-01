input.onButtonPressed(Button.A, function () {
    número += 1
    basic.showNumber(número)
})
input.onButtonPressed(Button.AB, function () {
    texto = "bye"
})
input.onButtonPressed(Button.B, function () {
    número += -1
    basic.showNumber(número)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let número = 0
let texto = ""
texto = "hello"
número = 0
basic.forever(function () {
	
})
