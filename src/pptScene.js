// Add your ppt list
var pptList = [
    {
        title:"",
        pptScene:function () {
            return new MainPage.scene();
        }
    },
    {
        title:"What Is Cocos2d-html5?",
        pptScene:function () {
            return new ppt1.scene();
        }
    },
    {
        title:"We Are A Big Family",
        pptScene:function () {
            return new ppt2.scene();
        }
    },
    {
        title:"No Profit?",
        pptScene:function () {
            return new ppt3.scene();
        }
    },
    {
        title:"Develop With Game Framework",
        pptScene:function () {
            return new ppt4.scene();
        }
    },
    {
        title:"Quick Development",
        pptScene:function () {
            return new ppt5.scene();
        }
    },
    {
        title:"Of Course FishingJoy",
        pptScene:function () {
            return new ppt6.scene();
        }
    },
    {
        title:"RoadMap",
        pptScene:function () {
            return new ppt7.scene();
        }
    },
    {
        title:"WebGL",
        pptScene:function () {
            return new ppt8.scene();
        }
    },
    {
        title:"About Us",
        pptScene:function () {
            return new ppt9.scene();
        }
    },
    {
        title:"Q & A",
        pptScene:function () {
            return new ppt10.scene();
        }
    }

    //ppt4,
    //ppt5,
    //ppt6,
    //ppt7,
    //ppt8,
    //ppt9
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


        var title = pptList[currentPPT].title;
        var label = cc.LabelTTF.create(title, "Arial", 38);
        var color = new cc.Color3B(0, 154, 216);
        label.setColor(color);
        label.setAnchorPoint(cc.p(0, 0));
        this.addChild(label, 1);
        label.setPosition(cc.p(80, size.height - 90));

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



