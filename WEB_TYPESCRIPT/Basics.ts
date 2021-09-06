// let message: string = 'Hello World';
// console.log(message);

// function greeter(person) {  
//     return "Hello, " + person;  
// }  
// let user = 'JavaTpoint';  
// console.log(greeter(user));  
//Functions
function addition(a,b){
    return a+b;
}
var sum = addition(5,4);
console.log("Addition"+sum);

//number

let a:number = 34;
console.log(a);

//String

let firstname:string = "Suchit";
console.log(firstname);

//Type any

let num:any=123;
let str:any="GDTC";
console.log(num,str);

//User Defined
//Array

var list : number[] = [1, 3, 5];
console.log(list);  

//tuple
// let n:[string,number];
// n=["Hello",56];
// console.log(n);

//class
class Point {
    x = 0;
    y = 0;
  }
   
  const pt = new Point();
  // Prints 0, 0
  console.log(`${pt.x}, ${pt.y}`);

  //String methods
  //charAt

var st:string="Suchit";

st.charAt(0);

console.log(st.charAt(0));

//concat

var one:string="Suchit";
var two:string="koli";
console.log(one.concat(two));

//indexof

let cap:string="Go digital Technology";
console.log(cap.indexOf('d'));

//replace

let old:string="Suchit suchit";
let str2:string="koli";
console.log(old.replace('suchit','koli'));

//touppercase

let str3:string="suchit";
console.log(str3.toUpperCase());

//Array
//push

var names:Array<string>=["Suchit","Devesh"];
names.push("amit")
console.log(names);

//pop

names.pop();
console.log(names);

//sort

names.sort();
console.log(names);

//concat

var last:Array<string>=["jha","koli"];
names=names.concat(last);
console.log(names);

//enum

enum office{
    department,
    employee,
    staff,
}
console.log(office);

//Array slice 
// 02-09-2021

var num1:Array<number>=[1,2,3,4,5,6];
num1=num1.slice(2);

console.log(num1);
let sum1:number=0;
for(let i=0;i<num1.length;i++)
{
    sum1=(sum1+num1[i]);
    
}
console.log(sum1);

//union

function displayOf(code: (string|number)){
    if(typeof(code)==="number"){
        console.log("code is number")
    }else if(typeof(code)==="string"){
        console.log("code is string")
    }
    }
    displayOf("suchit")

var arr1 =[1,2,"value"];
console.log(arr1);

//Assertion

interface Student{
    name : string;
    mark : number;
}
let stud = <Student>{};
stud.name="Suchit";
stud.mark=78;
console.log(stud);

//if

let x:number=10 ,y=20;
x<y? console.log("y is greater than x"): console.log("x is greater than y");

//switch

let month:number=3;
switch(month){
    case 0: 
        console.log("Jan");
        break;
    case 1:
        console.log("feb");
        break;
    case 2:
        console.log("march");
        break;
    case 3:
        console.log("Apr");
        break;
}

//For of and in

let arr2:number[]=[1,2,3,4];

for(var val of arr2){
    console.log(val);
}
for(var index in arr2){
    console.log(index);
}

// Functions

function new1(){
    console.log("New function");
}
new1();

//function parameters

function sum2(x:number,y:number){
    return x+y;
}
   console.log( sum2(4,5));

let newfunction =function() {

    console.log("hello world");
}
newfunction();

//arrow function

let fun =(x:number,y:number):number=>{
    return x+y;
}
console.log(fun(98,90));

class employee{
    empcodde:number;
    empname:string;

    constructor(code:number,name:string){
        this.empcodde=code;
        this.empname=name;
    }
    dis=() => console.log(this.empcodde+" "+this.empname);
}
let em=new employee(1,'suchit');
em.dis();

//function overloading

function add(a:string,b:string):string;

function add(a:number,b:number):number;

function add(a:any,b:any):any{
    return a+b;
}
console.log(add(2,4));
console.log(add("suchit","koli"));


//interface

interface pack{
    (val:string,code1:number):void;
};
function pack1(val:string,code1:number):void{
   console.log('code'+code1+'val'+val);
    }
    let pc:pack=pack1;
    pc('sdw',1);

//class inheritance

    class person{
        student_name:string;

        constructor(student_name:string){
            this.student_name=student_name;
        }
    }
    class students extends person{
        student_num:number;
           constructor(student_num:number,student_name:string){
               super(student_name);
               this.student_num=student_num;
           }

           display():void{
               console.log("Studdent name :-"+this.student_name+"Student number:- "+this.student_num);
           }

        }
        let stu=new students(100,'suchit');
        stu.display();

        //method overriding

    class book{
        book_name:string;

        constructor(book_name:string){
            this.book_name=book_name;
        }

        sell(price:number=0){
            console.log("Book name :- "+this.book_name+"Book price:- "+price);
        }
    } 
    class book1 extends book{
        constructor(book_name:string){
            super(book_name);
        }
        sell(price=150){
            console.log("Book 1 price :- ");
            super.sell(price);
        }
    }
    
    class book2 extends book{
        constructor(book_name:string){
            super(book_name);
        }
        sell(price=200){
            console.log("Book 2 price :- ");
            super.sell(price);
        }
    }
    let book1obj=new book1("Harry potter");
    let book2obj=new book2("secret");

    book1obj.sell();
    book2obj.sell();


    //03-09-2021

    //Abstract Class

    abstract class mobile{
        abstract name:string;

        display(){
           
            console.log(this.name);
        }
    }
    class emp2 extends mobile{
        name: string;
        code:number;

        constructor(name:string,code:number){
            super();
            this.code=code;
            this.name=name;
        }
    }
    let mq=new emp2("suchit",435);
    mq.display();

    //readonly

    class bike{
        name:string;
        readonly speed:number;

        constructor(name:string,speed:number){
            this.name=name;
            this.speed=speed;
        }
        display(){
        console.log(this.name+""+this.speed);
        }
    }
    let bk=new bike("KTM",456);
    // bk.speed=345; //error :- read-only 
    bk.name="Ducati";
    bk.display();


    //Module
    
    export class laptop{
        name:string;

        constructor(name:string){
            this.name=name;
        }
        display(){
            console.log(this.name);
        }
    }
    
let lp=new laptop("dell");
lp.display();
