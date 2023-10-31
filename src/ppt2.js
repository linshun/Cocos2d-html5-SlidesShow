var ppt2 = ppt.extend({

    _currentBullet:0,
    _timeLine:null,
    _riq:null,
    _google:null,
    _gameFromScratch:null,

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        cc.log("I am ppt2.The Stories before FishingJoy");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        /*var moonWarriors = MoonWarriorsSysMenu.create();

        this.addChild(moonWarriors,2);
        moonWarriors.setScale(0.8);

        moonWarriors.setPosition(cc.p(size.width / 2, size.height / 2 - 200))
*/
        this._timeLine = new TimeLineppt();

        this.addChild(this._timeLine);

        this._timeLine.addBullet();

    },


    addBullet:function(){
        if(this._timeLine.addBullet() == false) {
            this.gotNextScene();
        }
    }

});

ppt2.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt2();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionJumpZoom.create(1, ret);
};