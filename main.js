"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome back'; //Hello World
console.log(message);
var x = 10; //Variable declaration
var y = 30;
var sum = x + y;
var title = 'AIMDEK';
//Variable types
var isBegginer = true;
var total = 0;
var name = 'Harsh';
var sentence = "My name is ".concat(name, "\nI am a Beginner in typesript ");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3, 4];
var person1 = ['chris', 22];
var days;
(function (days) {
    days[days["Monday"] = 3] = "Monday";
    days[days["Tuesday"] = 4] = "Tuesday";
    days[days["Wednesday"] = 5] = "Wednesday";
})(days || (days = {}));
; //index starts with 0 here but we can given our own index value
var d = days.Wednesday;
console.log(d); // Incase of normal case it would return 2 but since Monday = 3 it would return 5
var randomValue = 10; //any type
randomValue = true;
randomValue = 'Harsh';
console.log(randomValue); //Harsh
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// (myVariable as String).toUpperCase(); //typeassertion in typescript which is same is typecasting in other languages
var a;
a = 10;
a = true;
var b = 20;
var multitype;
multitype = 30;
multitype = true;
var anyType;
anyType = 40;
// why we use union instead of any type ?
// because it restricts to given types provided in union whereas any type has no restrictions
// intellisence supports on union but not supports for any keyword 
//function in typescript
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5,'10'); //throws an error Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
console.log(add(11, 5));
//features of typescript functions
//optional parameter: can be used using ? after variable which is required to be optional 
// for using this feature the optional parameter it should always be after the required parameter 
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add1(4, 9);
console.log(add1(5));
//default parameter
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add3(9, 8));
console.log(add3(11)); //takes default value of 10 and returns 21
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Harsh',
    lastName: 'Parekh',
};
fullName(p);
// Class and Interfaces in Typescript
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName, " this is written using method in class"));
    };
    return Employee;
}());
var emp1 = new Employee('Harsh');
emp1.greet();
//INHERITANCE
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager is delegating Tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Tony');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//Access Modifiers used above 
// they are public, private, public 
// by default it is public 
