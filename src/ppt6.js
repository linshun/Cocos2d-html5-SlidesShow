var ppt6 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt6. Of Course FishingJoy.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);


        var fishingJoyGround = cc.Sprite.create(s_fishingjoybackground);
        fishingJoyGround.setAnchorPoint(cc.p(0.5, 0.5));
        fishingJoyGround.setScale(0.75);
        fishingJoyGround.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
        this.addChild(fishingJoyGround, 0);

        // add the logo of fishing joy and play effect.
        var fishingJoy1 = cc.Sprite.create(s_fishingjoy1);
        fishingJoy1.setAnchorPoint(cc.p(0.5, 0.5));
        fishingJoy1.setPosition(cc.p(size.width / 2, 280));
        fishingJoy1.setScale(0.9, 0.8);
        this.addChild(fishingJoy1, 2);

        var label = cc.LabelTTF.create("趟雷，", "Arial", 48);
        //var color = new cc.Color3B(255,0,0);
        //label.setColor(color);
        label.setAnchorPoint(cc.p(0, 0.5));
        this.addChild(label, 3);
        label.setPosition(cc.p(size.width / 2 - 100, 340));

        var subLabel = cc.LabelTTF.create("填坑，", "Arial", 48);
        //var color = new cc.Color3B(255,0,0);
        //subLabel.setColor(color);
        subLabel.setAnchorPoint(cc.p(0, 0.5));
        this.addChild(subLabel, 3);
        subLabel.setPosition(cc.p(size.width / 2 - 100, 280));


        var teamLabel = cc.LabelTTF.create("欢迎吐槽！", "Arial", 48);
        //var color = new cc.Color3B(255,0,0);
        //teamLabel.setColor(color);
        teamLabel.setAnchorPoint(cc.p(0, 0.5));
        this.addChild(teamLabel, 3);
        teamLabel.setPosition(cc.p(size.width / 2 - 100, 220));

        // show fishingjoy demo
        var fishingJoyLogo = LogoWaveLayer.create();
        fishingJoyLogo.setPosition(cc.p(size.width / 2 - 40, size.height - 160));
        fishingJoyLogo.setScale(0.75);
        //fishingJoyLogo.setRotation(-5);
        this.addChild(fishingJoyLogo, 1);

        var particle2 = cc.ParticleSystemQuad.create("res/images/qipao3.plist");
        particle2._dontTint = true;
        particle2.setTotalParticles(100);
        particle2.setDrawMode(cc.PARTICLE_TEXTURE_MODE);
        this.addChild(particle2);
        particle2.setPosition(cc.p(800, 200));

        var particle3 = cc.ParticleSystemQuad.create("res/images/qipao4.plist");
        this.addChild(particle3);
        particle3.setTotalParticles(30);
        particle3._dontTint = true;
        particle3.setDrawMode(cc.PARTICLE_TEXTURE_MODE);
        particle3.setPosition(cc.p(200, 200));
    }


});

ppt6.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt6();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionProgressOutIn.create(0.8, ret);
};