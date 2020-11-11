paddle = game.create_sprite(2, 4)
#paddle_R = game.create_sprite(3, 4)
ball = game.create_sprite(randint(0, 4),0)
ball.set_blink(200)
ball.turn(Direction.RIGHT, randint(1,3)*45)


def on_button_pressed_a():
    if paddle.get(LedSpriteProperty.X) > 0:
        paddle.move(-1)
        #paddle_R.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if paddle.get(LedSpriteProperty.X) < 4:
        paddle.move(1)
        #paddle_R.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    ball.move(1)
    ball.if_on_edge_bounce()
    pause(800)

    if (ball.is_touching(paddle)):
        ball.set_direction(randint(-1,1)*45) 

    if (ball.get(LedSpriteProperty.Y) == 0):
        ball.set_direction(randint(-1,1)*45+180)    

    if (ball.get(LedSpriteProperty.Y) == 4 and ball.is_touching(paddle) == False):
        game.game_over()

    
basic.forever(on_forever)