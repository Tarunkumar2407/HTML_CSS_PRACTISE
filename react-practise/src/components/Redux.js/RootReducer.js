import { combineReducers } from "redux"
import CakeReducer from "./Cake/Reducer/CakeReducer"
import IceCreamReducer from "./IceCream/Reducer/IceCreamReducer"


const RootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})

export default RootReducer