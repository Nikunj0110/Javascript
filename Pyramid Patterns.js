// 1.Right-Angled Triangle of *
// *
// **
// ***
// ****
// *****
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i));
// }






// 2.Full Pyramid of *
//     *
//    ***
//   *****
//  *******
// ********* 
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }



// *********
//  *******
//   *****
//    ***
//     *
//2. Reversed Pyramid Of Up Program
// for(let ok=5;ok>=1;ok--){
//     console.log(" ".repeat(5-ok)+"*".repeat(2*ok-1));
// }






// 3.Number Pyramid
// 1
// 22
// 333
// 4444
// 55555
// for(let i=1;i<=5;i++)
// {
//     console.log(`${i}`.repeat(i));
// }

//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5
// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         document.write("&nbsp;")
//     }
//     for(let k=1;k<=i;k++){
//         document.write(i+" ")
//     }
//     document.write("<br>")
// }


//     1
//    1 2
//   1 2 3
//  1 2 4 4
// 1 2 3 4 5
// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         document.write("&nbsp;")
//     }
//     for(let o=1;o<=i;o++){
//         document.write(o+" ")
//     }
//     document.write("<br>")
// }

//     1
//    2 3
//   4 5 6
//  7 8 9 10
// let count=1
// for(let i=1;i<=4;i++){
//     for(let j=4;j>=i;j--){
//         document.write("&nbsp;")
//     }
//     for(let o=1;o<=i;o++){
//         document.write(count+" ")
//         count++;
//     }
//     document.write("<br>")
// }


// 1
// 12
// 123
// 1234
// 12345
// for(let i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         document.write(j+" ");
//     }
//     document.write("</br>");
// }


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let count=1;
// for(let i=1;i<=4;i++){
//         for(j=1;j<=i;j++){
//             document.write(count+" ");
//             count++
//         }
//         document.write("</br>");
//     }

 

// 4.Extra Pyramid
//     *
//    ***
//   *****
//  *******
// ********* 
//  *******
//   *****
//    ***
//     *
// let n=5;
// for(let i=1;i<=n;i++){
//     document.write("&nbsp;&nbsp;".repeat(n-i)+"*".repeat(2*i-1))
//     document.write("<br>")
// }
// for(let j=n-1;j>=1;j--){
//     document.write("&nbsp;&nbsp;".repeat(n-j)+"*".repeat(2*j-1))
//     document.write("<br>")
// }


// 2nd Technique
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
// }
// for(let ok=n-1;ok>=1;ok--){
//     console.log(" ".repeat(n-ok)+"*".repeat(2*ok-1));
// }
