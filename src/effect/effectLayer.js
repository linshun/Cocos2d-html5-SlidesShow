/**
 *  Birzzle for html5
 * authors: HTML5China Team (David Lv , Nero Chan)
 */
var Birzzle = Birzzle || {};

Birzzle.start = function () {
    var controller = new Birzzle.MainmenuController();
    Birzzle.currentGameController = controller;
    return controller.start();
};

Birzzle.LayerType = {backgroud:0, light:1, bird:2, effect:3, feather:4, touch:5, front:6};

//Bird Type
Birzzle.BirdType = {blue:0, grean:1, orange:2, pink:3, purple:4, red:5, white:6, yellow:7};

Birzzle.TickTime = 0.1;

Birzzle.MainmenuController = cc.Class.extend({
    _mainmenuLayer:null,

    ctor:function () {
        this._mainmenuLayer = new Birzzle.MainmenuLayer();
    },
    start:function () {
        var scene = cc.Scene.create();
        this._mainmenuLayer.init();
        scene.addChild(this._mainmenuLayer);
        return scene;
    }
});

Birzzle.WhiteLightSprite = cc.Sprite.extend({
    draw:function (ctx) {
        var context = ctx || cc.renderContext;

        context.globalCompositeOperation = 'lighter';
        this._super(context);
    }
});

Birzzle.WhiteLightSprite.createWithSpriteFrameName = function (spriteFrame) {
    if (typeof(spriteFrame) == 'string') {
        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame(spriteFrame);
        if (pFrame) {
            spriteFrame = pFrame;
        } else {
            cc.log("Invalid spriteFrameName: " + spriteFrame);
            return null;
        }
    }
    var sprite = new Birzzle.WhiteLightSprite();
    if (sprite && sprite.initWithSpriteFrame(spriteFrame)) {
        return sprite;
    }
    return null;
};

