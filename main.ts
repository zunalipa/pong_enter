let paddle = game.createSprite(2, 4)
// paddle_R = game.create_sprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
ball.setBlink(200)
ball.turn(Direction.Right, randint(1, 3) * 45)
// paddle_R.move(-1)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (paddle.get(LedSpriteProperty.X) > 0) {
        paddle.move(-1)
    }
    
})
// paddle_R.move(1)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (paddle.get(LedSpriteProperty.X) < 4) {
        paddle.move(1)
    }
    
})
basic.forever(function on_forever() {
    ball.move(1)
    ball.ifOnEdgeBounce()
    pause(800)
    if (ball.isTouching(paddle)) {
        ball.setDirection(randint(-1, 1) * 45)
    }
    
    if (ball.get(LedSpriteProperty.Y) == 0) {
        ball.setDirection(randint(-1, 1) * 45 + 180)
    }
    
    if (ball.get(LedSpriteProperty.Y) == 4 && ball.isTouching(paddle) == false) {
        game.gameOver()
    }
    
})
