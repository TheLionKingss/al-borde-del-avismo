namespace SpriteKind {
    export const Secondary = SpriteKind.create()
    export const Reactor = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP13`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 26))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 26
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (DialoG2 == false) {
            game.showLongText("¿en serio, en dónde carajos estamos?", DialogLayout.Bottom)
            game.showLongText("Me rindo, voy a ir a investigar!", DialogLayout.Bottom)
            pause(1000)
            tiles.setTilemap(tilemap`level38`)
            game.showLongText("30 min después", DialogLayout.Full)
            tiles.setTilemap(tilemap`Mapa1`)
            game.showLongText("He recordado", DialogLayout.Bottom)
            if (Martin) {
                game.showLongText("Ya se que hacer Martin", DialogLayout.Bottom)
            } else if (Esteban) {
                game.showLongText("Ya se que hacer Esteban", DialogLayout.Bottom)
            } else if (Carla) {
                game.showLongText("Ya se que hacer Carla", DialogLayout.Bottom)
            }
            game.showLongText("Yo: Que está sucediendo", DialogLayout.Bottom)
            game.showLongText("Estamos en esta escuela abandonada en la que hay unos reactores, no tengo ni idea de porque ", DialogLayout.Bottom)
            game.showLongText("Pero al parecer algo malo pasó, con los reactores, en un experimento", DialogLayout.Bottom)
            game.showLongText("Ve a reiniciarlos todos, o lo que sea que esté pasando en el lugar se extenderá", DialogLayout.Bottom)
            game.showLongText("Aquí encontré una guia con el orden para reiniciarlos (que conveniente), pon MUCHA atención:", DialogLayout.Bottom)
            game.showLongText("El primer reactor es el de la cocina", DialogLayout.Bottom)
            game.showLongText("El segundo está en alguno los laboratorios", DialogLayout.Bottom)
            game.showLongText("El tercero está en un bosque ", DialogLayout.Bottom)
            game.showLongText("El cuarto está en un salon raro ", DialogLayout.Bottom)
            game.showLongText("El quinto está en un cuarto extraño, no logro identificarlo ", DialogLayout.Bottom)
            game.showLongText("Ahora Ve!, reinicia los reactores, destruye las abominaciones que estén en tu camino, confiamos en tí", DialogLayout.Bottom)
            DialoG2 = true
        } else if (DialoG2) {
            game.showLongText("Confiamos en tí! a pesar de acabamos de conocerte...", DialogLayout.Bottom)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Martin3`)
            pause(100)
            mySprite.setImage(assets.image`Martin4`)
            pause(100)
            mySprite.setImage(assets.image`Martin5`)
            pause(100)
            mySprite.setImage(assets.image`Martin6`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Esteban3`)
            pause(100)
            mySprite.setImage(assets.image`Esteban4`)
            pause(100)
            mySprite.setImage(assets.image`Esteban5`)
            pause(100)
            mySprite.setImage(assets.image`Esteban6`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.up.isPressed()) {
            mySprite.setImage(assets.image`Carla3`)
            pause(100)
            mySprite.setImage(assets.image`Carla4`)
            pause(100)
            mySprite.setImage(assets.image`Carla5`)
            pause(100)
            mySprite.setImage(assets.image`Carla6`)
            pause(100)
        }
    }
    DOWN = false
    UP = true
    LEFT = false
    RIGTH = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Carla`, function (sprite, location) {
    Martin = false
    Esteban = false
    Carla = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP8`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa6`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
    Map = 6
    Y_CheckPoint = 1
    X_CheckPoint = 25
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 6) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 6) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 24))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    statusbar.value += -0.5
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (DialoG1 == false) {
            game.showLongText("¿en dónde carajos estamos?", DialogLayout.Bottom)
            game.showLongText("Tu: No tengo ni la más mínima idea…", DialogLayout.Bottom)
            game.showLongText("¿y acaso tú quién eres?", DialogLayout.Bottom)
            game.showLongText("Tu: ¿acaso eso importa? Lo único que importa es hallar una salida de acá", DialogLayout.Bottom)
            game.showLongText("Importa si con ese dato podemos saber hasta lo más insignificante respecto porque nos hallamos encerrados en esta prisión abandonada", DialogLayout.Bottom)
            if (Martin) {
                game.showLongText("Tu: Pues si es obligatorio, entonces me llamo Martin, soy el típico adolescente deprimido, fui el primero que me desperté y tampoco tengo idea alguna respecto a porque carajos estamos aquí ¿alguna pregunta?", DialogLayout.Bottom)
            } else if (Esteban) {
                game.showLongText("Tu: Pues si es obligatorio, entonces me llamo Esteban, soy un estudiante normal que hace deporte, fui el primero que me desperté y tampoco tengo idea alguna respecto a porque carajos estamos aquí ¿alguna pregunta?", DialogLayout.Bottom)
            } else if (Carla) {
                game.showLongText("Tu: Pues si es obligatorio, entonces me llamo Carla, me gusta romper el sistema, fui la primero que me desperté y tampoco tengo idea alguna respecto a porque carajos estamos aquí ¿alguna pregunta?", DialogLayout.Bottom)
            }
            DialoG1 = true
        } else if (DialoG2 == true) {
            game.showLongText("Hola, ya terminaste?", DialogLayout.Bottom)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (UP) {
        if (Martin) {
            projectile = sprites.createProjectileFromSprite(assets.image`Book`, mySprite, 0, -100)
            music.pewPew.play()
        } else if (Esteban) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basket`, mySprite, 0, -100)
            music.pewPew.play()
        } else if (Carla) {
            projectile = sprites.createProjectileFromSprite(assets.image`Maleta`, mySprite, 0, -100)
            music.pewPew.play()
        }
    } else if (LEFT) {
        if (Martin) {
            projectile = sprites.createProjectileFromSprite(assets.image`Book`, mySprite, -100, 0)
            music.pewPew.play()
        } else if (Esteban) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basket`, mySprite, -100, 0)
            music.pewPew.play()
        } else if (Carla) {
            projectile = sprites.createProjectileFromSprite(assets.image`Maleta`, mySprite, -100, 0)
            music.pewPew.play()
        }
    } else if (DOWN) {
        if (Martin) {
            projectile = sprites.createProjectileFromSprite(assets.image`Book`, mySprite, 0, 100)
            music.pewPew.play()
        } else if (Esteban) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basket`, mySprite, 0, 100)
            music.pewPew.play()
        } else if (Carla) {
            projectile = sprites.createProjectileFromSprite(assets.image`Maleta`, mySprite, 0, 100)
            music.pewPew.play()
        }
    } else if (RIGTH) {
        if (Martin) {
            projectile = sprites.createProjectileFromSprite(assets.image`Book`, mySprite, 100, 0)
            music.pewPew.play()
        } else if (Esteban) {
            projectile = sprites.createProjectileFromSprite(assets.image`Basket`, mySprite, 100, 0)
            music.pewPew.play()
        } else if (Carla) {
            projectile = sprites.createProjectileFromSprite(assets.image`Maleta`, mySprite, 100, 0)
            music.pewPew.play()
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP11`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 106))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 106
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTileeee`, function (sprite, location) {
    if (Map == 1) {
        tiles.placeOnTile(demon, tiles.getTileLocation(73, 70))
        tiles.placeOnTile(demon2, tiles.getTileLocation(29, 60))
        tiles.placeOnTile(demo3, tiles.getTileLocation(121, 82))
    } else if (Map == 3) {
        tiles.placeOnTile(demon, tiles.getTileLocation(55, 118))
        tiles.placeOnTile(demon2, tiles.getTileLocation(24, 59))
        tiles.placeOnTile(demo3, tiles.getTileLocation(49, 18))
    } else if (Map == 4) {
        tiles.placeOnTile(demon, tiles.getTileLocation(46, 30))
        tiles.placeOnTile(demon2, tiles.getTileLocation(32, 19))
        tiles.placeOnTile(demo3, tiles.getTileLocation(59, 67))
    } else if (Map == 5) {
        tiles.placeOnTile(demon, tiles.getTileLocation(75, 113))
        tiles.placeOnTile(demon2, tiles.getTileLocation(91, 69))
        tiles.placeOnTile(demo3, tiles.getTileLocation(30, 110))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP15`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 57))
    Map = 4
    Y_CheckPoint = 1
    X_CheckPoint = 57
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.left.isPressed()) {
            mySprite.setImage(assets.image`Martin12`)
            pause(100)
            mySprite.setImage(assets.image`Martin15`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.left.isPressed()) {
            mySprite.setImage(assets.image`Esteban12`)
            pause(100)
            mySprite.setImage(assets.image`Esteban13`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.left.isPressed()) {
            mySprite.setImage(assets.image`Carla12`)
            pause(100)
            mySprite.setImage(assets.image`Carla13`)
            pause(100)
        }
    }
    DOWN = false
    UP = false
    LEFT = true
    RIGTH = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP16`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 119))
    Map = 3
    Y_CheckPoint = 68
    X_CheckPoint = 119
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP3`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(40, 1))
    Map = 4
    Y_CheckPoint = 40
    X_CheckPoint = 1
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(82, 37))
    Map = 2
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    info.changeScoreBy(1)
    demon.setImage(assets.image`Ball`)
    demon.setStayInScreen(false)
})
statusbars.onZero(StatusBarKind.Magic, function (status) {
    info.changeScoreBy(1)
    demo3.setImage(assets.image`Ball`)
    demo3.setStayInScreen(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Esteban`, function (sprite, location) {
    Martin = false
    Esteban = true
    Carla = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP14`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 84))
    Map = 1
    Y_CheckPoint = 1
    X_CheckPoint = 84
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP7`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 45))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 45
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    GAME_OVER = true
    GAME_OVER = true
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.right.isPressed()) {
            mySprite.setImage(assets.image`Martin14`)
            pause(100)
            mySprite.setImage(assets.image`Martin11`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.right.isPressed()) {
            mySprite.setImage(assets.image`Esteban10`)
            pause(100)
            mySprite.setImage(assets.image`Esteban11`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.right.isPressed()) {
            mySprite.setImage(assets.image`Carla10`)
            pause(100)
            mySprite.setImage(assets.image`Carla11`)
            pause(100)
        }
    }
    DOWN = false
    UP = false
    LEFT = false
    RIGTH = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP2`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 59))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 59
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 5) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 55))
            Reactor2 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        }
        animation.runImageAnimation(
        Reactor2,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor2, tiles.getTileLocation(33, 92))
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Martin) {
        while (controller.down.isPressed()) {
            mySprite.setImage(assets.image`Martin7`)
            pause(100)
            mySprite.setImage(assets.image`Martin8`)
            pause(100)
            mySprite.setImage(assets.image`Martin9`)
            pause(100)
            mySprite.setImage(assets.image`Martin10`)
            pause(100)
        }
    } else if (Esteban) {
        while (controller.down.isPressed()) {
            mySprite.setImage(assets.image`Esteban7`)
            pause(100)
            mySprite.setImage(assets.image`Esteban8`)
            pause(100)
            mySprite.setImage(assets.image`Esteban9`)
            pause(100)
            mySprite.setImage(assets.image`Esteban14`)
            pause(100)
        }
    } else if (Carla) {
        while (controller.down.isPressed()) {
            mySprite.setImage(assets.image`Carla7`)
            pause(100)
            mySprite.setImage(assets.image`Carla8`)
            pause(100)
            mySprite.setImage(assets.image`Carla9`)
            pause(100)
            mySprite.setImage(assets.image`Carla14`)
            pause(100)
        }
    }
    DOWN = true
    UP = false
    LEFT = false
    RIGTH = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TileIzquierda`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 59))
    Map = 1
    Y_CheckPoint = 21
    X_CheckPoint = 42
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles14, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 25))
    Map = 1
    Y_CheckPoint = 17
    X_CheckPoint = 25
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP5`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(125, 70))
    Map = 1
    Y_CheckPoint = 125
    X_CheckPoint = 70
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Martin`, function (sprite, location) {
    Martin = true
    Esteban = false
    Carla = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP10`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(74, 98))
    Map = 1
    Y_CheckPoint = 74
    X_CheckPoint = 98
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 1) {
        if (Martin) {
            PersconajeSec1 = sprites.create(assets.image`Esteban2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Carla8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(22, 57))
            PersonajeSec2 = sprites.create(assets.image`Esteban2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(22, 61))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP6`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 29))
    Map = 4
    Y_CheckPoint = 68
    X_CheckPoint = 29
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 4) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 4) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(35, 55))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP9`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 109))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 109
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 5) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 55))
            Reactor2 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        }
        animation.runImageAnimation(
        Reactor2,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor2, tiles.getTileLocation(33, 92))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Interruptor`, function (sprite, location) {
    music.stopAllSounds()
    Musica_1 = 0
    Musica_2 = 0
    if (controller.B.isPressed()) {
        pause(100)
        music.stopAllSounds()
        music.setVolume(37)
        if (Map == 3 && REACTORSCOMPLETE == 0) {
            REACTORSCOMPLETE += 1
            music.playMelody("C E G C5 G E C - ", 500)
            game.showLongText("Has reiniciado el primer reactor", DialogLayout.Center)
        } else if (Map == 4 && REACTORSCOMPLETE == 1) {
            REACTORSCOMPLETE += 1
            music.playMelody("C E G C5 G E C - ", 500)
            game.showLongText("Has reiniciado el segundo reactor", DialogLayout.Center)
        } else if (Map == 5 && REACTORSCOMPLETE == 2) {
            REACTORSCOMPLETE += 1
            music.playMelody("C E G C5 G E C - ", 500)
            game.showLongText("Has reiniciado el tercer reactor", DialogLayout.Center)
        } else if (Map == 5 && REACTORSCOMPLETE == 3) {
            REACTORSCOMPLETE += 1
            music.playMelody("C E G C5 G E C - ", 500)
            game.showLongText("Has reiniciado el cuarto reactor", DialogLayout.Center)
        } else if (Map == 6 && REACTORSCOMPLETE == 4) {
            game.showLongText("Has reiniciado todos los reactores", DialogLayout.Center)
            REACTORSCOMPLETE += 1
            music.playMelody("C E G C5 G E C - ", 500)
            pause(1000)
            tiles.setTilemap(tilemap`Dead`)
            game.showLongText("Has ganado", DialogLayout.Center)
            Musica_3 = 3
            Musica_4 = 3
            Musica_5 = 3
            music.playMelody("C - C - C D E G ", 120)
            music.playMelody("F E D C - C D G ", 120)
            music.playMelody("A G F E G F E D ", 120)
            music.playMelody("F E D G C D C - ", 120)
            while (Musica_3 > 0) {
                music.playMelody("E - E - E F G C5 ", 120)
                music.playMelody("A G F E D E F - ", 120)
                music.playMelody("C5 B A G B A G F ", 120)
                music.playMelody("A G F C5 E F E - ", 120)
            }
            while (Musica_5 > 0) {
                music.setTempo(120)
                music.playTone(131, music.beat(BeatFraction.Breve))
                music.playTone(131, music.beat(BeatFraction.Breve))
                music.playTone(175, music.beat(BeatFraction.Breve))
                music.playTone(196, music.beat(BeatFraction.Breve))
                music.playTone(220, music.beat(BeatFraction.Breve))
                music.playTone(165, music.beat(BeatFraction.Breve))
                music.playTone(147, music.beat(BeatFraction.Double))
                music.playTone(196, music.beat(BeatFraction.Double))
                music.playTone(131, music.beat(BeatFraction.Breve))
            }
            game.showLongText("No se supo mas de ti, pero al parecer escapaste con tus compañeros y eliminaste el \"abismo\"", DialogLayout.Center)
            game.showLongText("Historia: Santiago Carreño - Musica: Samuel Osorio - Diseño: Santiago Charry y Santiago Obando - Programación: Juan Diego Méndez", DialogLayout.Center)
            game.showLongText("Al Borde del Abismo", DialogLayout.Center)
        }
        pause(2000)
        music.setVolume(10)
    }
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    info.changeScoreBy(1)
    demon2.setImage(assets.image`Ball`)
    demon2.setStayInScreen(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP1`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 9))
    Map = 5
    Y_CheckPoint = 98
    X_CheckPoint = 9
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 5) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 55))
            Reactor2 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        }
        animation.runImageAnimation(
        Reactor2,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor2, tiles.getTileLocation(33, 92))
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (projectile.overlapsWith(demon)) {
        statusbar2.value += -2
        pause(500)
    } else if (projectile.overlapsWith(demon2)) {
        statusbar3.value += -2
        pause(500)
    } else if (projectile.overlapsWith(demo3)) {
        statusbar4.value += -2
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP4`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 51))
    Map = 3
    Y_CheckPoint = 1
    X_CheckPoint = 51
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        animation.runImageAnimation(
        Reactor1,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 3) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(55, 88))
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(demon)) {
        statusbar.value += -0.5
    } else if (mySprite.overlapsWith(demon2)) {
        statusbar.value += -0.5
    } else if (mySprite.overlapsWith(demo3)) {
        statusbar.value += -0.5
    }
})
let Musica_5 = 0
let Musica_4 = 0
let Musica_3 = 0
let Musica_2 = 0
let Musica_1 = 0
let Reactor2: Sprite = null
let GAME_OVER = false
let projectile: Sprite = null
let DialoG1 = false
let Reactor1: Sprite = null
let RIGTH = false
let LEFT = false
let UP = false
let DOWN = false
let DialoG2 = false
let PersonajeSec2: Sprite = null
let PersconajeSec1: Sprite = null
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let demo3: Sprite = null
let demon2: Sprite = null
let demon: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let REACTORSCOMPLETE = 0
let X_CheckPoint = 0
let Y_CheckPoint = 0
let Map = 0
let Esteban = false
let Carla = false
let Martin = false
Martin = true
Carla = false
Esteban = false
let CheckPoint = true
Map = 0
Y_CheckPoint = 3
X_CheckPoint = 3
REACTORSCOMPLETE = 0
info.setScore(0)
tiles.setTilemap(tilemap`Seleccion`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(X_CheckPoint, Y_CheckPoint))
mySprite = sprites.create(assets.image`Martin2`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
statusbar = statusbars.create(16, 2, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 200
demon = sprites.create(assets.image`demon`, SpriteKind.Enemy)
tiles.placeOnTile(demon, tiles.getTileLocation(0, 0))
demon2 = sprites.create(assets.image`demon`, SpriteKind.Enemy)
tiles.placeOnTile(demon2, tiles.getTileLocation(0, 0))
demo3 = sprites.create(assets.image`demon`, SpriteKind.Enemy)
tiles.placeOnTile(demo3, tiles.getTileLocation(0, 0))
statusbar2 = statusbars.create(16, 2, StatusBarKind.EnemyHealth)
statusbar2.attachToSprite(demon)
statusbar2.value = 100
statusbar3 = statusbars.create(16, 2, StatusBarKind.Energy)
statusbar3.attachToSprite(demon2)
statusbar3.value = 100
statusbar4 = statusbars.create(16, 2, StatusBarKind.Magic)
statusbar4.attachToSprite(demo3)
statusbar4.value = 100
forever(function () {
    while (true) {
        music.setVolume(10)
        Musica_1 = 12
        music.playTone(139, music.beat(BeatFraction.Whole))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Quarter))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(208, music.beat(BeatFraction.Half))
    }
    while (true) {
        music.setVolume(10)
        Musica_2 = 12
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
    }
    while (true) {
        if (Map != 1) {
            PersconajeSec1 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Secondary)
            PersonajeSec2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Secondary)
        }
    }
})
game.onUpdateInterval(200, function () {
    if (GAME_OVER == true) {
        tiles.setTilemap(tilemap`Dead`)
        game.showLongText("Has Muerto...", DialogLayout.Center)
        if (CheckPoint == true) {
            if (Map == 1) {
                tiles.setTilemap(tilemap`Mapa1`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(21, 55))
            } else if (Map == 2) {
                tiles.setTilemap(tilemap`Mapa2`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(82, 36))
            } else if (Map == 3) {
                tiles.setTilemap(tilemap`Mapa3`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 51))
            } else if (Map == 4) {
                tiles.setTilemap(tilemap`Mapa4`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(68, 29))
            } else if (Map == 5) {
                tiles.setTilemap(tilemap`Mapa5`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 109))
            } else {
                tiles.setTilemap(tilemap`Mapa6`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 25))
            }
            statusbar.value = 200
            GAME_OVER = false
        }
    }
})
