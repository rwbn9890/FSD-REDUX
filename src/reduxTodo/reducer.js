import { ADD_TODO, CLEAR_TODO, REMOVE_TODO } from "./action"




function reducer(store = [], action){

    if(action.type == ADD_TODO)
    {
        
        return [
            ...store,
            {
                    id:1,
                    title:action.payload,
                    status : false
                }
        ]

    // let obj = {
    //     id:1,
    //     title:"wake up",
    //     status : false
    // }
    //     store.push(obj)

   
    }
    else if (action.type == REMOVE_TODO)
    {
       return store.splice(0, store.length-1)
    }

    else if (action.type == CLEAR_TODO)
    {
        return []
    }

   
    
}


export default reducer