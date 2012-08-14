var ppt6 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt6. Of Course FishingJoy.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        // add the logo of fishing joy and play effect.
        var fishingJoy1 = cc.Sprite.create(s_fishingjoy1);
        fishingJoy1.setAnchorPoint(cc.p(0.5, 0.5));
        fishingJoy1.setPosition(cc.p(200, size.height -300 ));
        fishingJoy1.setScale(0.6);
        this.addChild(fishingJoy1, 1);

        // show fishingjoy demo
    }
});

ppt6.scene = function(){
    var ret = cc.Scene.create();
    var layer = new ppt6();
    layer.init();
    ret.addChild(layer);
    return ret;
};