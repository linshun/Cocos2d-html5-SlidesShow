var ppt7 = ppt.extend({
    _emitter:null,
    onEnter:function () {

        this._super();

        cc.log("I am ppt7. Dom Debug.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var moon = cc.Sprite.create(s_moon);
        moon.setAnchorPoint(cc.p(0.5, 0.5));
        moon.setPosition(cc.p(size.width / 2, size.height / 2 - 20));
        moon.setScale(0.9, 0.8);
        this.addChild(moon, 0);

        var bridge = cc.Sprite.create(s_bridge);
        bridge.setAnchorPoint(cc.p(0.5, 0.5));
        bridge.setPosition(cc.p(size.width - 300, 150));
        bridge.setScale(-0.5, 0.5);
        this.addChild(bridge, 2);

        var niulang = cc.Sprite.create(s_niulang);
        niulang.setAnchorPoint(cc.p(0.5, 0.5));
        niulang.setPosition(cc.p(834, 316));
        niulang.setScale(-0.7, 0.7);
        window.niulang = niulang;
        this.addChild(niulang, 1);

        var jiyou = cc.Sprite.create(s_niulang);
        jiyou.setAnchorPoint(cc.p(0.5, 0.5));
        jiyou.setPosition(cc.p(696, 316));
        jiyou.setScale(0.7, 0.7);
        window.jiyou = jiyou;
        this.addChild(jiyou, 1);

        var zhinv = cc.Sprite.create(s_zhinv);
        zhinv.setAnchorPoint(cc.p(0.5, 0.5));
        zhinv.setPosition(cc.p(220, 400));
        zhinv.setScale(-0.7, 0.7);
        window.zhinv = zhinv;
        this.addChild(zhinv, 1);

        cc.AudioEngine.getInstance().setBackgroundMusicVolume(0.7);
        cc.AudioEngine.getInstance().playBackgroundMusic(s_myHeartWillGoOn, true);

       // Snow
        this._emitter = cc.ParticleSnow.create();
        this.addChild(this._emitter, 10);

        var p = this._emitter.getPosition();
        this._emitter.setPosition(cc.p(p.x, p.y - 110));
        this._emitter.setLife(3);
        this._emitter.setLifeVar(1);

        // gravity
        this._emitter.setGravity(cc.p(0, -10));

        // speed of particles
        this._emitter.setSpeed(130);
        this._emitter.setSpeedVar(30);


        /*var startColor = this._emitter.getStartColor();
         startColor.r = 0.9;
         startColor.g = 0.9;
         startColor.b = 0.9;
         this._emitter.setStartColor(startColor);

         var startColorVar = this._emitter.getStartColorVar();
         startColorVar.b = 0.1;
         this._emitter.setStartColorVar(startColorVar);*/

        this._emitter.setEmissionRate(this._emitter.getTotalParticles() / this._emitter.getLife());

        this._emitter.setTexture(cc.TextureCache.getInstance().addImage(s_snow));
        this._emitter.setShapeType(cc.PARTICLE_STAR_SHAPE);

        //this.setEmitterPosition();


    },

    noParticle:function () {
        if (this._emitter != null) {
            this.removeChild(this._emitter);
        }

    },

    onExit:function () {
        this._super();
        cc.AudioEngine.getInstance().stopBackgroundMusic(false);
    }
});

ppt7.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt7();
    window.snowLayer = layer;
    layer.init();
    ret.addChild(layer);
    return cc.TransitionProgressHorizontal.create(1, ret);
};

