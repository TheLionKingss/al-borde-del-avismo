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
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
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
        `, mySprite, 69, 0)
    music.pewPew.play()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile37`, function (sprite, location) {
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
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    if (Map == 3) {
        if (mySprite.tileKindAt(TileDirection.Left, sprites.dungeon.stairEast)) {
            tiles.setTilemap(tilemap`level20`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(124, 70))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
            tiles.setTilemap(tilemap`level23`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(66, 29))
            Map = 4
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
            tiles.setTilemap(tilemap`level32`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(66, 45))
            Map = 4
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        }
    } else if (Map == 4) {
        if (mySprite.tileKindAt(TileDirection.Right, sprites.dungeon.stairWest)) {
            tiles.setTilemap(tilemap`level21`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 106))
            Map = 3
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
            tiles.setTilemap(tilemap`level24`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 119))
            Map = 3
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
            tiles.setTilemap(tilemap`level33`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(73, 96))
            Map = 1
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
            tiles.setTilemap(tilemap`level34`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(96, 109))
            Map = 5
            pause(100)
            music.playMelody("E - E - E - E - ", 640)
        } else {
        	
        }
    } else if (Map == 2) {
    	
    } else if (Map == 3) {
    	
    } else if (Map == 4) {
    	
    } else if (Map == 5) {
    	
    } else {
    	
    }
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
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
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
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 57))
            Reactor2 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        }
        animation.runImageAnimation(
        Reactor2,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(31, 94))
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
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla14`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
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
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Esteban1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Martin13`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
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
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Esteban) {
            PersconajeSec1 = sprites.create(assets.image`Martin1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Carla8`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        } else if (Carla) {
            PersconajeSec1 = sprites.create(assets.image`Martin1`, SpriteKind.Secondary)
            tiles.placeOnTile(PersconajeSec1, tiles.getTileLocation(14, 5))
            PersonajeSec2 = sprites.create(assets.image`Esteban2`, SpriteKind.Secondary)
            tiles.placeOnTile(PersonajeSec2, tiles.getTileLocation(14, 10))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa5`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(98, 10))
    pause(100)
    music.playMelody("E - E - E - E - ", 640)
    if (Map == 3) {
        Reactor1 = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
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
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 57))
            Reactor2 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        }
        animation.runImageAnimation(
        Reactor2,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(31, 94))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`TP1`, function (sprite, location) {
    tiles.setTilemap(tilemap`Mapa1`)
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
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(69, 57))
            Reactor2 = sprites.create(assets.tile`Locked`, SpriteKind.Player)
        }
        animation.runImageAnimation(
        Reactor2,
        assets.animation`AnimacionR`,
        200,
        true
        )
        if (Map == 5) {
            tiles.placeOnTile(Reactor1, tiles.getTileLocation(31, 94))
        }
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
let Reactor2: Sprite = null
let GAME_OVER = false
let projectile: Sprite = null
let Reactor1: Sprite = null
let PersonajeSec2: Sprite = null
let PersconajeSec1: Sprite = null
let mySprite: Sprite = null
let X_CheckPoint = 0
let Y_CheckPoint = 0
let Map = 0
let Esteban = false
let Carla = false
let Martin = false
Martin = true
Carla = false
Esteban = false
Map = 0
Y_CheckPoint = 3
X_CheckPoint = 3
tiles.setTilemap(tilemap`Seleccion`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(X_CheckPoint, Y_CheckPoint))
mySprite = sprites.create(assets.image`Martin2`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
let statusbar = statusbars.create(16, 2, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 200
game.onUpdateInterval(500, function () {
    let CheckPoint: boolean;
if (GAME_OVER == true) {
        tiles.setTilemap(tilemap`Dead`)
        game.showLongText("U dead", DialogLayout.Center)
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
