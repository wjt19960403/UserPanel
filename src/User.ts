class User {
    userName = "";
    Gold = 0;
    Diamonds = 0;
    Level = 0;
    currentExp = 0;
    totalExp = 0;
    heroes: Hero[] = [];

    constructor(name:string,gold,diamonds,level){
        this.userName = name;
        this.Gold = gold;
        this.Diamonds = diamonds;
        this.Level = level;
    }

    get userPowerValue(){
        var powerValue = 0;
        for(var i = 0; i < this.heroes.length; i++){
            powerValue += this.heroes[i].powerValue;
        }
        return powerValue;
    }
}

class Hero extends egret.DisplayObjectContainer{
    Name:string;
    weapon: Weapon[] = [];
    armor: Armor[] = [];
    Level:number;
    currentExp:number = 0;
    growth:number;

    public icon: egret.Bitmap;
   
    constructor(name:string,icon: string,level,grow){
        super();
        this.Name = name;
        this.Level = level;
        this.growth = grow;
        this.icon = CreateBitmapUtil.ByName(icon);
        this.addChild(this.icon);
    }
    get totalExp(){
        return this.Level * ( this.Level + 5 ) * 10;
    }
    get MaxHP(){
        return 480 + ( 20 + this.Strength ) * 2.0
    }
    get MaxMP(){
        return 360 + ( 20 + this.Intelligence ) * 1.2
    }

    get Strength(){
        return 15 + this.Level * this.growth;
    }
    get Agility(){
        return 12 + this.Level * this.growth;
    }
    get Intelligence(){
        return 10 + this.Level * this.growth;
    }


    get powerValue(){
        var wValue = 0;
        var aValue = 0;
        for(var i = 0; i < this.weapon.length; i++){
            wValue += this.weapon[i].powerValue
        }
        for(var i = 0; i < this.armor.length; i++){
            aValue += this.armor[i].powerValue
        }
        return ( this.Agility + this.Strength + this.Intelligence ) * 30 + ( this.MaxHP + this.MaxMP ) * 0.75 + this.Attack * 2.5 + this.Defence * 5 + wValue + aValue;
    }

    get Attack(){
        var weaponValue = 0;
        for(var i = 0; i < this.weapon.length; i++){
            weaponValue += this.weapon[i].attack;
        }
        return weaponValue + 36 + this.Agility * 1.0;
    }

    get Defence(){
        var armorValue = 0;
        for(var i = 0; i < this.armor.length; i++){
            armorValue += this.armor[i].defence;
        }
        return armorValue + 8 + this.Agility * 0.3;
        
    }

}

class Weapon extends egret.DisplayObjectContainer{
    Name:string;
    Quality:number;
    jewel:Jewel[] = [];
    attack = 0;
    itemPanel:Panel;
    icon: egret.Bitmap;

    constructor(name:string,icon:string,atk,quality,itemPanel:Panel){
        super();
        this.Name = name;
        this.attack = atk;
        this.Quality = quality;
        this.icon = CreateBitmapUtil.ByName(icon);
        this.addChild(this.icon);
        this.itemPanel = itemPanel;
    }
    public showPanel(x:number,y:number){
        this.itemPanel.showWeaponPanel(x,y,this);
    }

    get powerValue(){
        var jewelValue:number = 0;
        for(var i = 0; i < this.jewel.length; i++){
            jewelValue += this.jewel[i].powerValue;
        }
        return this.attack * 2.5 * ( this.Quality + 12) / 10 + jewelValue;
    }
}

class Armor extends egret.DisplayObjectContainer{
    Name:string;
    Quality:number;
    jewel:Jewel[] = [];
    defence = 0;
    itemPanel:Panel;
    icon: egret.Bitmap;

    constructor(name:string,icon:string,def,quality,itemPanel:Panel){
        super();
        this.Name = name;
        this.defence = def;
        this.Quality = quality;
        this.icon = CreateBitmapUtil.ByName(icon);
        this.addChild(this.icon);
        this.itemPanel = itemPanel;
    }

    public showPanel(x:number,y:number){
        this.itemPanel.showArmorPanel(x,y,this);
    }

    get powerValue(){
        var jewelValue:number = 0;
        for(var i = 0; i < this.jewel.length; i++){
            jewelValue += this.jewel[i].powerValue;
        }
        return this.defence * 5 * ( this.Quality + 12) / 10 + jewelValue;
    }
}

class Jewel{
    Name:string;
    Quality:number;

    constructor(name:string,quality:number){
        this.Name = name;
        this.Quality = quality;
    }

    get powerValue(){
        return 15 * ( this.Quality + 12) / 10
    }
}