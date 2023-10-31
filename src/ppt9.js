var ppt9 = ppt.extend({
    _currentBullet:0,
    _cow:null,
    _cell:null,
    _thai:null,
    _angryBirds:null,
    _runner:null,
    _slides:null,
    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt9. Closure Compiler");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        this._cow = cc.Sprite.create(s_cow);
        this._cow.setAnchorPoint(cc.p(0.5, 0.5));
        this._cow.setScale(0.85);
        this._cow.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
        this.addChild(this._cow, 0);

    },

    addBullet:function () {
        cc.log("ppt4 addBullet.")
        if (this._currentBullet == 0) {
            this._currentBullet++;
            var size = cc.Director.getInstance().getWinSize();

            this._cow.runAction(cc.MoveTo.create(1, cc.p(140, 120)));
            this._cow.runAction(cc.ScaleBy.create(1, 0.2));

            this._cell = cc.Sprite.create(s_cell);
            this._cell.setAnchorPoint(cc.p(0.5, 0.5));
            this._cell.setScale(0.1);
            this._cell.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
            this._cell.runAction(cc.ScaleTo.create(1, 0.8));
            this.addChild(this._cell, 0);

        } else if (this._currentBullet == 1) {
            this._currentBullet++;
            var size = cc.Director.getInstance().getWinSize();

            this._cell.runAction(cc.MoveTo.create(1, cc.p(140 + (size.width - 280) / 3, 120)));
            this._cell.runAction(cc.ScaleBy.create(1, 0.22));

            this._angryBirds = cc.Sprite.create(s_angrybirds);
            this._angryBirds.setAnchorPoint(cc.p(0.5, 0.5));
            this._angryBirds.setScale(0.1);
            this._angryBirds.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
            this._angryBirds.runAction(cc.ScaleTo.create(1, 0.6));
            this.addChild(this._angryBirds, 0);

        } else if (this._currentBullet == 2) {
            this._currentBullet++;
            var size = cc.Director.getInstance().getWinSize();

            this._angryBirds.runAction(cc.MoveTo.create(1, cc.p((size.width - 280) * 2 / 3 + 140, 120)));
            this._angryBirds.runAction(cc.ScaleBy.create(1, 0.22));

            this._thai = cc.Sprite.create(s_thai);
            this._thai.setAnchorPoint(cc.p(0.5, 0.5));
            this._thai.setScale(0.1);
            this._thai.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
            this._thai.runAction(cc.ScaleTo.create(1, 0.7));
            this.addChild(this._thai, 0);


        } else if (this._currentBullet == 3) {
            this._currentBullet++;
            var size = cc.Director.getInstance().getWinSize();

            this._thai.runAction(cc.MoveTo.create(1, cc.p(size.width - 140, 120)));
            this._thai.runAction(cc.ScaleBy.create(1, 0.22));

            this._runner = cc.Sprite.create(s_runner);
            this._runner.setAnchorPoint(cc.p(0.5, 0.5));
            this._runner.setScale(0.1);
            this._runner.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
            this._runner.runAction(cc.ScaleTo.create(1, 1));
            this.addChild(this._runner, 0);


        } else if (this._currentBullet == 4) {
            this._currentBullet++;
            var size = cc.Director.getInstance().getWinSize();

            this._runner.runAction(cc.MoveTo.create(1, cc.p(140, size.height / 2 - 20)));
            this._runner.runAction(cc.ScaleBy.create(1, 0.5));

            this._slides = cc.Sprite.create(s_slides);
            this._slides.setAnchorPoint(cc.p(0.5, 0.5));
            this._slides.setScale(0.1);
            this._slides.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
            this._slides.runAction(cc.ScaleTo.create(1, 0.4));
            this.addChild(this._slides, 0);

        } else if (this._currentBullet == 5) {

            this._currentBullet++;
            var size = cc.Director.getInstance().getWinSize();

            this._slides.runAction(cc.MoveTo.create(1, cc.p(size.width - 140, size.height / 2 - 20)));
            this._slides.runAction(cc.ScaleBy.create(1, 0.4));

            this._coconutIsland = cc.Sprite.create(s_coconutisland);
            this._coconutIsland.setAnchorPoint(cc.p(0.5, 0.5));
            this._coconutIsland.setScale(0.1);
            this._coconutIsland.setPosition(cc.p(size.width / 2, size.height / 2));
            this._coconutIsland.runAction(cc.ScaleTo.create(1, 0.85));
            this.addChild(this._coconutIsland, 0);

        } else if (this._currentBullet == 6) {

            this.gotNextScene();
        }
    }



});

ppt9.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt9();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionFade.create(0.8, ret);
};