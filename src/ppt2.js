var ppt2 = ppt.extend({

    _currentBellet:0,
    _riq:null,
    _google:null,
    _gameFromScratch:null,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt2.That is how it goes");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var moonWarriors = MoonWarriorsSysMenu.create();

        this.addChild(moonWarriors,2);
        moonWarriors.setScale(0.8);

        moonWarriors.setPosition(cc.p(size.width / 2, size.height / 2 - 200))




    },
    onExit:function(){
        this._super();
        cc.AudioEngine.getInstance().stopBackgroundMusic(false);
    }

    /*onTouchBegan:function (touch, e) {
        cc.log("touch began");
        this.addBullet();
    }*/



});

ppt2.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt2();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionJumpZoom.create(1.0, ret);
};