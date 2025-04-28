import { ADD_TODO, CLEAR_TODO, REMOVE_TODO, UPDATE_TODO } from "./action"


function todoReducer(store = [], action){

    if(action.type == ADD_TODO)
    {
        
        return [
            ...store,
            {
                    id: store.length==0 ? store.length : store[store.length-1].id+1 ,
                    title:action.payload,
                    status : false
                }
        ]
    }
    else if (action.type == REMOVE_TODO)
    {
       return store.filter(ele => ele.id != action.id )
    }

    else if(action.type == UPDATE_TODO)
    {
        return store.map((ele) => ele.id == action.id ?
         {...ele, status: !ele.status}
          : ele


        //   return store.map((ele) => {
        //     if(ele.id === action.id){
        //         ele.status = !ele.status
        //     }
        //     return ele
        //   })
    
    )
    }

    else if (action.type == CLEAR_TODO)
    {
        return []
    }

    else {
        return store
    }

   
    
}


export default todoReducer