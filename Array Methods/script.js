let arr = [2,3,5,7,9,10]

//map()
//syntax
// arr.methodName(function(currentItem, index, actualArray){
    
// })
let newArray = arr.map(function(currentItem,index,array){
    console.log(`currentItem is ${currentItem} index ${index}, array ${array}`)
    return currentItem*2
})
console.log(arr)
console.log(newArray)

//filter
let filteredValues = arr.filter(function(currentItem,index,array){
    return currentItem > 5
})
console.log(filteredValues)

//every()
let age = [32, 33, 18, 40]
let isAllAdult = age.every(function(currentItem){
    return currentItem >= 18
})
console.log(isAllAdult)

//some()
let ageList = [32, 33, 18, 40]
let isAdult = ageList.some(function(currentItem){
    return currentItem >= 18
})
console.log(isAdult)

//sort()
var names = ["jayesh","john","smith"]
console.log(names.sort())

// sorting of number
var points = [10, 39, 12, 80, 54]
let sortedValues = points.sort(function(a,b){
    return a-b                                  // a-b for ascending order and b-a for decending order
})
console.log(sortedValues)

//reduce()
//Syntax:
// array.reduce(function(total, currentValue, index, array){

// },initialValue)
let num = [12, 78, 30]
let sum = num.reduce(function(total,currentItem){
    return total+currentItem
},0)
console.log(sum)

//forEach()
num.forEach(function(currentItem){
    console.log(currentItem)
})

