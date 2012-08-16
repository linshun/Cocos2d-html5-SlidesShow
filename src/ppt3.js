var ppt3 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt3. No Profit.");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);


        var layer = cc.Layer.create();
        // Upper Label
        var label = cc.LabelBMFont.create("NO PROFIT ?", "res/fonts/bitmapFontTest.fnt");

        layer.addChild(label);
        layer.setScale(2);
        this.addChild(layer);

        var s = cc.Director.getInstance().getWinSize();

        label.setPosition(cc.p(s.width / 2, s.height / 2));
        label.setAnchorPoint(cc.p(0.5, 0.5));

       /* var NChar = label.getChildByTag(0);
        var OChar = label.getChildByTag(1);
        var questionmarkChar = label.getChildByTag(10);

        var rotate = cc.RotateBy.create(2, 360);
        var rot_4ever = cc.RepeatForever.create(rotate);

        var scale = cc.ScaleBy.create(2, 1.5);
        var scale_back = scale.reverse();
        var scale_seq = cc.Sequence.create(scale, scale_back, null);
        var scale_4ever = cc.RepeatForever.create(scale_seq);

        var jump = cc.JumpBy.create(0.5, cc.PointZero(), 60, 1);
        var jump_4ever = cc.RepeatForever.create(jump);

        var fade_out = cc.FadeOut.create(1);
        var fade_in = cc.FadeIn.create(1);
        var seq = cc.Sequence.create(fade_out, fade_in, null);
        var fade_4ever = cc.RepeatForever.create(seq);

        questionmarkChar.runAction(jump_4ever);
        questionmarkChar.runAction(scale_4ever);

        OChar.runAction(rot_4ever);
        NChar.runAction(fade_4ever);*/

    }
});

ppt3.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt3();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionMoveInL.create(1, ret);
};