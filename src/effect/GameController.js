/**
 *  Birzzle for html5
 * authors: HTML5China Team (David Lv , Nero Chan)
 */
var Birzzle = Birzzle || {};

Birzzle.LayerType = {backgroud:0, light:1, bird:2, effect:3, feather:4, touch:5, front:6};

//Bird Type
Birzzle.BirdType = {blue:0, grean:1, orange:2, pink:3, purple:4, red:5, white:6, yellow:7};

Birzzle.TickTime = 0.1;

Birzzle.Rows = 8;
Birzzle.Cols = 7;

//sound toggle
Birzzle.Sound = true;

//loading scene
Birzzle.shareLoaderScene = null;

//lock State
Birzzle.LockType = {none:0, normal:1, hard:2};

Birzzle.IceBoxTypeStrings = [
    "ice_blockA.png", //0
    "ice_box00.png", //1
    "ice_box01.png", //2
    "ice_box02.png", //3
    "ice_box03.png", //4
    "ice_block_bomb.png", //5
    "ice_block_time.png", //6
    "ice_block_egg.png", //7
    "ice_blockB.png", //8
    "ice_box04.png", //9
    "ice_box05.png", //10
    "ice_box06.png", //11
    "ice_box07.png", //12
    "ice_clock.png", //13
    "ice_egg.png", //14
    "ice_blockB_crack.png"  //15
];

Birzzle.IceBoxTypes = {
    BlockA:0,
    BlockB:8,
    BlockBomb:5,
    BlockTime:6,
    BlockEgg:7,
    BoxBlue:1,
    BoxGrean:2,
    BoxOrange:3,
    BoxPink:4,
    BoxPurple:9,
    BoxRed:10,
    BoxWhite:11,
    BoxYellow:12,
    IceClock:13,
    IceEgg:14,
    BlockBCrack:15
};

Birzzle.BoxBoneFrameName = "box_bone.png";

Birzzle.IceBoxFuncTypes = {combo:0, funct:1};

//Game State
//wait : wait for ice up
Birzzle.GameState = {stop:0, running:1, pause:2, gameover:3, hold:4, wait:5, disabled:6};

//Effict Type
Birzzle.EffectType = {none:0, bomb:1, firebird:2, lightning:3, blackhole:4};

Birzzle.currentGameController = null;
Birzzle.currentBoxContainer = null;

Birzzle.EffectAnimationCacheNames = {
    bomb:"ItemBombEffectAnimation", firebird:"ItemFirebirdEffectAnimation",
    lightning:"ItemLightningEffectAnimation", blackhole:"ItemBlackHoleEffectAnimation",
    CloudBlack:"CouldBlackEffectAnimation", CloudWhite:"CouldWhiteEffectAnimation",
    blackholeEffect:"BlackHoleEffectAnimation", bombEffect:"BombEffectAnimation",
    firebirdEffect:"FirebirdEffectAnimation", twinkleEffect:"TwinkleEffectAnimation",
    menuBirdEffect:"menuBirdEffectAnimation"
};

Birzzle.start = function () {
    var controller = new Birzzle.MainmenuController();
    Birzzle.currentGameController = controller;
    return controller.start();
};


Birzzle.playBackgroundMusic = function (path, loop) {
    if (Birzzle.Sound == true) {
            cc.AudioEngine.getInstance().playBackgroundMusic(path, loop);
    }
};

Birzzle.pauseBackgroundMusic = function () {
    if (Birzzle.Sound == true) {
        cc.AudioEngine.getInstance().pauseBackgroundMusic();
    }
};

Birzzle.stopBackgroundMusic = function (releaseData) {
    if (Birzzle.Sound == true) {
        cc.AudioEngine.getInstance().stopBackgroundMusic(releaseData);
    }
};

Birzzle.playEffect = function (path, loop) {
    if (Birzzle.Sound == true) {
        cc.AudioEngine.getInstance().playEffect(path, loop);
    }
};

Birzzle.stopEffect = function (path) {
    if (Birzzle.Sound == true) {
        cc.AudioEngine.getInstance().stopEffect(path);
    }
};
