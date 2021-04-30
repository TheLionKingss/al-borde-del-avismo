@namespace
class SpriteKind:
    Secondary = SpriteKind.create()
    Reactor = SpriteKind.create()

def on_overlap_tile(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Mapa1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 26))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 26
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP13
    """),
    on_overlap_tile)

def on_up_pressed():
    global DOWN, UP, LEFT, RIGTH
    if Martin:
        while controller.up.is_pressed():
            mySprite.set_image(assets.image("""
                Martin3
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin4
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin5
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin6
            """))
            pause(100)
    elif Esteban:
        while controller.up.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban3
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban4
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban5
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban6
            """))
            pause(100)
    elif Carla:
        while controller.up.is_pressed():
            mySprite.set_image(assets.image("""
                Carla3
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla4
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla5
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla6
            """))
            pause(100)
    DOWN = False
    UP = True
    LEFT = False
    RIGTH = False
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile2(sprite, location):
    global Martin, Esteban, Carla
    Martin = False
    Esteban = False
    Carla = True
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Carla
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa6
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 25))
    Map = 6
    Y_CheckPoint = 1
    X_CheckPoint = 25
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 6:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 6:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 24))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP8
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite, location):
    statusbar.value += -0.5
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_light_moss,
    on_overlap_tile4)

def on_a_pressed():
    global projectile
    if UP:
        if Martin:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Book
            """), mySprite, 0, -100)
            music.pew_pew.play()
        elif Esteban:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Basket
            """), mySprite, 0, -100)
            music.pew_pew.play()
        elif Carla:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Maleta
            """), mySprite, 0, -100)
            music.pew_pew.play()
    elif LEFT:
        if Martin:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Book
            """), mySprite, -100, 0)
            music.pew_pew.play()
        elif Esteban:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Basket
            """), mySprite, -100, 0)
            music.pew_pew.play()
        elif Carla:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Maleta
            """), mySprite, -100, 0)
            music.pew_pew.play()
    elif DOWN:
        if Martin:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Book
            """), mySprite, 0, 100)
            music.pew_pew.play()
        elif Esteban:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Basket
            """), mySprite, 0, 100)
            music.pew_pew.play()
        elif Carla:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Maleta
            """), mySprite, 0, 100)
            music.pew_pew.play()
    elif RIGTH:
        if Martin:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Book
            """), mySprite, 100, 0)
            music.pew_pew.play()
        elif Esteban:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Basket
            """), mySprite, 100, 0)
            music.pew_pew.play()
        elif Carla:
            projectile = sprites.create_projectile_from_sprite(assets.image("""
                Maleta
            """), mySprite, 100, 0)
            music.pew_pew.play()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile5(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa3
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 106))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 106
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP11
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite, location):
    global demon, demon2, demo3, statusbar2, statusbar3, statusbar4
    demon = sprites.create(assets.image("""
        demon
    """), SpriteKind.enemy)
    demon2 = sprites.create(assets.image("""
        demon
    """), SpriteKind.enemy)
    demo3 = sprites.create(assets.image("""
        demon
    """), SpriteKind.enemy)
    statusbar2 = statusbars.create(16, 2, StatusBarKind.enemy_health)
    statusbar2.attach_to_sprite(demon)
    statusbar2.value = 200
    statusbar3 = statusbars.create(16, 2, StatusBarKind.energy)
    statusbar3.attach_to_sprite(demon2)
    statusbar3.value = 200
    statusbar4 = statusbars.create(16, 2, StatusBarKind.magic)
    statusbar4.attach_to_sprite(demo3)
    statusbar4.value = 200
    if Map == 1:
        tiles.place_on_tile(demon, tiles.get_tile_location(73, 70))
        tiles.place_on_tile(demon2, tiles.get_tile_location(29, 60))
        tiles.place_on_tile(demo3, tiles.get_tile_location(121, 82))
    elif Map == 3:
        tiles.place_on_tile(demon, tiles.get_tile_location(55, 118))
        tiles.place_on_tile(demon2, tiles.get_tile_location(24, 59))
        tiles.place_on_tile(demo3, tiles.get_tile_location(49, 18))
    elif Map == 4:
        tiles.place_on_tile(demon, tiles.get_tile_location(46, 30))
        tiles.place_on_tile(demon2, tiles.get_tile_location(32, 19))
        tiles.place_on_tile(demo3, tiles.get_tile_location(59, 67))
    elif Map == 5:
        tiles.place_on_tile(demon, tiles.get_tile_location(75, 113))
        tiles.place_on_tile(demon2, tiles.get_tile_location(91, 69))
        tiles.place_on_tile(demo3, tiles.get_tile_location(30, 110))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTileeee
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa4
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 57))
    Map = 4
    Y_CheckPoint = 1
    X_CheckPoint = 57
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP15
    """),
    on_overlap_tile7)

