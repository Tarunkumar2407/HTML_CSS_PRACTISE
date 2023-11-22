import { BUY_CAKES } from "../Action/ActionType"


const initialState = {
    NumOfCakes : 20
}
const CakeReducer = (state= initialState, action) => {
  switch(action.type){
    case BUY_CAKES : return {
        ...state,
        NumOfCakes: state.NumOfCakes - action.payload
    }
    default: return state
  }
}

export default CakeReducer