Birzzle.MainmenuLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        this.setTouchEnabled(true);

        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_mainmenu);
        //cc.SpriteFrameCache.getInstance().addSpriteFrames("images/main_bg.plist");
        //cc.SpriteFrameCache.getInstance().addSpriteFrames("images/cloud.plist");
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_character);

        //setup background
        //this._setupBackground();

        //setup bird
        var main_cha_blue = Birzzle.MenuBird.create("main_cha_blue.png", 0);
        main_cha_blue.setPosition(cc.p(55, 260));
        main_cha_blue.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_blue, Birzzle.LayerType.bird);
        var cha_blueMoveByDown = cc.MoveBy.create(1.8, cc.p(0, -25));
        var cha_blueMoveByUp = cha_blueMoveByDown.reverse();
        main_cha_blue.runAction(cc.RepeatForever.create(cc.Sequence.create(cha_blueMoveByDown, cha_blueMoveByUp)));

        var main_cha_green = Birzzle.MenuBird.create("main_cha_green.png", 1);
        main_cha_green.setPosition(cc.p(700, 60));
        main_cha_green.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_green, Birzzle.LayerType.bird);

        var main_cha_orange = Birzzle.MenuBird.create("main_cha_orange.png", 2);
        main_cha_orange.setPosition(cc.p(930, 300));
        main_cha_orange.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_orange, Birzzle.LayerType.bird);
        var cha_orangeMoveByDown = cc.MoveBy.create(1.5, cc.p(0, -20));
        var cha_orangeMoveByUp = cha_orangeMoveByDown.reverse();
        main_cha_orange.runAction(cc.RepeatForever.create(cc.Sequence.create(cha_orangeMoveByDown, cha_orangeMoveByUp)));

        var main_cha_pink = Birzzle.MenuBird.create("main_cha_pink.png", 3);
        main_cha_pink.setPosition(cc.p(30, 165));
        main_cha_pink.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_pink, Birzzle.LayerType.bird);
        var cha_pinkMoveByDown = cc.MoveBy.create(1, cc.p(0, -10));
        var cha_pinkMoveByUp = cha_pinkMoveByDown.reverse();
        main_cha_pink.runAction(cc.RepeatForever.create(cc.Sequence.create(cha_pinkMoveByDown, cha_pinkMoveByUp)));

        var main_cha_purple = Birzzle.MenuBird.create("main_cha_purple.png", 4);
        main_cha_purple.setPosition(cc.p(300, 50));
        main_cha_purple.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_purple, Birzzle.LayerType.bird);

        var main_cha_red = Birzzle.MenuBird.create("main_cha_red.png", 5);
        main_cha_red.setPosition(cc.p(100, 50));
        main_cha_red.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_red, Birzzle.LayerType.front);

        var main_cha_white = Birzzle.MenuBird.create("main_cha_white.png", 6);
        main_cha_white.setPosition(cc.p(80, 400));
        main_cha_white.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_white, Birzzle.LayerType.bird);
        var cha_whiteMoveByDown = cc.MoveBy.create(2.5, cc.p(0, -20));
        var cha_whiteMoveByUp = cha_whiteMoveByDown.reverse();
        main_cha_white.runAction(cc.RepeatForever.create(cc.Sequence.create(cha_whiteMoveByDown, cha_whiteMoveByUp)));

        var main_cha_yellow = Birzzle.MenuBird.create("main_cha_yellow.png", 7);
        main_cha_yellow.setPosition(cc.p(850, 90));
        main_cha_yellow.setAnchorPoint(cc.p(0, 0));
        this.addChild(main_cha_yellow, Birzzle.LayerType.front);

        //setup title
        /*var main_title = cc.Sprite.create("res/images/title.png");
        main_title.setPosition(cc.p(384, 620));
        main_title.setAnchorPoint(cc.p(0.5, 0.5));
        this.addChild(main_title, Birzzle.LayerType.front);
        var main_titleMoveByDown = cc.MoveBy.create(2, cc.p(0, -20));
        var main_titleMoveByUp = main_titleMoveByDown.reverse();
        main_title.runAction(cc.RepeatForever.create(cc.Sequence.create(main_titleMoveByDown, main_titleMoveByUp)));
*/
        /*var ttf = cc.LabelTTF.create("如何快速开发HTML5游戏？","微软雅黑 Bold",45);
         ttf.setPosition(cc.p(512,420));
         ttf.setColor(new cc.Color3B(117,25,0));
         this.addChild(ttf);

         var ccs = cc.MenuItemImage.create("images/cocos2d.png","images/cocos2d.png",this,this.goPPT1);
         ccs.setPosition(cc.p(0,-240));
         var menu = cc.Menu.create(ccs);
         this.addChild(menu);*/
    },
    /*goPPT1:function(){
     var s = ppt1.scene();
     cc.Director.getInstance().replaceScene(cc.TransitionProgressRadialCW.create(1.0,s));
     },*/
    onEnter:function () {
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        this._super();
    },

    onExit:function () {
        cc.Director.getInstance().getTouchDispatcher().removeDelegate(this);
        this._super();
    },

    onTouchBegan:function (touch, e) {
        var targetBird = this._itemForTouch(touch);
        if (targetBird != null) {
            if (targetBird.getState() == Birzzle.MenuBirdState.normal) {
                targetBird.shake();
            }
        }
    },

    /* _setupBackground:function () {

     var bg_sky = cc.Sprite.create("images/menuBg.jpg");
     bg_sky.setPosition(cc.p(0, 0));
     bg_sky.setAnchorPoint(cc.p(0, 0));
     this.addChild(bg_sky, Birzzle.LayerType.backgroud);

     //setup light
     var main_bg_light = Birzzle.WhiteLightSprite.createWithSpriteFrameName("main_bg_light.png");
     main_bg_light.setPosition(cc.p(512, 200));
     main_bg_light.setAnchorPoint(cc.p(0.5, 0.5));
     main_bg_light.setScale(1.8);
     this.addChild(main_bg_light, Birzzle.LayerType.backgroud);

     for (var i = 1; i <= 6; i++) {
     var main_bg_lightTemp = Birzzle.WhiteLightSprite.createWithSpriteFrameName("main_bg_light.png");
     main_bg_lightTemp.setPosition(cc.p(main_bg_light.getContentSize().width / 2, main_bg_light.getContentSize().height / 2));
     main_bg_lightTemp.setAnchorPoint(cc.p(0.5, 0.5));
     main_bg_lightTemp.setRotation(i * 30);
     //main_bg_lightTemp.setScale(1.2);
     main_bg_light.addChild(main_bg_lightTemp, Birzzle.LayerType.backgroud);
     }
     var rotateAction = cc.RotateBy.create(0.5, 10);
     main_bg_light.runAction(cc.RepeatForever.create(rotateAction));

     var mainFrontTreeLeft = cc.Sprite.createWithSpriteFrameName("main_trees_a.png");
     mainFrontTreeLeft.setPosition(cc.p(0, cc.originalCanvasSize.height - mainFrontTreeLeft.getContentSize().height));
     mainFrontTreeLeft.setAnchorPoint(cc.p(0, 0));
     this.addChild(mainFrontTreeLeft, Birzzle.LayerType.front);

     var mainFrontTreeRight = cc.Sprite.createWithSpriteFrameName("main_trees_b.png");
     mainFrontTreeRight.setPosition(cc.p(cc.originalCanvasSize.width - mainFrontTreeRight.getContentSize().width,
     cc.originalCanvasSize.height - mainFrontTreeRight.getContentSize().height));
     mainFrontTreeRight.setAnchorPoint(cc.p(0, 0));
     this.addChild(mainFrontTreeRight, Birzzle.LayerType.front);
     },*/

    _itemForTouch:function (touch) {
        var touchLocation = touch.getLocation();
        if (this.getChildren()) {
            var child;
            for (var i = 0; i < this.getChildren().length; i++) {
                child = this.getChildren()[i];
                if (child instanceof Birzzle.MenuBird && child.isVisible()) {
                    var local = child.convertToNodeSpace(touchLocation);
                    var r = child.getBoundingBoxToWorld()
                    r.origin = cc.PointZero();
                    if (cc.Rect.CCRectContainsPoint(r, local)) {
                        return child;
                    }
                }
            }
        }
        return null;
    }
});

