export {}

let message = 'Welcome back'; //Hello World
console.log(message);

let x = 10;  //Variable declaration
let y = 30;

let sum = x + y;
const title = 'AIMDEK';

//Variable types
let isBegginer: boolean = true; 
let total: number = 0;
let name: string = 'Harsh';

let sentence: string = `My name is ${name}
I am a Beginner in typesript `;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3,4];

let person1: [string,number] = ['chris',22];

enum days{Monday = 3, Tuesday, Wednesday}; //index starts with 0 here but we can given our own index value

let d: days = days.Wednesday;
console.log(d); // Incase of normal case it would return 2 but since Monday = 3 it would return 5

let randomValue: any = 10; //any type
randomValue = true;
randomValue = 'Harsh';
console.log(randomValue); //Harsh

let myVariable: unknown = 10;




// console.log(myVariable.name);
// myVariable();
// (myVariable as String).toUpperCase(); //typeassertion in typescript which is same is typecasting in other languages


let a;
a = 10;
a = true;

let b = 20;

let multitype: number | boolean;
multitype = 30;
multitype = true;

let anyType: any;
anyType = 40;



// why we use union instead of any type ?
// because it restricts to given types provided in union whereas any type has no restrictions
// intellisence supports on union but not supports for any keyword 


//function in typescript

function add(num1: number, num2: number): number{
    return num1 + num2;
}

add(5,10);
// add(5,'10'); //throws an error Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

console.log(add(11,5));

//features of typescript functions

//optional parameter: can be used using ? after variable which is required to be optional 
// for using this feature the optional parameter it should always be after the required parameter 

function add1(num1: number, num2?: number): number{
    
    if(num2) 
        return num1 + num2;
    else
        return num1;
}
add1(4,9)
console.log(add1(5));

//default parameter
function add3(num1: number, num2: number = 10): number {
        return num1 + num2;
}

console.log(add3(9,8));
console.log(add3(11)); //takes default value of 10 and returns 21


//Interfaces in Typescript


interface Person {
    firstName: string,
    lastName: string,
    address?: string,
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Harsh',
    lastName: 'Parekh',
};

fullName(p);

// Class and Interfaces in Typescript

class Employee{
         employeeName: string;

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good Morning ${this.employeeName} this is written using method in class`);
    }
}

let emp1 = new Employee('Harsh')
emp1.greet();

//INHERITANCE
class Manager extends Employee {
    constructor(managerName: string){
        super(managerName)
    }

    delegateWork(){
        console.log(`Manager is delegating Tasks ${this.employeeName}`);
        
    }
}

let m1 = new Manager('Tony')
m1.delegateWork()
m1.greet()
console.log(m1.employeeName);

//Access Modifiers used above 
// they are public, private, public 
// by default it is public 