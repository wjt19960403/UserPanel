var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        _super.call(this);
        this.background = CreateBitmapUtil.ByName("Sprite_Select_png");
        this.close = CreateBitmapUtil.ByName("Sprite_Close_png");
        this.text = new egret.TextField;
        this.container = new egret.DisplayObjectContainer;
        this.addChild(this.container);
        this.container.addChild(this.background);
        this.container.addChild(this.close);
        this.close.touchEnabled = true;
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclose, this);
        this.container.addChild(this.text);
        this.hidePanel();
    }
    var d = __define,c=Panel,p=c.prototype;
    p.showWeaponPanel = function (x, y, weapon) {
        this.container.x = x;
        this.container.y = y;
        this.container.alpha = 1;
        this.setChildIndex(this.container, 1000);
        this.text.text = weapon.Name + "\n战斗力：" + weapon.powerValue;
    };
    p.showArmorPanel = function (x, y, armor) {
        this.container.x = x;
        this.container.y = y;
        this.container.alpha = 1;
        this.setChildIndex(this.container, 1000);
        this.text.text = armor.Name + "\n战斗力：" + armor.powerValue;
    };
    p.hidePanel = function () {
        this.container.alpha = 0;
    };
    p.onclose = function (e) {
        this.hidePanel();
        this.setChildIndex(this.container, 0);
    };
    return Panel;
}(egret.DisplayObjectContainer));
egret.registerClass(Panel,'Panel');
//# sourceMappingURL=Panel.js.map