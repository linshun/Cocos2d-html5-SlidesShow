var ppt3 = ppt.extend({

    _currentBullet:0,

    onEnter:function () {

        this._super();

        cc.log("I am ppt3. What have we done?");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var fishingjoy = cc.Sprite.create(s_fishingjoy960);
        fishingjoy.setAnchorPoint(cc.p(0.5, 0.5));
        fishingjoy.setScale(0.8);
        fishingjoy.setPosition(cc.p(size.width / 2, size.height / 2- 20));
        this.addChild(fishingjoy, 0);



    },

    addBullet:function(){
        if(this._currentBullet == 0){
            this._currentBullet++;
            // plugin system


        } else {
            this.gotNextScene();
        }

    }


});

ppt3.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt3();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionMoveInL.create(0.8, ret);
};