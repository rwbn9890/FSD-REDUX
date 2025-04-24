

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const CLEAR_TODO = "CLEAR_TODO"


export function addTodo(data){
    return {
        type:ADD_TODO,
        payload:data
    }
  }

export function removeTodo(){
     return {type:"REMOVE_TODO"}
  }

export function clearTodo(){
    return {type:"CLEAR_TODO"}
}
