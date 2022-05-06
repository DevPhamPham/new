namespace SpriteKind {
    export const test = SpriteKind.create()
}
let mySprite = sprites.create(assets.image`myImage3`, SpriteKind.test)
let projectile = sprites.createProjectileFromSprite(assets.image`myImage3`, mySprite, 50, 50)
