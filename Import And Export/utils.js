//Normal Export
export const PI  = 3.14

export function add(a,b){
    console.log(a+b)
}
// Export Together
// export {PI,add} // while using this remove export keyword from above normal export

//export with alias
// export {PI_Data as PI, add}

// Export with default
export default function minus(a,b){
    console.log(a-b)
}
export function sub(a,b){
    console.log(a-b)
}