window.stopSnow = function () {
    window.snowLayer.noParticle();
    window.snowLayer._emitter = new cc.ParticleSystemQuad();
    window.snowLayer._emitter.initWithTotalParticles(50);
    //this._emitter.autorelease();

    window.snowLayer.addChild(window.snowLayer._emitter, 10);
    window.snowLayer._emitter.setTexture(cc.TextureCache.getInstance().addImage(s_stars1));
    window.snowLayer._emitter.setShapeType(cc.PARTICLE_STAR_SHAPE);
    window.snowLayer._emitter.setDuration(-1);

    // gravity
    window.snowLayer._emitter.setGravity(cc.PointZero());

    // angle
    window.snowLayer._emitter.setAngle(90);
    window.snowLayer._emitter.setAngleVar(360);

    // speed of particles
    window.snowLayer._emitter.setSpeed(320);
    window.snowLayer._emitter.setSpeedVar(20);

    // radial
    window.snowLayer._emitter.setRadialAccel(-120);
    window.snowLayer._emitter.setRadialAccelVar(0);

    // tagential
    window.snowLayer._emitter.setTangentialAccel(30);
    window.snowLayer._emitter.setTangentialAccelVar(0);

    // emitter position
    window.snowLayer._emitter.setPosition(cc.p(760, 340 + 200));
    window.snowLayer._emitter.setPosVar(cc.PointZero());

    // life of particles
    window.snowLayer._emitter.setLife(4);
    window.snowLayer._emitter.setLifeVar(1);

    // spin of particles
    window.snowLayer._emitter.setStartSpin(0);
    window.snowLayer._emitter.setStartSizeVar(0);
    window.snowLayer._emitter.setEndSpin(0);
    window.snowLayer._emitter.setEndSpinVar(0);

    // color of particles
    var startColor = new cc.Color4F(0.5, 0.5, 0.5, 1.0);
    window.snowLayer._emitter.setStartColor(startColor);

    var startColorVar = new cc.Color4F(0.5, 0.5, 0.5, 1.0);
    window.snowLayer._emitter.setStartColorVar(startColorVar);

    var endColor = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
    window.snowLayer._emitter.setEndColor(endColor);

    var endColorVar = new cc.Color4F(0.1, 0.1, 0.1, 0.2);
    window.snowLayer._emitter.setEndColorVar(endColorVar);

    // size, in pixels
    window.snowLayer._emitter.setStartSize(40.0);
    window.snowLayer._emitter.setStartSizeVar(20.0);
    window.snowLayer._emitter.setEndSize(cc.PARTICLE_START_SIZE_EQUAL_TO_END_SIZE);

    // emits per second
    window.snowLayer._emitter.setEmissionRate(window.snowLayer._emitter.getTotalParticles() / window.snowLayer._emitter.getLife());

    // additive
    window.snowLayer._emitter.setBlendAdditive(true);

};

window.starSnow = function () {
    window.snowLayer.noParticle();
    // Snow
    window.snowLayer._emitter = cc.ParticleSnow.create();
    window.snowLayer.addChild(window.snowLayer._emitter, 10);

    var p = window.snowLayer._emitter.getPosition();
    window.snowLayer._emitter.setPosition(cc.p(p.x, p.y - 110));
    window.snowLayer._emitter.setLife(3);
    window.snowLayer._emitter.setLifeVar(1);

    // gravity
    window.snowLayer._emitter.setGravity(cc.p(0, -10));

    // speed of particles
    window.snowLayer._emitter.setSpeed(130);
    window.snowLayer._emitter.setSpeedVar(30);


    /*var startColor = this._emitter.getStartColor();
     startColor.r = 0.9;
     startColor.g = 0.9;
     startColor.b = 0.9;
     this._emitter.setStartColor(startColor);

     var startColorVar = this._emitter.getStartColorVar();
     startColorVar.b = 0.1;
     this._emitter.setStartColorVar(startColorVar);*/

    window.snowLayer._emitter.setEmissionRate(window.snowLayer._emitter.getTotalParticles() / window.snowLayer._emitter.getLife());

    window.snowLayer._emitter.setTexture(cc.TextureCache.getInstance().addImage(s_snow));
    window.snowLayer._emitter.setShapeType(cc.PARTICLE_STAR_SHAPE);

    //this.setEmitterPosition();

};



