var LOGOSTATEUP = 0;
var LOGOSTATEDOWN = 1;
var LOGOSTATEMOVE = 2;

var LogoWaveLayer = cc.Layer.extend({
    ctor:function () {
        var spTexture = cc.Sprite.create(s_fishingjoylogo);
        this.addChild(spTexture, 1);

        spTexture.setSkewY(-2);
        var moveup = cc.MoveBy.create(1.5, cc.p(0, 3));
        moveup = cc.EaseInOut.create(moveup, 2);
        var moveupdown = cc.Sequence.create(moveup, moveup.reverse());
        var repeat = cc.RepeatForever.create(moveupdown);

        var skewup = cc.SkewBy.create(1.3, 1, 3);
        skewup = cc.EaseSineInOut.create(skewup);
        var skewupdown = cc.Sequence.create(skewup, skewup.reverse());
        var repeat2 = cc.RepeatForever.create(skewupdown);

        var scaleup = cc.ScaleBy.create(1.1, .99, 1);
        scaleup = cc.EaseSineInOut.create(scaleup);
        var scaleupdown = cc.Sequence.create(scaleup, scaleup.reverse());
        var repeat3 = cc.RepeatForever.create(scaleupdown);

        spTexture.runAction(repeat);
        spTexture.runAction(repeat2);
        spTexture.runAction(repeat3);
    }
});

LogoWaveLayer.create = function () {
    var ret = new LogoWaveLayer();
    if (ret && ret.init()) {
        return ret;
    }
    return null;
};