def on_left_pressed():
    global DOWN, UP, LEFT, RIGTH
    if Martin:
        while controller.left.is_pressed():
            mySprite.set_image(assets.image("""
                Martin12
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin15
            """))
            pause(100)
    elif Esteban:
        while controller.left.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban12
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban13
            """))
            pause(100)
    elif Carla:
        while controller.left.is_pressed():
            mySprite.set_image(assets.image("""
                Carla12
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla13
            """))
            pause(100)
    DOWN = False
    UP = False
    LEFT = True
    RIGTH = False
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile8(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa3
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 119))
    Map = 3
    Y_CheckPoint = 68
    X_CheckPoint = 119
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP16
    """),
    on_overlap_tile8)

def on_overlap_tile9(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa4
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(40, 1))
    Map = 4
    Y_CheckPoint = 40
    X_CheckPoint = 1
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP3
    """),
    on_overlap_tile9)

def on_overlap_tile10(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Mapa1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(15, 59))
    Map = 1
    Y_CheckPoint = 21
    X_CheckPoint = 42
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        tile37
    """),
    on_overlap_tile10)

def on_overlap_tile11(sprite, location):
    global Map
    tiles.set_tilemap(tilemap("""
        Mapa2
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(82, 37))
    Map = 2
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles10,
    on_overlap_tile11)

def on_on_zero(status):
    info.change_score_by(1)
    demon.set_image(assets.image("""
        Ball
    """))
    demon.set_stay_in_screen(False)
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_on_zero2(status):
    info.change_score_by(1)
    demo3.set_image(assets.image("""
        Ball
    """))
    demo3.set_stay_in_screen(False)
statusbars.on_zero(StatusBarKind.magic, on_on_zero2)

def on_overlap_tile12(sprite, location):
    global Martin, Esteban, Carla
    Martin = False
    Esteban = True
    Carla = False
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Esteban
    """),
    on_overlap_tile12)

def on_overlap_tile13(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Mapa1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 84))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 84
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP14
    """),
    on_overlap_tile13)

def on_overlap_tile14(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa4
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 45))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 45
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP7
    """),
    on_overlap_tile14)

def on_on_zero3(status):
    global GAME_OVER
    GAME_OVER = True
statusbars.on_zero(StatusBarKind.health, on_on_zero3)

def on_right_pressed():
    global DOWN, UP, LEFT, RIGTH
    if Martin:
        while controller.right.is_pressed():
            mySprite.set_image(assets.image("""
                Martin14
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin11
            """))
            pause(100)
    elif Esteban:
        while controller.right.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban10
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban11
            """))
            pause(100)
    elif Carla:
        while controller.right.is_pressed():
            mySprite.set_image(assets.image("""
                Carla10
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla11
            """))
            pause(100)
    DOWN = False
    UP = False
    LEFT = False
    RIGTH = True
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile15(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1, Reactor2
    tiles.set_tilemap(tilemap("""
        Mapa5
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 59))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 59
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 5:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(69, 57))
            Reactor2 = sprites.create(assets.tile("""
                Locked
            """), SpriteKind.player)
        animation.run_image_animation(Reactor2,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor2, tiles.get_tile_location(31, 94))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP2
    """),
    on_overlap_tile15)

def on_down_pressed():
    global DOWN, UP, LEFT, RIGTH
    if Martin:
        while controller.down.is_pressed():
            mySprite.set_image(assets.image("""
                Martin7
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin8
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin9
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Martin10
            """))
            pause(100)
    elif Esteban:
        while controller.down.is_pressed():
            mySprite.set_image(assets.image("""
                Esteban7
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban8
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban9
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Esteban14
            """))
            pause(100)
    elif Carla:
        while controller.down.is_pressed():
            mySprite.set_image(assets.image("""
                Carla7
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla8
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla9
            """))
            pause(100)
            mySprite.set_image(assets.image("""
                Carla14
            """))
            pause(100)
    DOWN = True
    UP = False
    LEFT = False
    RIGTH = True
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile16(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Mapa1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(17, 25))
    Map = 1
    Y_CheckPoint = 17
    X_CheckPoint = 25
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla14
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles14,
    on_overlap_tile16)

def on_overlap_tile17(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Mapa1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(125, 70))
    Map = 1
    Y_CheckPoint = 125
    X_CheckPoint = 70
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Martin13
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP5
    """),
    on_overlap_tile17)

