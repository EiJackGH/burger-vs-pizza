game.splash("Burger vs. Pizza")
let burger = sprites.create(assets.image`burger`, SpriteKind.Player)
burger.left = 0
let pizza = sprites.create(assets.image`pizza`, SpriteKind.Player)
pizza.right = scene.screenWidth()
controller.player1.moveSprite(burger)
controller.player2.moveSprite(pizza)
