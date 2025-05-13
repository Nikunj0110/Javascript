// ARRAY METHODS
// 1.PUSH SHIFT POP UNSHIFT 
// let main=["nikunj",12,"ok"]
// console.log(main.push("String"));
// console.log(main);


// main.pop()
// console.log(main);

// main.shift()
// console.log(main);

// main.unshift("ok")
// console.log(main);

// 2.CONCAT METHOD
// let a=[1,2,3]
// let b=[3,4,5,6]
// let result=a.concat(b)
// console.log(result);


// 3.JOIN method
// let ok=[1,2,3,4,5]
// ok.join("")
// console.log(ok);

// 4.FILTER A NUMBER WHICH IS DIVISIBLE BY 10
// let arr=[20,30,40,57,78]
// let result=arr.filter((ok)=>{
//     return ok%10==0
// })
// console.log(result);


//DATA PRINTING BY FOR LOOP
//  let example=[1,2,3,4,5,6,"String",true,null,10]
// for (i=0;i<example.length;i++)
// {
//     console.log(example[i])
// }

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)


//FOR ..... OF LOOP //axet value return kare 
// let num=[1,2,3,4,5]
// for (let i of num){
//     console.log(i)
// }

// //FOR..IN LOOP  //index no print kare 
// let num=[1,2,3,4,5]
// for(let i in num){
//     console.log(i)
// }

//MAP FILTER REDUCE METHOD
// let arr=[12,23,44,"ok","string"]
// let result=arr.filter((main)=>{
//     return typeof main=="number"
// })
// console.log(result);

//REDUCE METHOD 
// let ok=[1,2,3,4,5]
// let newarr= ok.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(newarr)

//SPLICE AND SLICE METHOD
// let arr=[1,2,44,55,66,77,88,99]
// let main=arr.splice(2,5,45,46,47,48,49,50)
// console.log(main);
// console.log(arr);

// SLICE METHOD
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)

// ----------------------------------------PRACTICAL TASK------------------
// const stud = [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 92 },
//   { name: 'Charlie', score: 68 },
//   { name: 'David', score: 74 },
//   { name: 'Eve', score: 99 },
//   { name: 'Frank', score: 57 },
// ];

// let ok=stud.some(main=> main.score===100)
// console.log(ok);


// let ok=stud.sort((a,b)=>b.score-a.score)
// console.log(ok);



// Filter students who passed (score >= 70)
// let ok=stud.filter((main)=>{
//     return main.score>=70
// })
// console.log(ok);

// FIND THE FIRST STUDENT WHO FAILED
// let ok=stud.filter((main)=>{
//     return main.score<70
// })
// console.log("failed students:",ok);


// Print all students' names (use forEach)
// let demo=stud.forEach((temp)=>{
//     console.log(temp.name);
// })
// console.log(demo);


// Get an array of scores only (use map)
// let demo=stud.map((ok)=>{
//     return ok.score
// })
// console.log(demo);