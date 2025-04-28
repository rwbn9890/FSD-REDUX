import { DESC_COUNT, INC_COUNT, RESET_COUNT } from "./actionType"




export const incCount = () => {
    return {type : INC_COUNT}
}

export const descCount = () => {
    return {type : DESC_COUNT, }
}

export const resetCount = () => {
    return {type : RESET_COUNT}
}



// function call(){

//     let arr = []
//     let obj = {
//         id : 1, 
//         task :"wakeup",
//         status: false
//     }

//     arr.push(obj)
//     return arr
// }




// function call(){
//     return [
//         ...arr, 
//         {
//             id : 1, 
//             task :"wakeup",
//             status: false
//         }
//     ]
// }