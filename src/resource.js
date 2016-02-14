var res = {
    wall_png : "res/Graphics/203-other03.png",
    hero_png: "res/Graphics/002-Braver01.png",
    tower_png: "res/Graphics/魔塔.png",

    PixelFont_ttf: {type:"font", name:"PixelFont", srcs:["res/PixelFont.ttf"]}
};

tileSize = 32;

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

