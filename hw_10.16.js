// ДЗ 10.16 Декораторы
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var User = /** @class */ (function () {
    function User() {
        this.age = 30;
    }
    __decorate([
        AllowFunc(),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    return User;
}());
function AllowFunc() {
    return function (target, propertyKey) {
        var value;
        var setter = function (newValue) {
            if (newValue > 0) {
                value = newValue;
            }
        };
        var getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
var person = new User();
console.log(person.age); // 30
person.age = 0;
console.log(person.age); // 30
person.age = 20;
console.log(person.age); // 20
export {};
