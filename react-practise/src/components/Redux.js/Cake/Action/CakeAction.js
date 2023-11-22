import { BUY_CAKES } from "./ActionType"

const buyCakes = (number =1) => {
    return {
        type: BUY_CAKES,
        payload: number
    }
}

export default buyCakes