def on_overlap_tile18(sprite, location):
    global Martin, Esteban, Carla
    Martin = True
    Esteban = False
    Carla = False
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Martin
    """),
    on_overlap_tile18)

def on_overlap_tile19(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, PersconajeSec1, PersonajeSec2
    tiles.set_tilemap(tilemap("""
        Mapa1
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(74, 98))
    Map = 1
    Y_CheckPoint = 74
    X_CheckPoint = 98
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 1:
        if Martin:
            PersconajeSec1 = sprites.create(assets.image("""
                Esteban2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Esteban:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Carla8
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
        elif Carla:
            PersconajeSec1 = sprites.create(assets.image("""
                Martin1
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersconajeSec1, tiles.get_tile_location(14, 5))
            PersonajeSec2 = sprites.create(assets.image("""
                Esteban2
            """), SpriteKind.Secondary)
            tiles.place_on_tile(PersonajeSec2, tiles.get_tile_location(14, 10))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP10
    """),
    on_overlap_tile19)

def on_overlap_tile20(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa4
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 29))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 29
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 4:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 4:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(35, 55))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP6
    """),
    on_overlap_tile20)

def on_overlap_tile21(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1, Reactor2
    tiles.set_tilemap(tilemap("""
        Mapa5
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 109))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 109
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 5:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(69, 57))
            Reactor2 = sprites.create(assets.tile("""
                Locked
            """), SpriteKind.player)
        animation.run_image_animation(Reactor2,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor2, tiles.get_tile_location(31, 94))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP9
    """),
    on_overlap_tile21)

def on_overlap_tile22(sprite, location):
    global REACTORSCOMPLETE
    if controller.B.is_pressed():
        if Map == 3 and REACTORSCOMPLETE == 0:
            REACTORSCOMPLETE += 1
            game.show_long_text("Has reiniciado el primer reactor", DialogLayout.CENTER)
        elif Map == 4 and REACTORSCOMPLETE == 1:
            REACTORSCOMPLETE += 1
            game.show_long_text("Has reiniciado el segundo reactor", DialogLayout.CENTER)
        elif Map == 5 and REACTORSCOMPLETE == 2:
            REACTORSCOMPLETE += 1
            game.show_long_text("Has reiniciado el tercero reactor", DialogLayout.CENTER)
        elif Map == 5 and REACTORSCOMPLETE == 3:
            REACTORSCOMPLETE += 1
            game.show_long_text("Has reiniciado el cuarto reactor", DialogLayout.CENTER)
        elif Map == 6 and REACTORSCOMPLETE == 4:
            game.show_long_text("Has reiniciado todos los reactores", DialogLayout.CENTER)
            REACTORSCOMPLETE += 1
            pause(1000)
            tiles.set_tilemap(tilemap("""
                Dead
            """))
            game.show_long_text("Has ganado", DialogLayout.CENTER)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Interruptor
    """),
    on_overlap_tile22)

def on_on_zero4(status):
    info.change_score_by(1)
    demon2.set_image(assets.image("""
        Ball
    """))
    demon2.set_stay_in_screen(False)
statusbars.on_zero(StatusBarKind.energy, on_on_zero4)

def on_overlap_tile23(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1, Reactor2
    tiles.set_tilemap(tilemap("""
        Mapa5
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 9))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 9
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 5:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(69, 57))
            Reactor2 = sprites.create(assets.tile("""
                Locked
            """), SpriteKind.player)
        animation.run_image_animation(Reactor2,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 5:
            tiles.place_on_tile(Reactor2, tiles.get_tile_location(31, 94))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP1
    """),
    on_overlap_tile23)

def on_on_overlap(sprite, otherSprite):
    if projectile.overlaps_with(demon):
        statusbar2.value += -2
        pause(500)
    elif projectile.overlaps_with(demon2):
        statusbar3.value += -2
        pause(500)
    elif projectile.overlaps_with(demo3):
        statusbar4.value += -2
        pause(500)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_overlap_tile24(sprite, location):
    global Map, Y_CheckPoint, X_CheckPoint, Reactor1
    tiles.set_tilemap(tilemap("""
        Mapa3
    """))
    tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 51))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 51
    pause(100)
    music.play_melody("E - E - E - E - ", 640)
    if Map == 3:
        Reactor1 = sprites.create(assets.tile("""
            Locked
        """), SpriteKind.player)
        animation.run_image_animation(Reactor1,
            assets.animation("""
                AnimacionR
            """),
            200,
            True)
        if Map == 3:
            tiles.place_on_tile(Reactor1, tiles.get_tile_location(55, 88))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        TP4
    """),
    on_overlap_tile24)

