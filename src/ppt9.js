var ppt9 = ppt.extend({
    _currentBullet:0,
    _office1:null,
    _office2:null,
    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt9. Closure Compiler");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);


    }

});

ppt9.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt9();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionFade.create(1, ret);
};