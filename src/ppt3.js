var ppt3 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt3. No Profit? why?");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);
    }
});

ppt3.scene = function(){
    var ret = cc.Scene.create();
    var layer = new ppt3();
    layer.init();
    ret.addChild(layer);
    return ret;
};