var ppt9 = ppt.extend({
    _currentBellet:0,
    _office1:null,
    _office2:null,
    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt9. About Us");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        this._office1 = cc.Sprite.create(s_office1);
        this._office1.setAnchorPoint(cc.p(0.5, 0.5));
        this._office1.setScale(0.96);
        this._office1.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
        this.addChild(this._office1, 1);
    },
    onTouchBegan:function (touch, e) {
        cc.log("touch began");
        this.addBullet();
    },

    addBullet:function () {
        var size = cc.Director.getInstance().getWinSize();
        if (this._currentBellet == 0) {
            this._currentBellet++;

            this._office2 = cc.Sprite.create(s_office2);
            this._office2.setAnchorPoint(cc.p(0.5, 0.5));
            this._office2.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
            this.addChild(this._office2, 1);

        } else if (this._currentBellet == 1) {
            this._currentBellet++;

            this._office1.runAction(cc.ScaleTo.create(0.8, 0.6));
            this._office1.runAction(cc.MoveTo.create(0.8, cc.p(250, 500)));

            this._office2.runAction(cc.ScaleTo.create(0.8, 0.5));
            this._office2.runAction(cc.MoveTo.create(0.8, cc.p(300, 200)));

            var label = cc.LabelTTF.create("Web: www.cocos2d-html5.org", "Arial", 38);
            //var color = new cc.Color3B(0,154,216);
            //label.setColor(color);
            label.setAnchorPoint(cc.p(0, 0.5));
            this.addChild(label, 1);
            label.setPosition(cc.p(500, size.height / 2 + 100));

            var subLabel = cc.LabelTTF.create("WeiBo: @cocos2d-x", "Arial", 38);
            //var color = new cc.Color3B(0,154,216);
            //label.setColor(color);
            subLabel.setAnchorPoint(cc.p(0, 0.5));
            this.addChild(subLabel, 1);
            subLabel.setPosition(cc.p(550, size.height / 2 - 20));

            /*var speakerLabel = cc.LabelTTF.create("@林顺sean", "Arial", 24);
             //var color = new cc.Color3B(0,154,216);
             //label.setColor(color);
             //speakerLabel.setAnchorPoint(cc.p(0,0));
             this.addChild(speakerLabel, 1);
             speakerLabel.setPosition(cc.p(650 , size.height/2-100));*/

            var teamLabel = cc.LabelTTF.create("Cocos2d-x Team", "Arial", 38);
            var color = new cc.Color3B(0, 154, 216);
            teamLabel.setColor(color);
            teamLabel.setAnchorPoint(cc.p(0, 0.5));
            this.addChild(teamLabel, 1);
            teamLabel.setPosition(cc.p(550, size.height / 2 - 120));


        } else if (this._currentBellet == 2) {
            this.gotNextScene();

        }
    }
});

ppt9.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt9();
    layer.init();
    ret.addChild(layer);
    return ret;
};