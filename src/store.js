import todoReducer from "./reduxTodo/reducer"
import counterReducer from "./redux/reducer"

import { combineReducers, createStore } from "redux";


const slices = combineReducers({
    counter:counterReducer,
    todos:todoReducer,
})

const store = createStore(
    slices,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;