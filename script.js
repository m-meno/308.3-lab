// let i = 1

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log(`Fizz Buzz`);
//     } else if (i % 5 == 0){
//         console.log(`Buzz`);
//     } else if (i % 3 == 0){
//         console.log(`Fizz`);
//     } else (i % 3 !== 0 && i % 5 !== 0);
//         console.log(i)
// }



// for (let n = 5; n < 30; n++){
//     if (n > 5 && n % 2 !== 0 && n % 3 !== 0){
//         console.log(`${n} is a prime number.`); break;
//     }
// }


//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

//comma, characters, \n
// /n = console.log

let cell1 = ``
let cell2 = ``
let cell3 = ``
let cell4 = ``
let commas = 0

for (let i = 0; i < str.length; i++) {
    if (str[i] == `,`) { //if it's a comma
       commas++
    } else if (str[i] == `\n`) { //if it's a new line
        commas = 0
        console.log(cell1,cell2, cell3, cell4)
        cell1 = ``
        cell2 = ``
        cell3 = ``     
        cell4 = ``
    } else { //if its ANYTHING else
        if (commas === 0) {
            cell1+= str[i]
        } else if (commas === 1) {
            cell2+= str[i]
        } else if (commas === 2) {
            cell3+= str[i]
        } else {
            cell4+= str[i]
        }
    } 

    if (i + 1 == str.length) console.log(cell1,cell2, cell3, cell4)
}
















// for (let i = 0; i < str.length; i++){
//     console.log(str[i])
// } if (str[i] !== `,`);
//     console.log(str[i])

// for (let char in str){
//     console.log(char)
// }



