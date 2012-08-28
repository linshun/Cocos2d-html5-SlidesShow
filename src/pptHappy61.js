var pptHappy61 = ppt.extend({

    _currentBullet:0,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am pptHappy61. Happy Children's Day!");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var moonWarriors = MoonWarriorsSysMenu.create();

        this.addChild(moonWarriors, 2);
        moonWarriors.setScale(0.8);


        moonWarriors.setPosition(cc.p(size.width / 2-100, size.height / 2 - 220));

    },

    onExit:function(){
        this._super();
        cc.AudioEngine.getInstance().stopBackgroundMusic(false);
    }




});

pptHappy61.scene = function () {
    var ret = cc.Scene.create();
    var layer = new pptHappy61();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionRotoZoom.create(0.8, ret);
};