var ppt1 = ppt.extend({

    _currentBullet:0,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt1. Why Cocos2d-html5?");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var multiPlatform = cc.Sprite.create(s_multiplatform);
        multiPlatform.setAnchorPoint(cc.p(0.5, 0.5));
        multiPlatform.setScale(0.8)
        multiPlatform.setPosition(cc.p(size.width / 2, size.height / 2-20));
        this.addChild(multiPlatform, 0);

    },

    addBullet:function (touch, e) {
        if(this._currentBullet == 0){
            this._currentBullet++;
            // add cross cocos2d image
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