var ppt8 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt8. WebGL");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var webglNews1 = cc.Sprite.create(s_webglNew1);
        webglNews1.setAnchorPoint(cc.p(0.5, 0.5));
        webglNews1.setPosition(cc.p(400, size.height -250 ));
        this.addChild(webglNews1, 0);

        var webglCocos1 = cc.Sprite.create(s_webglCocos1);
        webglCocos1.setAnchorPoint(cc.p(0.5, 0.5));
        webglCocos1.setPosition(cc.p(size.width / 2 + 100, size.height / 2-120));
        this.addChild(webglCocos1, 0);


    }
});

ppt8.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt8();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionProgressRadialCW.create(1, ret);
};