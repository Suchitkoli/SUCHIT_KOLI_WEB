 //Variables
 let x,z,y;
 x=21;
 y=54;
 z= x + y; 
 document.getElementById("add").innerHTML= "addition  ="+z;
 function myfunction(p1,p2){
     return p1*p2;
 }
 document.getElementById("multiplication").innerHTML=myfunction(5,6);

//One Statement,Many Variables

let name= {fisrtname:"Suchit",lastname:"Koli",Phone:"8275913637"};

 document.getElementById("obj").innerHTML="Phone Number  :-"+name.Phone;
 
//String Operations

 var first="Suchit";
 var last='Koli';

//Slice

 document.getElementById("str").innerHTML=first+" "+last;
 document.getElementById("str1").innerHTML="String Method :- Length :-  "+first.length;
 document.getElementById("str2").innerHTML="String Method :- slice :-  "+first.slice(1,3);

//Replace

 function function1(){
     let text=document.getElementById("str3").innerHTML;
     document.getElementById("str3").innerHTML=text.replace( "Typescript","Javascript");
 }

//toUpperCase

 function function2(){
 var txt=document.getElementById("str4").innerHTML;
 document.getElementById("str4").innerHTML=txt.toUpperCase();   
}
let context ="My name is Suchit Koli";
 document.getElementById("str5").innerHTML=context.indexOf("Suchit");

//Array

 const student=new Array ("Suchit","Devesh","Prajakta");

//Array Print using loop

document.getElementById("arr").innerHTML=student.sort();
 let len=student.length;
 let tet="<ul>";
     for(let i=0;i<len;i++){
         tet+="<li>"+student[i]+"</li>";
     }tet+="</ul>";

  document.getElementById("arr1").innerHTML=tet;
     
//Pushing elements into the array
     
  document.getElementById("arr2").innerHTML=student;
  function function3() {
      student.push("Ameet");
      document.getElementById("arr2").innerHTML=student;
  }
  const fruit=["orange","apple"];
  document.getElementById("arr3").innerHTML=fruit.toString();
  
//Join

 document.getElementById("arr4").innerHTML=fruit.join("*");

//popping elements

 document.getElementById("arr5").innerHTML=fruit;
 fruit.pop();
 document.getElementById("arr5").innerHTML=fruit;

//Shift //unshift

 document.getElementById("arr6").innerHTML=fruit;
 fruit.shift();
 document.getElementById("arr6").innerHTML=fruit;
 fruit.unshift("Lemon");
 document.getElementById("arr7").innerHTML=fruit; 

//Delete element from array
 
 document.getElementById("arr8").innerHTML=student;

 delete student[0];
 document.getElementById("arr8").innerHTML=student; 

//splicing

  document.getElementById("arr9").innerHTML=student;

  function function4(){
      student.splice(2,0,"Siddarth","Gauri");
      document.getElementById("arr9").innerHTML=student;

  }

//Concatenate Array

  const car=["BMW","Bugatti","Audi"];
  const bike=["honda","hero","bajaj"];
  const vehicle=car.concat(bike);
  document.getElementById("arr10").innerHTML=vehicle;

//slicing array

  document.getElementById("arr11").innerHTML=car;
  var motor=car.slice(1);
  document.getElementById("arr11").innerHTML=motor;
 
//25-08-2021
//Array iteration 
//For each

 const num= [21,34,56,22,24];
 let tst="";
 num.forEach(function5);
 document.getElementById("arr12").innerHTML=tst;

 function function5(value,index,array) {
     tst+=value+"<br>";
     
 }

//Map function

 const num2=num.map(function6);

 document.getElementById("arr13").innerHTML="Map Array ::-  "+num2;

 function function6(value,index,array){
     return value*3;
 }

// Array Filter

 const over=num.filter(function7);
 document.getElementById("arr14").innerHTML="Filter array  ::-  "+ over;

 function function7(value,index,array){
     return value>35;
 }

//Array every();

 const over1=num.every(function8);
 document.getElementById("arr15").innerHTML="Every Element "+over1;

 function function8(value,index,array){
     return value > 18;
 }

//Array  some()

 const over2=num.some(function9);
 document.getElementById("arr16").innerHTML="Some Element "+over2;

 function function9(value,index,array){
     return value > 18;
 }

//30-08-2021
//Event listener

 document.getElementById("btn1").addEventListener("click",function(){
     document.getElementById("dom").innerHTML="Event listener working";
 })

//Append child

 function function10(){
     var node = document.createElement("LI");
     var textnode= document.createTextNode("Amit");

     node.appendChild(textnode);
     document.getElementById("mylist").appendChild(node);
 }
 
//Attribute

 function function11(){
     var x=document.getElementById("btn").attributes.length;
     document.getElementById("dom1").innerHTML=x;
 }

//Focus and blur
 
 function function12(){
     document.getElementById("link").focus();
 }
 function function13(){
     document.getElementById("link").blur();
 }

//Child Element Count

 function function14 () {
     var c= document.getElementById("mydiv").childElementCount;
     document.getElementById("dom2").innerHTML=c;
 }

//child node property

 function function15(){
     var g = document.getElementById("mydiv").childNodes;
     var newtxt = "";
     var i;
     for (i = 0; i < g.length; i++) {
     newtxt = newtxt + g[i].nodeName + "<br>";
 }
 document.getElementById("dom3").innerHTML = newtxt;
 }

//class list

 function function16(){
     document.getElementById("div1").classList.add("mystyle");
 }

//click method

 function function17() {
     document.getElementById("dom4").click();
     
 }

//isequalnode

 function myFunction(x,y) {
 var item1 = document.getElementById(x).firstChild;
 var item2 = document.getElementById(y).firstChild;
 var x = item1.isEqualNode(item2);
     document.getElementById("dom5").innerHTML = x;
 }

//close function

 function function18(){
     document.open();
     document.write("<h1>Close titles</h1>");
     document.close();
 }

//addEventListener

 document.addEventListener("click",function(){
     document.getElementById("dom6").innerHTML="Eventlistener working";
 })

//baseURI

 function function19() {
     var d = document.baseURI;
     document.getElementById("dom7").innerHTML = d;
 }

//body operations -- change backgroundcolor

 function function20(){
     document.body.style.backgroundColor ="Green";
 }

//Characterset Property

 function function21(){
     var p=document.characterSet;
     document.getElementById("dom8").innerHTML=p;
 }

//createAttribute

 function function22() {
     var h1 = document.getElementsByTagName("H1")[0];
     var att = document.createAttribute("class");
     att.value = "democlass";
     h1.setAttributeNode(att);
 }

//create element

 function function23(){
     var btn=document.createElement("BUTTON");
     document.body.appendChild(btn);
 }

//document Ekement

 function function24() {
     var j = document.documentElement.nodeName;
     document.getElementById("dom9").innerHTML = j;
 }

//InsertAdjacentElement

 function function25() {
     var s = document.getElementsByTagName("span")[0];
     var h = document.getElementById("myH2");
     h.insertAdjacentElement("afterend", s);
 }