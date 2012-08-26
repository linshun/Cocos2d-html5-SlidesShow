var ppt10 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt10. Q & A");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var logo = cc.Sprite.create(s_cocos2dhtml5logo);
        logo.setPosition((cc.p(size.width / 2, size.height / 2 + 80)));
        logo.setAnchorPoint(cc.p(0.5, 0.5));
        logo.setScale(0.8);
        //cc.DOM.convert(logo);
        this.addChild(logo, 1);

        var label = cc.LabelTTF.create("Q ? A : Thanks", "Arial", 78);
        //var color = new cc.Color3B(0,154,216);
        //label.setColor(color);
        //label.setAnchorPoint(cc.p(0,0));
        this.addChild(label, 1);
        label.setPosition(cc.p(size.width / 2, 160));
    }
});

ppt10.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt10();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionMoveInL.create(1, ret);
};