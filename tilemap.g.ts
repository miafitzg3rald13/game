// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010202020102020206060605010101010302020202020202050606060101010303020202020202020105060501010301030407070707070a02020202010103030308090b0b0b090d020202020707070707090d020202080d020102020b0b0b0b0b0b0c020202080d0202020201010103020202050605080d0202020202030205060506060606080d0202020202020206060606060605080d0202020102020506060606060606080d0202020206050606060606060606080d02020202040a0506060606060505080d0202020208090a06060605040707090d0202010208090d05060605080909090d020102020e0b0b0b0b0b0b0b0b0b0b0c02020202`, img`
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
