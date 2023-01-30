/********************Var Keyword*************************/
// It can be updated and also can be re-declared
// Var keyword support three type of scope global[window] and function and block level
//Never Use in LWC
var course = "zero to hero"
console.log(course)
course = "zero to hero in LWC"
console.log(course)
console.log(window.course)
function abc(){
    var anotherCourse = "Hero in Lwc"
    console.log(anotherCourse)
}
abc()
//block scope
if(2==2){
    var x = 10
}
console.log(x)
console.log(window.x)

/***********************Let Keyword************************/
// It can be updated but cannot be re-declared
// Let keyword support two type of scope function scope and block scope but not global[window] scope
//Alway Use in LWC
let letcourse = "let zero to hero"
letcourse = "let: zero to hero in LWC"
console.log(letcourse)
// let letcourse = "kk"    Error: Uncaught SyntaxError: Identifier 'letcourse' has already been declared 
//console.log(window.letcourse) //Error: Undefined
function letabc(){
    let y = "Jayesh"
    console.log(y)
}
letabc()
//console.log(y) //Error: Uncaught ReferenceError: y is not defined || global scope is not supported
if(2==2){
    let z = "SFDC"
    console.log(z)
}
//console.log(z) //Error: Uncaught ReferenceError: z is not defined || global scope is not supported

/**********************const Keyword**************************/
// It cannot be updated but cannot be re-declared
const constcourse = "Const Zero to Hero"
console.log(constcourse)
//const constcourse = "LWC" //Error:  Identifier 'constcourse' has already been declared
//const keyword support two type of scope function scope and block scope
function constabc(){
    const a = 20
    console.log(a)
}
constabc()
const a = 30
console.log(a)
if(1==1){
    const b = 40
    console.log(b)
}
console.log(a)
//console.log(b) //Error: Uncaught ReferenceError: b is not defined