/*cc.adjustSizeForWindow = function () {
 if (document.documentElement.clientHeight > cc.originalCanvasSize.height)
 return;

 var margin = document.documentElement.clientWidth - document.body.clientWidth;
 if (document.documentElement.clientWidth < cc.originalCanvasSize.width) {
 cc.canvas.width = cc.originalCanvasSize.width;
 } else {
 cc.canvas.width = document.documentElement.clientWidth - margin;
 }
 //if (document.documentElement.clientHeight < cc.originalCanvasSize.height) {
 //cc.canvas.height = cc.originalCanvasSize.height;
 //} else {
 cc.canvas.height = document.documentElement.clientHeight - margin - 5;
 //}

 var xScale = cc.canvas.width / cc.originalCanvasSize.width;
 var yScale = cc.canvas.height / cc.originalCanvasSize.height;
 if (xScale > yScale) {
 xScale = yScale;
 }
 cc.canvas.width = cc.originalCanvasSize.width * xScale;
 cc.canvas.height = cc.originalCanvasSize.height * xScale;

 var parentElement = document.getElementById("Cocos2dGameContainer");
 if(parentElement){
 parentElement.style.width = cc.canvas.width + "px";
 parentElement.style.height = cc.canvas.height + "px";
 }

 cc.renderContext.translate(0, cc.canvas.height);
 cc.renderContext.scale(xScale, xScale);
 cc.Director.getInstance().setContentScaleFactor(xScale);
 };*/

Birzzle.MenuBirdState = {normal:0, shake:1, destroying:2, destroyed:3};

