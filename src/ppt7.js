var ppt7 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt7. RoadMap.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var roadmap = cc.Sprite.create(s_roadmap);
        roadmap.setAnchorPoint(cc.p(0.5, 0.5));
        roadmap.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(roadmap, 1);
        roadmap.runAction(cc.ScaleTo.create(0.8, 1.4));
    }
});

ppt7.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt7();
    layer.init();
    ret.addChild(layer);
    return ret;
};