
import { DESC_COUNT, INC_COUNT, RESET_COUNT } from "./actionType"
// state is orginal count,, action is function type;


 const counterReducer= (state={count:0}, action) => {

        // if(action.type == "INC")
        // return  {
        //     ...state,
        //     count:state.count+1
        // }

        // else if (action.type == "DESC")
        // return {
        //     ...state,
        //     count:state.count-1
        // }
        // else 
        // return state


        switch(action.type)
        {
            case  INC_COUNT : return  {
                                    ...state,
                                    count:state.count+1
                                }

            
            case DESC_COUNT :  return {
                                    ...state,
                                    count:state.count-1
                                }
                
            case RESET_COUNT : return {
                ...state,
                count: 0
            }
            default : return state;
        }

}


export default counterReducer;
