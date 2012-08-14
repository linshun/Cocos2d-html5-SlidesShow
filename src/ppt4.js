var ppt4 = ppt.extend({

    onEnter:function () {

        this._super();
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);

        cc.log("I am ppt4. Develop With Game Framework.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var birzzle = cc.Sprite.create(s_birzzlegame);
        birzzle.setAnchorPoint(cc.p(0, 0.5));
        birzzle.setPosition(cc.p(50, size.height / 2));
        this.addChild(birzzle, 1);

        // add some bird and effect on it.

        // show the game video

        // How long to develop such a game?


    },

    onTouchBegan:function (touch, e) {
        cc.log("touch began");
        this.addBullet();
    },

    addBullet:function(){
        this.gotNextScene();
    }
});

ppt4.scene = function(){
    var ret = cc.Scene.create();
    var layer = new ppt4();
    layer.init();
    ret.addChild(layer);
    return ret;
};