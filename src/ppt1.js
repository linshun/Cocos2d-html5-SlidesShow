var ppt1 = ppt.extend({

    _currentBullet:0,
    _multiPlatform:null,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt1. Why Cocos2d-html5?");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        this._multiPlatform = cc.Sprite.create(s_multiplatform);
        this._multiPlatform.setAnchorPoint(cc.p(0.5, 0.5));
        this._multiPlatform.setScale(0.8)
        this._multiPlatform.setPosition(cc.p(size.width / 2, size.height / 2-20));
        this.addChild(this._multiPlatform, 0);

    },

    addBullet:function (touch, e) {
        if(this._currentBullet == 0){
            this._currentBullet++;
            // add cross cocos2d image
            var size = cc.Director.getInstance().getWinSize();
            this.removeChild(this._multiPlatform);
            var cocos2dCrossPlatform = cc.Sprite.create(s_cocos2dCrossPlatform);
            cocos2dCrossPlatform.setAnchorPoint(cc.p(0.5, 0.5));
            cocos2dCrossPlatform.setScale(0.95)
            cocos2dCrossPlatform.setPosition(cc.p(size.width / 2, size.height / 2-20));
            this.addChild(cocos2dCrossPlatform, 0);
        } else {
            this.gotNextScene();
        }

    }


});

ppt1.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt1();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionRotoZoom.create(0.5,ret);
};