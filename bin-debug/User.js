var User = (function () {
    function User(name, gold, diamonds, level) {
        this.userName = "";
        this.Gold = 0;
        this.Diamonds = 0;
        this.Level = 0;
        this.currentExp = 0;
        this.totalExp = 0;
        this.heroes = [];
        this.userName = name;
        this.Gold = gold;
        this.Diamonds = diamonds;
        this.Level = level;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "userPowerValue"
        ,function () {
            var powerValue = 0;
            for (var i = 0; i < this.heroes.length; i++) {
                powerValue += this.heroes[i].powerValue;
            }
            return powerValue;
        }
    );
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(name, icon, level, grow) {
        _super.call(this);
        this.weapon = [];
        this.armor = [];
        this.currentExp = 0;
        this.Name = name;
        this.Level = level;
        this.growth = grow;
        this.icon = CreateBitmapUtil.ByName(icon);
        this.addChild(this.icon);
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "totalExp"
        ,function () {
            return this.Level * (this.Level + 5) * 10;
        }
    );
    d(p, "MaxHP"
        ,function () {
            return 480 + (20 + this.Strength) * 2.0;
        }
    );
    d(p, "MaxMP"
        ,function () {
            return 360 + (20 + this.Intelligence) * 1.2;
        }
    );
    d(p, "Strength"
        ,function () {
            return 15 + this.Level * this.growth;
        }
    );
    d(p, "Agility"
        ,function () {
            return 12 + this.Level * this.growth;
        }
    );
    d(p, "Intelligence"
        ,function () {
            return 10 + this.Level * this.growth;
        }
    );
    d(p, "powerValue"
        ,function () {
            var wValue = 0;
            var aValue = 0;
            for (var i = 0; i < this.weapon.length; i++) {
                wValue += this.weapon[i].powerValue;
            }
            for (var i = 0; i < this.armor.length; i++) {
                aValue += this.armor[i].powerValue;
            }
            return (this.Agility + this.Strength + this.Intelligence) * 30 + (this.MaxHP + this.MaxMP) * 0.75 + this.Attack * 2.5 + this.Defence * 5 + wValue + aValue;
        }
    );
    d(p, "Attack"
        ,function () {
            var weaponValue = 0;
            for (var i = 0; i < this.weapon.length; i++) {
                weaponValue += this.weapon[i].attack;
            }
            return weaponValue + 36 + this.Agility * 1.0;
        }
    );
    d(p, "Defence"
        ,function () {
            var armorValue = 0;
            for (var i = 0; i < this.armor.length; i++) {
                armorValue += this.armor[i].defence;
            }
            return armorValue + 8 + this.Agility * 0.3;
        }
    );
    return Hero;
}(egret.DisplayObjectContainer));
egret.registerClass(Hero,'Hero');
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, icon, atk, quality, itemPanel) {
        _super.call(this);
        this.jewel = [];
        this.attack = 0;
        this.Name = name;
        this.attack = atk;
        this.Quality = quality;
        this.icon = CreateBitmapUtil.ByName(icon);
        this.addChild(this.icon);
        this.itemPanel = itemPanel;
    }
    var d = __define,c=Weapon,p=c.prototype;
    p.showPanel = function (x, y) {
        this.itemPanel.showWeaponPanel(x, y, this);
    };
    d(p, "powerValue"
        ,function () {
            var jewelValue = 0;
            for (var i = 0; i < this.jewel.length; i++) {
                jewelValue += this.jewel[i].powerValue;
            }
            return this.attack * 2.5 * (this.Quality + 12) / 10 + jewelValue;
        }
    );
    return Weapon;
}(egret.DisplayObjectContainer));
egret.registerClass(Weapon,'Weapon');
var Armor = (function (_super) {
    __extends(Armor, _super);
    function Armor(name, icon, def, quality, itemPanel) {
        _super.call(this);
        this.jewel = [];
        this.defence = 0;
        this.Name = name;
        this.defence = def;
        this.Quality = quality;
        this.icon = CreateBitmapUtil.ByName(icon);
        this.addChild(this.icon);
        this.itemPanel = itemPanel;
    }
    var d = __define,c=Armor,p=c.prototype;
    p.showPanel = function (x, y) {
        this.itemPanel.showArmorPanel(x, y, this);
    };
    d(p, "powerValue"
        ,function () {
            var jewelValue = 0;
            for (var i = 0; i < this.jewel.length; i++) {
                jewelValue += this.jewel[i].powerValue;
            }
            return this.defence * 5 * (this.Quality + 12) / 10 + jewelValue;
        }
    );
    return Armor;
}(egret.DisplayObjectContainer));
egret.registerClass(Armor,'Armor');
var Jewel = (function () {
    function Jewel(name, quality) {
        this.Name = name;
        this.Quality = quality;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "powerValue"
        ,function () {
            return 15 * (this.Quality + 12) / 10;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=User.js.map