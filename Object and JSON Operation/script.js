let obj = {
    name:"Salesforce",
    age:23,
    date:'8/01/2022'
}
//Object.keys()
console.log(Object.keys(obj))

//Object.values()
console.log(Object.values(obj))

//JSON.stringify
let str = JSON.stringify(obj)
console.log(str)

//JSON.parse
console.log(JSON.parse(str))