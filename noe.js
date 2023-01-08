var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(pattes, couleur) {
        this.pattes = pattes;
        this.couleur = couleur;
    }
    return Animals;
}());
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chat;
}(Animals));
var ChatEuropeen = /** @class */ (function (_super) {
    __extends(ChatEuropeen, _super);
    function ChatEuropeen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatEuropeen;
}(Chat));
var ChatChartreux = /** @class */ (function (_super) {
    __extends(ChatChartreux, _super);
    function ChatChartreux() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChatChartreux;
}(Chat));
var Chien = /** @class */ (function (_super) {
    __extends(Chien, _super);
    function Chien() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Chien;
}(Animals));
var ChienTerreNeuve = /** @class */ (function (_super) {
    __extends(ChienTerreNeuve, _super);
    function ChienTerreNeuve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChienTerreNeuve;
}(Chien));
var ChienMoonMoon = /** @class */ (function (_super) {
    __extends(ChienMoonMoon, _super);
    function ChienMoonMoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChienMoonMoon;
}(Chien));
var Oiseau = /** @class */ (function (_super) {
    __extends(Oiseau, _super);
    function Oiseau() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oiseau;
}(Animals));
var Mesange = /** @class */ (function (_super) {
    __extends(Mesange, _super);
    function Mesange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mesange;
}(Oiseau));
var Merle = /** @class */ (function (_super) {
    __extends(Merle, _super);
    function Merle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Merle;
}(Oiseau));
var Poisson = /** @class */ (function (_super) {
    __extends(Poisson, _super);
    function Poisson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Poisson;
}(Animals));
var Thon = /** @class */ (function (_super) {
    __extends(Thon, _super);
    function Thon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Thon;
}(Poisson));
var Requin = /** @class */ (function (_super) {
    __extends(Requin, _super);
    function Requin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Requin;
}(Poisson));
var Asticot = /** @class */ (function (_super) {
    __extends(Asticot, _super);
    function Asticot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Asticot;
}(Animals));
// ACTIONS //
function photo(animal) {
    console.log("Photo des animaux");
}
function chatQuiMiaule(chat) {
    console.log("Miaou");
}
function aboiement(chien) {
    console.log("Wouaf");
}
function voler(oiseau) {
    console.log("Splaf");
}
function nager(poisson) {
    console.log("Glouglou");
}
function caresserLesAnimauxAQuatrePattes(animal) {
    if (animal.pattes === 4) {
        console.log("Carresse");
    }
    else {
        console.log("Pas de caresse");
    }
}
function nourrir(animal) {
    if (animal.couleur === "noir") {
        console.log("Miam");
    }
    else {
        console.log("Ne mange pas");
    }
}
var medor = new ChienTerreNeuve(4, "noir");
caresserLesAnimauxAQuatrePattes(medor);
nourrir(medor);
