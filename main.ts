function gameOver () {
    game.setGameOverMessage(true, "Player 1 Wins!")
    game.setGameOverMessage(true, "Player 2 Wins!")
    game.setGameOverScoringType(game.ScoringType.HighScore)
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.moveSprite(pizza)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    controller.moveSprite(burger)
})
let pizza: Sprite = null
let burger: Sprite = null
game.splash("Burger vs. Pizza")
burger = sprites.create(assets.image`burger`, SpriteKind.Player)
burger.left = 0
pizza = sprites.create(assets.image`pizza`, SpriteKind.Player)
pizza.right = scene.screenWidth()
controller.player1.moveSprite(burger)
controller.player2.moveSprite(pizza)
info.startCountdown(30)
