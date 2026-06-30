function gameOver () {
    game.setGameOverMessage(true, "Player 1 Wins!")
    game.setGameOverMessage(true, "Player 2 Wins!")
    game.setGameOverScoringType(game.ScoringType.HighScore)
}
game.splash("Burger vs. Pizza")
let burger = sprites.create(assets.image`burger`, SpriteKind.Player)
burger.left = 0
let pizza = sprites.create(assets.image`pizza`, SpriteKind.Player)
pizza.right = scene.screenWidth()
controller.moveSprite(burger)
controller.moveSprite(pizza)
info.startCountdown(30)
