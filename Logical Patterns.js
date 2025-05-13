//1. PRIME NUMBER PROGRAM  ------------------------------------>
// let number=7
// let flag=0;
// for(let i=2;i<number;i++){
//     if(number%i==0){
//         flag=1;
//         break;
//     }
// }
// if(flag){
//     console.log("Not Prime Number");
// }
// else{
//     console.log("Prime Number");
// }


// 2.PRINT PRIME NUMBER IN 1 TO 100-------------------------------->

// function isprime(num){
//     if(num<2) return false;
//     for(let i=2;i<num;i++){
//         if(num%i===0) return false;
//     }
//         return true;
// }

// for(let i=1;i<=100;i++){
//     if(isprime(i)){
//         console.log(i);
//     }
// }


// 3.FIBONACCI SERIES UP TO N TERMS(100 Value return kre) 
// let b=1;
// let a=0;
// for(let i=1;i<=100;i++){
//     console.log(a);
//     let next = a+b;
//     a=b;
//     b=next;
// }


//4.Fibonacci series up to value ≤ 100: (100 Sudhina sum aave)
// let aa=0;
// let bb=1;
// while(aa<=100){
//     console.log(aa);
//     let ok=aa+bb
//     aa=bb;
//     bb=ok
// }


// 5.PALINDROM NUMBER 
// function palindrom(num){
//     let original=num.toString();
//     let reverse=Number(original.split("").reverse().join(""));
//     return original==reverse
// }
// let number=121

//    if(palindrom(number)){
//         console.log("Number is Palindrom");
//     }else {
//         console.log("Not Palindrom");
//     }


// 6.FACTORIAL OF A NUMBER 
// function factorial(num){
//     if(num<0) console.log("Out Of Range!");
//     let result=1
//     for(let i=1;i<=num;i++){
//         result=result*i;
//     }
//     console.log(result);
// }
// factorial(5)


// 7.REVRSE A NUMBER
// function revrse(num){
//     let main=num.toString();
//     let reversed=Number(main.split("").reverse().join(""))
//     console.log(reversed);
// }
// revrse(1212)


// 8.SUM OF GIVEN NUMBER 
// function sarvalo(num){
//     let sum=0
//     for(let i=0;i<=num;i++){
//         sum+=i;
//     }
//     console.log(sum);
// }
// sarvalo(10)

// 9.MULTIPLICATION TABLE OF GIVEN NUMBER 
// let number=5

// for(let i=1;i<=10;i++){
//     let res=number*i
//     console.log(`${number}`+"*"+`${i}`+"="+res);
// }

// 10.ARMSTRONG NUMBER
// let sum=0;
// let number=153;
// let temp=number;

// while(temp>0){
//     y=temp%10
//     sum=sum+(y*y*y)
//     temp=parseInt(temp/10)
// }

// console.log(sum);
// if(number==sum) console.log("Palindrom Number");
// else console.log("Not Palindrom");



// 11.GCD (Gretest common divisor) in Two Numbers
// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
// let num1 = 48;
// let num2 = 18;

// console.log("GCD of", num1, "and", num2, "is", gcd(num1, num2));



