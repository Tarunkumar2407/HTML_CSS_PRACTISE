import { createStore } from "redux";
import cakeReducer from "./Reducer/Reducer";


const store = createStore(cakeReducer)

export default store