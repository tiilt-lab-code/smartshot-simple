loops.everyInterval(500, function () {
	
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) >= 90 && input.rotation(Rotation.Pitch) <= 135) {
        basic.showIcon(IconNames.Target)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
