import { INCREMENT, DECREMENT } from "../constants/action-types";

export const incrementCount = target => ({type: INCREMENT, payload: target});
export const decrementCount = target => ({type: DECREMENT, payload: target});
