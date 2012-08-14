var MainPage = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am mainpage.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_mainpage1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var logo = cc.Sprite.create(s_cocos2dx400);
        logo.setPosition((cc.p(100, size.height / 2)));
        logo.setAnchorPoint(cc.p(0, 0.5));
        logo.setScale(0.8);
        //cc.DOM.convert(logo);
        this.addChild(logo, 1);

        var label = cc.LabelTTF.create("HTML5游戏开发", "Arial", 48);
        //var color = new cc.Color3B(0,154,216);
        //label.setColor(color);
        //label.setAnchorPoint(cc.p(0,0));
        this.addChild(label, 1);
        label.setPosition(cc.p(650 , size.height/2+100));

        var subLabel = cc.LabelTTF.create("-- Base on Cocos2d-html5", "Arial", 24);
        //var color = new cc.Color3B(0,154,216);
        //label.setColor(color);
        //label.setAnchorPoint(cc.p(0,0));
        this.addChild(subLabel, 1);
        subLabel.setPosition(cc.p(800 , size.height/2+50));

        var speakerLabel = cc.LabelTTF.create("@林顺sean", "Arial", 24);
        //var color = new cc.Color3B(0,154,216);
        //label.setColor(color);
        //speakerLabel.setAnchorPoint(cc.p(0,0));
        this.addChild(speakerLabel, 1);
        speakerLabel.setPosition(cc.p(650 , size.height/2-100));

        var teamLabel = cc.LabelTTF.create("Cocos2d-x Team", "Arial", 24);
        //var color = new cc.Color3B(0,154,216);
        //label.setColor(color);
        //speakerLabel.setAnchorPoint(cc.p(0,0));
        this.addChild(teamLabel, 1);
        teamLabel.setPosition(cc.p(650 , size.height/2-150));

    }
});

MainPage.scene = function(){
    var ret = cc.Scene.create();
    var layer = new MainPage();
    layer.init();
    ret.addChild(layer);
    return ret;
};

