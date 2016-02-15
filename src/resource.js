var res = {
    wall_png : "res/Graphics/203-other03.png",
    hero_png: "res/Graphics/002-Braver01.png",
    tower_png: "res/Graphics/魔塔.png",
    monster01_png : "res/Graphics/002-Braver07.png",

    Joystick_png : "res/Graphics/Joystick.png",
    JoystickBG_png : "res/Graphics/JoystickBG.png",

    Effect_mp3: "res/Audio/SE/effect.mp3",

    WelcomeScene_json : "UI/res/WelcomeScene.json",
    GameScene_json : "UI/res/GameScene.json",
    PixelFont_ttf: {type:"font", name:"PixelFont", srcs:["res/PixelFont.ttf"]}
};

tileSize = 32;

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

