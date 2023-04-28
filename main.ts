input.onButtonPressed(Button.A, function () {
    logging = true
})
input.onButtonPressed(Button.B, function () {
    logging = false
})
let logging = false
datalogger.setColumnTitles(
"pitch",
"accel_x",
"accel_y",
"accel_z",
"accel_mag"
)
logging = false
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) >= 90 && input.rotation(Rotation.Pitch) <= 135) {
        basic.showIcon(IconNames.Target)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
    if (logging) {
        datalogger.log(
        datalogger.createCV("pitch", input.rotation(Rotation.Pitch)),
        datalogger.createCV("accel_x", input.acceleration(Dimension.X)),
        datalogger.createCV("accel_y", input.acceleration(Dimension.Y)),
        datalogger.createCV("accel_z", input.acceleration(Dimension.Z)),
        datalogger.createCV("accel_mag", input.acceleration(Dimension.Strength))
        )
    }
})
