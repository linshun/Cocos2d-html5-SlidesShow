/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var TimeLineppt = cc.Scene.extend({
    ctor:function(){
        this._super();
        this.entries = [];
        this.curEntry = -1;
    },
    numberSuffix:function(n)
    {
        n = (n < 0) ? -n : n;
        if(10 < (n%100) && (n%100) < 14) return "th";
        switch(n % 10) {
            case 1:
                return "st";

            case 2:
                return "nd";

            case 3:
                return "rd";

            default:
                return "th";
        }
    },
    addChildren:function(){
        for(var i = 0; i < arguments.length; i++)
        {
            this.addChild(arguments[i]);
        }
    },
    getMonthByNum:function(n){
        var months = ['','JAN', 'FEB',
                     'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP','OCT','NOV','DEC'];
        return months[n];
    },
    curEntry:-1,
    addBullet:function(){
        var ret = false;
        this.curEntry++;
        var entry = this.entries[this.curEntry];
        if(entry)
        {
            ret = true;
            this.addChild(entry);
            entry.setRotation(20);
            entry.setPosition(cc.p(50,200));
            entry.titleLabel.setScaleX(0.01);
            entry.titleLabel.setSkewY(-20);
            entry.runAction(cc.EaseSineOut.create(cc.MoveBy.create(1.0, cc.p(80,300))));
            entry.runAction(cc.EaseSineOut.create(cc.RotateBy.create(1.0, -20)));
            setTimeout(function(){
                entry.addChild(entry.titleLabel);
                entry.titleLabel.runAction(cc.EaseElasticOut.create(cc.ScaleTo.create(1.5,1),0.4));
                entry.titleLabel.runAction(cc.EaseElasticOut.create(cc.SkewTo.create(1.5,0,0),0.4));
            },700);
            for(var i = this.curEntry-1; i >=0; i--)
            {
                if(this.curEntry - i ===6)
                {
                    this.entries[i].removeFromParentAndCleanup();
                }
                else
                {
                    var prev = this.entries[i];
                    prev.runAction(cc.EaseSineOut.create(cc.MoveBy.create(1.0, cc.p(-10*prev.getScale(), 50*prev.getScale()*(prev.getScale()*1.1)))));
                    prev.runAction(cc.EaseSineOut.create(cc.RotateBy.create(1.0, -7)));
                    prev.runAction(cc.EaseSineOut.create(cc.ScaleBy.create(1, 0.8)));
                    var opac = 255-((this.curEntry-i)*51);
                    if(opac>=0)
                    {
                        prev.monthlabel.runAction(cc.EaseSineOut.create(cc.FadeTo.create(1, opac)));
                        prev.daylabel.runAction(cc.EaseSineOut.create(cc.FadeTo.create(1, opac)));
                        prev.titleLabel.runAction(cc.EaseSineOut.create(cc.FadeTo.create(1, opac)));
                        prev.numsuffix.runAction(cc.EaseSineOut.create(cc.FadeTo.create(1, opac)));
                    }

                    if(prev.node)
                    {
                        if(opac === 102)
                        {
                            prev.node.removeFromParentAndCleanup();
                        }
                        else{
                            prev.node.runAction(cc.EaseSineOut.create(cc.FadeTo.create(1, ((opac-153)<0)?0:opac-153)));
                        }
                    }
                }
            }
        } else {
            ret = false;
        }
        return ret;
    },
    entries:null,
    //adding entry layer to the scene and run the action
    addEntry:function(day, month, title, node){
        //var L = cc.LayerColor.create(cc.c4b(255,255,0,20));
        var L = cc.Layer.create();
        L.monthlabel = cc.LabelTTF.create(this.getMonthByNum(month), 'Impact', 40);
        //L.monthlabel.setOpacity(230);
        L.daylabel = cc.LabelTTF.create(day.toString(), 'Impact', 40);
        L.numsuffix = cc.LabelTTF.create(this.numberSuffix(day), 'Impact', 20);
        L.titleLabel = cc.LabelTTF.create(title, 'Impact', 40);

        L.numsuffix.setPosition(cc.p(L.daylabel.getContentSize().width,-15));
        L.monthlabel.setPositionX(L.daylabel.getContentSize().width+L.numsuffix._contentSize.width+12);
        L.titleLabel.setPositionX((L.monthlabel._contentSize.width + L.monthlabel._position.x)+20);
        L.daylabel.setAnchorPoint(cc.p(0,1));
        L.titleLabel.setAnchorPoint(cc.p(0,1));
        L.numsuffix.setAnchorPoint(cc.p(0,1));
        L.monthlabel.setAnchorPoint(cc.p(0,1));

        L.addChildren = this.addChildren;
        L.addChildren(L.monthlabel, L.daylabel, L.numsuffix);

        if(node){
            //if a node is provided, attatch it below title
            L.node = node;
            L.titleLabel.addChild(node);
            node.setAnchorPoint(cc.p(0,1));
            node.ignoreAnchorPointForPosition(false);
            node.setPosition(cc.p(0, -0));
        }

        L.setAnchorPoint(cc.p(0,0));
        this.entries.push(L);
    },
    onEnter:function(){
        this._super();
        var mysprite = cc.Sprite.create(s_job);
        var sprite2 = cc.Sprite.create(s_job);
        var sprite3 = cc.Sprite.create(s_job);

        var sprite4 = cc.Sprite.create(s_job);

        this.addEntry(1,3, 'Cocos2d-html5 Start!!', mysprite);
        this.addEntry(30,3, 'DevCon!',sprite2);
        this.addEntry(28,5, 'Alpha1 Release!!!', sprite3);
        this.addEntry(29,5, 'MoonWarriors!',sprite4);
        this.addEntry(2,6, 'Video Tutorial');
        this.addEntry(6,6, 'GameFromScratch Tutorials');

        this.addEntry(8,6, 'Closure Compiler Supported!!', mysprite);
        this.addEntry(17,6, 'JSDoc!',sprite2);
        this.addEntry(18,6, 'Alpha2 Release!!!', sprite3);
        this.addEntry(28,7, 'Finalized for 3 Engines!',sprite4);
        this.addEntry(15,8, 'Cocos2d-html5 Job!');
        this.addEntry(28,8, 'V2.0 Release!');

        window.coolppt = this;
    }
});