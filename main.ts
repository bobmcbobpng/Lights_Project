let last = 0
basic.forever(function () {
    while (true) {
        last = 24
        for (let index = 0; index < 24; index++) {
            for (let index = 0; index <= last; index++) {
                led.plot(index % 5, index / 5)
                basic.pause(50)
                if (index < last) {
                    led.unplot(index % 5, index / 5)
                } else {
                    last = last - 1
                    music.playTone(175, music.beat(BeatFraction.Quarter))
                }
            }
        }
        last = 24
        for (let index = 0; index < 24; index++) {
            for (let index2 = 0; index2 <= last; index2++) {
                led.unplot(index2 % 5, index2 / 5)
                basic.pause(50)
                if (index2 < last) {
                    led.plot(index2 % 5, index2 / 5)
                } else {
                    last = last - 1
                    music.playTone(659, music.beat(BeatFraction.Eighth))
                }
            }
        }
    }
})
