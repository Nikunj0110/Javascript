//1. **Check if a number is positive**
// let number=12;
// if(number>=0){
//     console.log("Number Is Positiive");
// }
// else{
//     console.log("Number Is Negative");
// }

// 2.CHECK IF A NUMBER IS EVEN OR ODD
// let num=12
// if(num%2==0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }

// 3.CHECK VOTING ELIGIBILITY
// let age=17
// if(age>=18) console.log("You Are Eligibile");
// else console.log("You Are Not Eligible");

// 4.FIND THE LARGEST OF TWO NUMBERS
// let num1=100
// let num2=12
// if(num2>num1){
//     console.log(`${num2}`+"Is Largest");
// }
// else{
//     console.log(`${num1}`+"Is Largest");
// }

// 5.GRADE BASED ON SCORE

// let score=101
// if(score>=90 && score<=100){
//     console.log("A grade");
// }
// else if(score>=50 && score<90){
//     console.log("B grade");
// }
// else if(score>=20 && score<50){
//     console.log("C grade");
// }
// else if(score>100){
//     console.log("Unavailable");
// }
// else{
//     console.log("D grade");
// }

// 6.LEAP YEAR PROGRAM
// let year=2003
// if(year%4==0){
//     console.log("Leap year");
// }
// else{
//     console.log("No leap year");
// }

// 7.Check if a string is empty**
// let name="nikunj"
// if(name.length>=1){
//     console.log("not empty");
// }
// else{
//     console.log("empty");
// }

// 8.**Check login status using ternary**
// let islogin=1
// console.log((islogin? "Welcome":"NOt login"));

// 9.**Assign discount based on membership type**
// let membershipType = "Silver"; // Try "Silver", "Bronze", or anything else

// let discount = membershipType === "Gold"? 30: membershipType === "Silver"? 20 : membershipType === "Bronze"? 10: 0;

// console.log(`Discount: ${discount}%`);

// 10.**Identify day of the week using `switch`**

// let daynum=new Date().getDay();
// switch(daynum){
//     case 0:
//         console.log("Sunday");
//         break
//     case 1:
//         console.log("Monday");
//         break
//     case 2:
//         console.log("Tuesday");
//         break
//     case 3:
//         console.log("Wednesday");
//         break
//     case 4:
//         console.log("Thursday");
//         break
//     case 5:
//         console.log("Friday");
//         break
//     case 6:
//         console.log("Saturday");
//         break
//     default:
//         console.log("Invalid");
// }

// 11.**Check if number is in a specific range**
// let number=15
// let res=number>=10 && number<=20 ? "Yes In Range":"Not in range";
// console.log(res);

// 12. **Validate password length**
// let pwd="12345678"
// let res=pwd.length<8? "Validate":"Not valid"
// console.log(res);

// 13. **Check if number is divisible by 3 and 5**
// let num=15
// console.log(num%3==0 && num%5==0 ? "divisible":"not divisible");

// 14.*Check if character is a vowel**
// let char="A"
// let result="aeiouAEIOU".includes(char)

// console.log(result? "vowel":"not vowel");

// 15. **Set background color using dark mode (ternary)**
// let darkMode = true;
// document.body.style.backgroundColor = darkMode ? "black" : "white";

// 16. **Compare three numbers to find the largest**
// let a=120,b=10,c=50;
// let largest=a>b ? (a>c?a:c):(b>c?b:c)
// console.log(largest);

// 17.**Validate if input is a number**
// let main=12
// let result=Number(main)?"Validate":"Not validate"
// console.log(result);

//18.**Traffic light signal system (red/yellow/green)**
// let main="RED"
// switch(main.toLowerCase()){
//     case "red":
//         console.log("Stop");
//         break
//     case "yellow":
//         console.log("Get ready");
//         break
//     case "green":
//         console.log("go");
//         break
//     default:
//         console.log("Invalid Signals");
// }

// 19.**Check user role with switch-case**
// let main="ceo"
// switch(main.toLowerCase()){
//     case "ceo":
//         console.log("Ceo role");
//         break
//     case "editor":
//         console.log("Editing Only");
//         break
//     case "founder":
//         console.log("Founder only");
//         break
//     default:
//         console.log("invaid");
// }

// 20.CALUCLATOR USING SWITCH CASE
let a = Number(prompt("Enter 1st Number:"));
let b = Number(prompt("Enter 2nd Number:"));
let result = prompt("Enter Calculation:");

console.log("A is", `${a}`);
console.log("B is", `${b}`);
console.log("Calculation is", `${result}`);
switch (result) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid");
}
