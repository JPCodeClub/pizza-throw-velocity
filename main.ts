namespace SpriteKind {
    export const Furniture = SpriteKind.create()
    export const Smiles = SpriteKind.create()
}
function introSplash () {
    game.setDialogFrame(img`
        ..bbabbaabbaabbaabbbbb..
        .bddbaddbaddbaddbabbddb.
        addddbaddbaddbaddbadddda
        addddbbaabbaabbaabbdddda
        abddb11111111111111bddba
        bbab1111111111111111bbab
        babb1111111111111111badb
        abda1111111111111111adda
        adda1111111111111111adba
        bdab1111111111111111bbab
        babb1111111111111111badb
        abda1111111111111111adda
        adda1111111111111111adba
        bdab1111111111111111bbab
        babb1111111111111111badb
        abda1111111111111111adda
        adda1111111111111111adba
        bdab1111111111111111bbab
        babb1111111111111111babb
        abddb11111111111111bddba
        addddbbaabbaabbaabbdddda
        addddabddabddabddabdddda
        .addbbabddabddabddabdda.
        ..aaabbaabbaabbaabbaaa..
        `)
    game.setDialogCursor(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `)
    game.showLongText("Throw the pizza and make it land in the middle of the table. " + "                   " + "Figure out what direction to throw the pizza and decide if you need positive or negative numbers for vx and vy  ", DialogLayout.Full)
}
function nextLevel () {
    for (let index = 0; index < 50; index++) {
        smile = sprites.create(img`
            . . . . 
            . . . . 
            . . . . 
            . . . . 
            `, SpriteKind.Smiles)
        smile.setPosition(pizza.x, pizza.y)
        smile.setVelocity(randint(-50, 50), randint(5, -30))
        if (Math.percentChance(35)) {
            if (Math.percentChance(60)) {
                smile.say("yum")
            } else {
                smile.say("omg")
            }
        } else {
            smile.say(":)")
        }
    }
    effects.hearts.startScreenEffect(1000)
    pizza.say("yum")
    pizza.setVelocity(0, 0)
    pizza.destroy(effects.hearts, 1000)
    table.destroy(effects.warmRadial, 1000)
    pause(2000)
    info.changeScoreBy(1)
    for (let value of sprites.allOfKind(SpriteKind.Smiles)) {
        value.destroy()
    }
    generateLevel()
}
function generateLevel () {
    scene.setBackgroundColor(13)
    area = randint(0, 6)
    table = sprites.create(img`
        ..cccccccccccccccccccccccccccc..
        .bddddddddddddddddddddddddddddb.
        cddddddddddddddddddddddddddddddc
        cbbb3ddd33d3dddd3333dddd3d333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbb33dddd3bb33d33dd33ddd33333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cb333dddd3db3dddddddd33333ddd3bc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbbbbbb3333333dddd333d3dddd33bbc
        cddddddddddddddddddddddddddddddc
        cbddddddddddddddddddddddddddddbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        .cccccccccccccccccccccccccccccc.
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `, SpriteKind.Furniture)
    table.setPosition(randint(16, scene.screenWidth() - 16), scene.screenHeight() - 12)
    if (area == 0) {
        table.setPosition(randint(70, 90), scene.screenHeight() - 12)
    } else if (area == 1) {
        table.setPosition(16, scene.screenHeight() - 12)
    } else if (area == 2) {
        table.setPosition(scene.screenWidth() - 16, scene.screenHeight() - 12)
    } else if (area == 3) {
        table.setPosition(randint(70, 90), 12)
    } else if (area == 4) {
        table.setPosition(16, randint(10, 35))
    } else {
        table.setPosition(scene.screenWidth() - 16, randint(10, 35))
    }
    pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Player)
    pizza.setPosition(80, 60)
    startLevel()
}
function startLevel () {
    game.splash("What +/- vx and xy values", "do you guess?")
    vx = game.askForNumber("X Velocity between -100 and 100:", 3)
    vy = game.askForNumber("Y Velocity between -100 and 100:", 3)
    pizza.setPosition(80, 60)
    pizza.setVelocity(vx, vy)
}
let d = 0
let vy = 0
let vx = 0
let area = 0
let table: Sprite = null
let pizza: Sprite = null
let smile: Sprite = null
scene.setBackgroundColor(13)
introSplash()
info.setScore(0)
info.setLife(3)
pause(100)
generateLevel()
game.onUpdate(function () {
    if (pizza.x < -50 || pizza.x > 200) {
        info.changeLifeBy(-1)
        pause(100)
        if (info.life() > 0) {
            startLevel()
        }
    } else if (pizza.y < -50 || pizza.y > 160) {
        info.changeLifeBy(-1)
        pause(100)
        if (info.life() > 0) {
            startLevel()
        }
    }
})
forever(function () {
    d = Math.sqrt(Math.abs(pizza.x - table.x) ** 2 + Math.abs(pizza.y - table.y) ** 2)
    if (d < 10) {
        nextLevel()
    }
})
