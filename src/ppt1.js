var ppt1 = ppt.extend({

    _currentBellet:0,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt1. What Is Cocos2d-html5?");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var framework = cc.Sprite.create(s_framework);
        //var color = new cc.Color3B(0,154,216);
        //label.setColor(color);
        //label.setAnchorPoint(cc.p(0,0));
        this.addChild(framework, 1);
        framework.setPosition(cc.p(size.width / 2, size.height / 2));
        framework.runAction(cc.ScaleTo.create(0.5, 1.4));
    },

    onTouchBegan:function (touch, e) {
        cc.log("touch began");
        this.addBullet();
    }


});

ppt1.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt1();
    layer.init();
    ret.addChild(layer);
    return ret;
};