def on_on_overlap2(sprite, otherSprite):
    if mySprite.overlaps_with(demon):
        if demon.image == assets.image("""
            Ball
        """):
            pass
        elif demon.image == assets.image("""
            demon
        """):
            statusbar.value += -1
    elif projectile.overlaps_with(demon2):
        if demon2.image == assets.image("""
            Ball
        """):
            pass
        elif demon2.image == assets.image("""
            demon
        """):
            statusbar.value += -1
    elif projectile.overlaps_with(demo3):
        if demo3.image == assets.image("""
            Ball
        """):
            pass
        elif demon2.image == assets.image("""
            demon
        """):
            statusbar.value += -1
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

Reactor2: Sprite = None
GAME_OVER = False
statusbar4: StatusBarSprite = None
statusbar3: StatusBarSprite = None
statusbar2: StatusBarSprite = None
demo3: Sprite = None
demon2: Sprite = None
demon: Sprite = None
projectile: Sprite = None
Reactor1: Sprite = None
RIGTH = False
LEFT = False
UP = False
DOWN = False
PersonajeSec2: Sprite = None
PersconajeSec1: Sprite = None
statusbar: StatusBarSprite = None
mySprite: Sprite = None
REACTORSCOMPLETE = 0
X_CheckPoint = 0
Y_CheckPoint = 0
Map = 0
Esteban = False
Carla = False
Martin = False
Martin = True
Carla = False
Esteban = False
CheckPoint = True
Map = 0
Y_CheckPoint = 3
X_CheckPoint = 3
REACTORSCOMPLETE = 0
info.set_score(0)
tiles.set_tilemap(tilemap("""
    Seleccion
"""))
tiles.place_on_tile(mySprite,
    tiles.get_tile_location(X_CheckPoint, Y_CheckPoint))
mySprite = sprites.create(assets.image("""
    Martin2
"""), SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
scene.camera_follow_sprite(mySprite)
statusbar = statusbars.create(16, 2, StatusBarKind.health)
statusbar.attach_to_sprite(mySprite)
statusbar.value = 200

def on_update_interval():
    global GAME_OVER
    if GAME_OVER == True:
        tiles.set_tilemap(tilemap("""
            Dead
        """))
        game.show_long_text("U dead", DialogLayout.CENTER)
        if CheckPoint == True:
            if Map == 1:
                tiles.set_tilemap(tilemap("""
                    Mapa1
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(21, 55))
            elif Map == 2:
                tiles.set_tilemap(tilemap("""
                    Mapa2
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(82, 36))
            elif Map == 3:
                tiles.set_tilemap(tilemap("""
                    Mapa3
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 51))
            elif Map == 4:
                tiles.set_tilemap(tilemap("""
                    Mapa4
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(68, 29))
            elif Map == 5:
                tiles.set_tilemap(tilemap("""
                    Mapa5
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(98, 109))
            else:
                tiles.set_tilemap(tilemap("""
                    Mapa6
                """))
                tiles.place_on_tile(mySprite, tiles.get_tile_location(1, 25))
            statusbar.value = 200
            GAME_OVER = False
game.on_update_interval(500, on_update_interval)