Birzzle.MenuBird = cc.Sprite.extend({
    _status:Birzzle.MenuBirdState.normal,
    _isShakeLeft:false,
    _colorType:null,
    ctor:function (type) {
        this._colorType = type;
    },
    getState:function () {
        return this._status;
    },

    setState:function (v) {
        this._status = v;
    },

    shake:function () {
        Birzzle.playEffect(s_Bird_vibrationSFX, false);
        this.setState(Birzzle.MenuBirdState.shake);
        this._isShakeLeft = true;
        this.getScheduler().unscheduleAllSelectorsForTarget(this);
        this.schedule(this._shakeMove, 0.02);
        this.schedule(this._shakeEnd, Birzzle.TickTime * 10);
    },

    _shakeMove:function () {
        this._isShakeLeft = !this._isShakeLeft;
        if (!this._isShakeLeft) {
            this.setPositionX(this.getPositionX() - 3);
        } else {
            this.setPositionX(this.getPositionX() + 3);
        }
    },

    _shakeEnd:function () {
        this._status = Birzzle.MenuBirdState.destroying;
        this.unschedule(this._shakeMove);
        this.unschedule(this._shakeEnd);
        this.destroyed();
    },

    destroyed:function () {
        Birzzle.playEffect(s_Bird_removeSFX, false);
        //show ice box crack
        var menubirdNode = new Birzzle.MenuBirdEffect(this._colorType);
        menubirdNode.setPosition(new cc.Point(this.getPositionX() + this.getContentSize().width / 2, this.getPositionY() + this.getContentSize().height / 2));
        this.getParent().addChild(menubirdNode, Birzzle.LayerType.front);
        menubirdNode.playEffect();
        this.removeFromParentAndCleanup(true);
    },

    doFailAction:function () {
        var selfPointer = this;
        var downAction = cc.MoveBy.create(0.5, new cc.Point(0, -(100 + Math.random() * 200)));

        this.runAction(cc.Sequence.create(downAction, cc.CallFunc.create(this, function () {
            selfPointer.shake();
        })));
    }
});

Birzzle.MenuBird.create = function (spriteFrameName, type) {
    var block = new Birzzle.MenuBird(type);
    block.initWithSpriteFrame(cc.SpriteFrameCache.getInstance().getSpriteFrame(spriteFrameName));
    return block;
};


Birzzle.MenuBirdEffect = cc.Node.extend({
    _birdArray:null,
    _birdAmount:15,
    ctor:function (type) {
        this._birdArray = [];
        for (var i = 0; i < this._birdAmount; i++) {
            var idx = 0 | (i / 2);
            var row = 0 | (idx / 3);
            var col = idx % 3;
            var tmpFeather = Birzzle.MenuBirdEffectElement.create("box0" + type + "_feather.png");
            var moveToX = ((row * 45) - 45 ) - (0 | (Math.random() * 40));
            var moveToY = ((col * 45) - 45) - (0 | (Math.random() * 40));
            tmpFeather.setGlobalPosition(new cc.Point(moveToX, moveToY));
            tmpFeather.setRotation(180 * Math.random());
            this._birdArray.push(tmpFeather);
            this.addChild(tmpFeather);
        }
    },

    playEffect:function () {
        for (var i = 0; i < this._birdArray.length; i++) {
            this._birdArray[i].playEffect();
        }

        this.runAction(cc.Sequence.create(cc.DelayTime.create(0.6), cc.CallFunc.create(this, function () {
            this.removeFromParentAndCleanup(true);
        })));
    }
});

Birzzle.MenuBirdEffectElement = cc.Sprite.extend({
    _globalPosition:null,

    setGlobalPosition:function (globalPos) {
        this._globalPosition = globalPos;
    },

    playEffect:function () {
        var delayTime = Math.random() / 8;
        var randomY = 100 * Math.random();

        this.runAction(cc.Sequence.create(
            cc.DelayTime.create(delayTime),
            cc.MoveBy.create(0.1, this._globalPosition),
            cc.Spawn.create(
                cc.RotateBy.create(0.25 * Math.random(), (0 | (180 * Math.random()))),
                cc.MoveBy.create(1, new cc.Point(0, -randomY)),
                cc.FadeTo.create(1, 0)
            ),
            cc.CallFunc.create(this, function () {
                    this.removeFromParentAndCleanup(true);
                }
            )
        )
        );
    }
});

Birzzle.MenuBirdEffectElement.create = function (spriteFrameName, type) {
    var block = new Birzzle.MenuBirdEffectElement(type);
    block.initWithSpriteFrame(cc.SpriteFrameCache.getInstance().getSpriteFrame(spriteFrameName));
    return block;
};
