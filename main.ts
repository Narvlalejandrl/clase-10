namespace SpriteKind {
    export const mySprite = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite2.sayText(":)", 500, false)
    otherSprite.setKind(mySprite.kind())
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 1 1 1 1 1 3 3 1 1 1 1 1 3 3 
    3 3 1 1 1 1 1 3 3 1 1 1 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 4 4 4 3 3 3 3 3 3 3 3 
    3 3 3 3 3 4 4 4 3 3 3 3 3 3 3 3 
    3 3 3 3 3 4 4 4 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
let enemigo = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
    7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
    7 7 f f f 1 1 7 7 f f f 1 1 7 7 
    7 7 f f f 1 1 7 7 f f f 1 1 7 7 
    7 7 f f f 1 1 7 7 f f f 1 1 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Enemy)
mySprite2 = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 1 1 1 1 1 9 9 1 1 1 1 1 9 9 
    9 9 1 1 1 1 1 9 9 1 1 1 1 1 9 9 
    9 9 f f f 1 1 9 9 f f f 1 1 9 9 
    9 9 f f f 1 1 9 9 f f f 1 1 9 9 
    9 9 f f f 1 1 9 9 f f f 1 1 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 4 4 4 9 9 9 9 9 9 9 9 
    9 9 9 9 9 4 4 4 9 9 9 9 9 9 9 9 
    9 9 9 9 9 4 4 4 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Enemy)
enemigo.setPosition(14, 13)
mySprite2.setPosition(137, 13)
controller.moveSprite(mySprite)
