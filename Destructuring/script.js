//Array Destructuring
let arr = ["Amazon","Google"]
// let company1 = arr[0]
// let company2 = arr[1]

let [Company1,Company2] = arr
console.log(Company1)
console.log(Company2)

//Object Destructuring
let options = {
    title:"zero to hero",
    age:23,
    type:"CRM"
}
//var title = options.title
// var age = options.age
// var type = options.type
 let {title,age,type} = options
 console.log(title)
 console.log(age)
 console.log(type)