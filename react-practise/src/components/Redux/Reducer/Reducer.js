import { BUY_CAKE } from "../Action/CakeType"


const initialState = {
    NoOfCakes : 20
}

const cakeReducer = ( state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            NoOfCakes: state.NoOfCakes -1
        }
    }
}
export default cakeReducer