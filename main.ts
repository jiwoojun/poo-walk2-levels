namespace SpriteKind {
    export const walls = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    let levelNumber = 0
    info.changeScoreBy(levelNumber)
    if (levelNumber == 0) {
        level(1)
        tiles.placeOnRandomTile(poo, assets.tile`myTile2`)
    }
    if (levelNumber == 0) {
        game.splash("you beat this level!")
    } else if (levelNumber == 1) {
        game.over(true)
    } else {
    	
    }
})
function level (levelNum: number) {
    if (levelNum == 0) {
        tiles.setTilemap(tilemap`level2`)
    } else {
        tiles.setTilemap(tilemap`level1`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
let poo: Sprite = null
poo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . f f f f f f f f f f f f . . 
    . f e e e e e e e e e e e e f . 
    . f e e e f e e f e e e e e f . 
    f e e e e e e e e e e e e e e f 
    f e e e e f e e f e e e e e e f 
    f e e e e f f f f e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(poo)
scene.cameraFollowSprite(poo)
tiles.loadMap(tiles.createMap(tilemap`level2`))
tiles.placeOnRandomTile(poo, assets.tile`myTile2`)
info.setScore(0)
