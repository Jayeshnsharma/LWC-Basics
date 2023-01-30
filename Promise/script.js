// function checkIsSuccess(data){
//     return new Promise(function(resolve, reject){
//         if(data === "Success"){
//             return resolve("Sucessfully Executed")
//         }else{
//             return reject("Unsucessfully Executed")
//         }
//     })
// }
// console.log(checkIsSuccess('Success'))
// checkIsSuccess('Success').then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })

fetch('https://api.github.com/users/Jayeshnsharma').then(function(result){
    return result.json()
}).then(function(response){ // then always returns promise
    console.log(response)
})