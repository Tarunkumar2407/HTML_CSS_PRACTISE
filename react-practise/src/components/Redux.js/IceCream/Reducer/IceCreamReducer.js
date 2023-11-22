import { BUY_ICECREAM } from "../Action/ActionType"


const initialState = {
    NumOfIceCream: 30
}

const IceCreamReducer = (state = initialState, action) => {
        switch(action.type){
            case BUY_ICECREAM: return {
                ...state,
                NumOfIceCream: state.NumOfIceCream - 1
            }
            default: return state
        }
}

export default IceCreamReducer