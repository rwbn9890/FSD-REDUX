

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const CLEAR_TODO = "CLEAR_TODO"
export const UPDATE_TODO = "UPDATE_TODO"


export function addTodo(data){
    return {
        type:ADD_TODO,
        payload:data
    }
  }

export function removeTodo(id){
     return {
      type:REMOVE_TODO,
       id,
      }
  }

  export function updateTodo(id){
    return {type:UPDATE_TODO, id:id}
  }

export function clearTodo(){
    return {type:CLEAR_TODO}
}

