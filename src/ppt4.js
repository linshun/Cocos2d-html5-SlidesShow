var ppt4 = ppt.extend({
    _currentBellet:0,

    onEnter:function () {

        this._super();


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
        var birdLayer = new Birzzle.MainmenuLayer();
        birdLayer.init();
        this.addChild(birdLayer, 2);
        // show the game video

        // How long to develop such a game?


    },



    addBullet:function(){
        cc.log("ppt4 addBullet.")
        if(this._currentBellet == 0){
            this._currentBellet++;
            var size = cc.Director.getInstance().getWinSize();
            var label = cc.LabelTTF.create("开发时间:", "Arial", 58);
            //var color = new cc.Color3B(255,0,0);
            //label.setColor(color);
            label.setAnchorPoint(cc.p(0,0.5));
            this.addChild(label, 3);
            label.setPosition(cc.p(size.width -300 , 520));

            var subLabel = cc.LabelTTF.create(" < 40小时", "Arial", 58);
            //var color = new cc.Color3B(255,0,0);
            //subLabel.setColor(color);
            subLabel.setAnchorPoint(cc.p(0,0.5));
            this.addChild(subLabel, 3);
            subLabel.setPosition(cc.p(size.width -300 , 440));

        } else if(this._currentBellet == 1){
            this.gotNextScene();
        }

    }
});

ppt4.scene = function(){
    var ret = cc.Scene.create();
    var layer = new ppt4();
    layer.init();
    ret.addChild(layer);
    return ret;
};