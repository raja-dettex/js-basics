// declarations 

// declarations of function prototype 

// variable is declared globally 


// function sayHello(value) {
//     // value assigned
//     var a = "local scope"


//     // printing the value
//     console.log("insidde the function scope " )
// }

// sayHello()
// // value being printed



// // loosing all the reference of the variable that is declared 
// console.log("collected the garbage") // 
// // const value = 3

let arr = [1, 2, 3, 4, 5, 6]


for(var i = 0; i<arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log("the numbers are " + arr[i] + "\n")
    }
}

// escape character \t - horizontal tab, \n - new line , \v - vertical tab \\ - single backslash

// slice of an array 

let duplicateArr = arr.slice(2, 5)

console.log(duplicateArr)

// splice method of array 

const fashion = ["shirts", "shoes", "jwellery"]

//fashion.splice(1, 1)


console.log(fashion)
// higher order function 

function findLength(item) {
    console.log(item.length)
}
fashion.forEach(findLength)