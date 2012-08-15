var ppt2 = ppt.extend({

    _currentBellet:0,
    _riq:null,
    _google:null,
    _gameFromScratch:null,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt2.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var visitlist = cc.Sprite.create(s_visitlist);
        visitlist.setAnchorPoint(cc.p(0.5, 0.5));
        visitlist.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(visitlist, 1);


    },

    onTouchBegan:function (touch, e) {
        cc.log("touch began");
        this.addBullet();
    },

    addBullet:function () {
        var size = cc.Director.getInstance().getWinSize();
        if (this._currentBellet == 0) {
            this._google = cc.Sprite.create(s_google);
            this._google.setAnchorPoint(cc.p(0.5, 0.5));
            this._google.setPosition(cc.p(size.width / 2, size.height / 2));
            this._google.setScale(0.1);
            this.addChild(this._google, 2);
            this._currentBellet++;
            this._google.runAction(cc.ScaleTo.create(1, 0.8));

        } else if (this._currentBellet == 1) {
            this._google.runAction(cc.ScaleTo.create(1, 0.2));
            this._google.runAction(cc.MoveTo.create(1, cc.p(200, 100)));
            cc.log("add riq");
            this._riq = cc.Sprite.create(s_riq);
            this._riq.setAnchorPoint(cc.p(0.5, 0.5));
            this._riq.setPosition(cc.p(size.width / 2, size.height / 2));
            this._riq.setScale(0.1);
            this.addChild(this._riq, 2);
            this._currentBellet++;
            this._riq.runAction(cc.ScaleTo.create(1, 1));

        } else if (this._currentBellet == 2) {
            this._riq.runAction(cc.ScaleTo.create(1, 0.2));
            this._riq.runAction(cc.MoveTo.create(1, cc.p(size.width / 2, 100)));
            var zynga = cc.Sprite.create(s_zynga);
            zynga.setPosition(cc.p(size.width / 2, 100));
            zynga.runAction(cc.ScaleTo.create(1, 0.1));
            this.addChild(zynga, 2);
            this._gameFromScratch = cc.Sprite.create(s_thirdparty);
            this._gameFromScratch.setAnchorPoint(cc.p(0.5, 0.5));
            this._gameFromScratch.setPosition(cc.p(size.width / 2, size.height / 2));
            this._gameFromScratch.setScale(0.1);
            this._gameFromScratch.runAction(cc.ScaleTo.create(1, 0.8));
            this.addChild(this._gameFromScratch, 2);
            this._currentBellet++;
        } else if (this._currentBellet == 3) {
            this._currentBellet++;
            this._gameFromScratch.runAction(cc.ScaleTo.create(1, 0.15));
            this._gameFromScratch.runAction(cc.MoveTo.create(1, cc.p(size.width - 200, 100)));

        } else {
            this.gotNextScene();
        }

    }

});

ppt2.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt2();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionJumpZoom.create(1.0, ret);
};