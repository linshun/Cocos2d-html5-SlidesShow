// Add your ppt list
var pptList = [
    {
        title:"MainPage",
        pptScene:function () {
            return new MainPage.scene();
        }
    },
    {
        title:"Why Cocos2d-html5?",
        pptScene:function () {
            return ppt1.scene();
        }
    },
    {
        title:"That is how it goes",
        pptScene:function () {
            return ppt2.scene();
        }
    },

    {
        title:"DOM Debug",
        pptScene:function () {
            return ppt7.scene();
        }
    },

    {
        title:"What is next?", //No Profit?
        pptScene:function () {
            return ppt3.scene();
        }
    },

    {
        title:"WebGL Showcase",
        pptScene:function () {
            return ppt8.scene();
        }
    },

    {
        title:"Happy Children's Day!", //No Profit?
        pptScene:function () {
            return pptHappy61.scene();
        }
    },

    {
        title:"Develop with Game Framework",
        pptScene:function () {
            return ppt4.scene();
        }
    },
    {
        title:"Quick Development",
        pptScene:function () {
            return ppt5.scene();
        }
    },

    /*{
     title:"Closure Compiler",
     pptScene:function () {
     return ppt9.scene();
     }
     },*/

    {
        title:"Of Course FishingJoy",
        pptScene:function () {
            return ppt6.scene();
        }
    },

    {
        title:"", // Q & A
        pptScene:function () {
            return ppt10.scene();
        }
    }

];


var currentPPT = 0;

// ppt template
var ppt = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);
        return true;
    },

    onEnter:function () {

        this._super();
        var size = cc.Director.getInstance().getWinSize();



        if (currentPPT != 0 && currentPPT != pptList.length - 1) {
            var title = pptList[currentPPT].title;
            var label = cc.LabelTTF.create(title, "Arial", 38);
            var color = new cc.Color3B(0, 154, 216);
            label.setColor(color);
            label.setAnchorPoint(cc.p(0, 0));
            this.addChild(label, 1);
            label.setPosition(cc.p(80, size.height - 90));

            var cocos2dhtml5 = cc.Sprite.create(s_cocos2dhtml5);
            cocos2dhtml5.setAnchorPoint(cc.p(0, 0));
            cocos2dhtml5.setPosition(cc.p(60, 10));
            this.addChild(cocos2dhtml5, 1);
        }
        //cc.DOM.convert(cocos2dhtml5) ;

        /* var label = cc.LabelTTF.create("/www.cocos2d-html5.org", "Arial", 28);
         var color = new cc.Color3B(0, 154, 216);
         label.setColor(color);
         label.setAnchorPoint(cc.p(0, 0));
         this.addChild(label, 1);
         label.setPosition(cc.p(200, 10));*/

    },

    onExit:function () {
        this.setTouchEnabled(false);
        this.setKeyboardEnabled(false);
        this._super();
    },
    onTouchBegan:function (touch, e) {

    },

    onKeyDown:function (e) {
        if (e == cc.KEY.left) {
            this.gotPreviousScene();
            cc.log("I am previous key.")

        } else if (e == cc.KEY.right) {

            cc.log("I am next key.")
            this.gotNextScene();
        } else if (e == cc.KEY.space) {
            cc.log("I am space key.")
            this.addBullet();
        }
    },

    onKeyUp:function (e) {
        cc.log("key is up.")

    },

    _itemForTouch:function (touch) {
        var touchLocation = touch.getLocation();
        if (this.getChildren()) {
            var child;
            for (var i = 0; i < this.getChildren().length; i++) {
                child = this.getChildren()[i];
                if (child.isVisible()) {
                    var local = child.convertToNodeSpace(touchLocation);
                    var r = child.boundingBoxToWorld()
                    r.origin = cc.PointZero();
                    if (cc.Rect.CCRectContainsPoint(r, local)) {
                        return child;
                    }
                }
            }
        }
        return null;
    },

    gotNextScene:function () {

        if (currentPPT < pptList.length - 1) {
            currentPPT += 1;
        }
        cc.log(pptList.length);
        cc.log(currentPPT);
        var s = pptList[currentPPT].pptScene();
        cc.Director.getInstance().replaceScene(s);
    },

    gotPreviousScene:function () {
        //console.log("???")
        if (currentPPT > 0) {
            currentPPT -= 1;
        }
        var s = pptList[currentPPT].pptScene();
        cc.Director.getInstance().replaceScene(s);
    },

    addBullet:function () {
        this.gotNextScene();
    }
});

var myPPTScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = pptList[currentPPT].pptScene();
        this.addChild(layer);
        layer.init();
    }
});



