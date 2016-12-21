class Panel extends egret.DisplayObjectContainer{
    background:egret.Bitmap;
    text:egret.TextField;
    container:egret.DisplayObjectContainer;
    close:egret.Bitmap;
     public constructor(){
         super();
         this.background = CreateBitmapUtil.ByName("Sprite_Select_png");
         this.close = CreateBitmapUtil.ByName("Sprite_Close_png");
         this.text = new egret.TextField;
         this.container = new egret.DisplayObjectContainer;
         this.addChild(this.container);
         this.container.addChild(this.background);
         this.container.addChild(this.close);
         this.close.touchEnabled = true;
         this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclose,this);
         this.container.addChild(this.text);
         this.hidePanel();

     }

     public showWeaponPanel(x:number,y:number,weapon:Weapon){
         this.container.x = x;
         this.container.y = y;
         this.container.alpha = 1;
         this.setChildIndex(this.container,1000)
         this.text.text = weapon.Name + "\n战斗力：" + weapon.powerValue;
     }
     public showArmorPanel(x:number,y:number,armor:Armor){
         this.container.x = x;
         this.container.y = y;
         this.container.alpha = 1;
         this.setChildIndex(this.container,1000)
         this.text.text = armor.Name + "\n战斗力：" + armor.powerValue;
     }

     public hidePanel(){
         this.container.alpha = 0;
     }

     public onclose(e:egret.TouchEvent){
         this.hidePanel();
         this.setChildIndex(this.container,0)
     }
}

