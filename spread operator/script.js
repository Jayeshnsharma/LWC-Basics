// Array
var arr = ["a","b","c"]
console.log(arr)
//Array indev value starts from zero
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
arr.push("3")
console.log(arr)

// Objects
// It is always in the form of key-value pair
var obj={
    "name":"Salesforce",            //key is name and Salesforce is value
    "age":23,
    "full name":"zero to hero"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["full name"]) //If key contains any space then we have to use array instead of "."
obj.hobbies="cricket"
console.log(obj)


//Spread Operator
//1. Expanding String
let greeting = "Hello Everyone"
let charList = [...greeting]
console.log(charList)
console.log(charList[0])        //H
console.log(charList[5])        //Space 
console.log(charList[11])       //o

//2. Combining Array
let arr1 = ["Amazon","Google"]
let arr2 = ["Facebook","Instagram"]
let arr3 = [...arr1,...arr2]
console.log(arr3)
//Adding Value to Array
let arr4 = ["a","b","c"]
let arr5 = [...arr4,"jayesh"]
console.log(arr5)

//3. Combining Object
let obj1 = {name:"Salesforce",age:"24",date:"31/07/2022"}
let obj2 = {name:"Facebook",age:"45",Message:"Hello World"}
let obj3 = {...obj1,...obj2}
console.log(obj3)

//4. Shallow Copy
var arr10 = ["x","y","z"]
var arr11 = [...arr10]
arr11.push("Jayesh")
console.log(arr10)
console.log(arr11)

//5. Nested Copy
var arrObj = [
    {name:"Jayesh"},
    {name:"Salesforce"}
]
//var arrObj1 = [...arrObj]
//console.log(arrObj1)
//arrObj1[0].name = "Superman"
//console.log(arrObj1)
//console.log(arrObj)

//Hack for Nested Copy
var arrObj1 = JSON.parse(JSON.stringify(arrObj))
arrObj1[0].name = "Superman"
console.log(arrObj1)
console.log(arrObj)