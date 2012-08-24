var ppt3 = ppt.extend({

    _currentBullet:0,

    onEnter:function () {

        this._super();

        cc.log("I am ppt3. What is next?");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        // WebGL
        var webgl = cc.Sprite.create(s_webgldemo);
        webgl.setAnchorPoint(cc.p(0.5, 0.5));
        webgl.setPosition(cc.p(250, 480));
        webgl.setScale(0.6);
        this.addChild(webgl, 1);

    },

    addBullet:function(){
        if(this._currentBullet == 0){
            this._currentBullet++;
            // plugin system
            var plugin = cc.Sprite.create(s_plugin);
            plugin.setAnchorPoint(cc.p(0.5, 0.5));
            plugin.setPosition(cc.p(700, 250));
            //plugin.setScale(0.6);
            this.addChild(plugin, 1);


            // tools
        }
    }


});

ppt3.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt3();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionMoveInL.create(1, ret);
};