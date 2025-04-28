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


