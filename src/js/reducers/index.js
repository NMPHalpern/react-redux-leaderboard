// src/js/reducers/index.js

import { INCREMENT, DECREMENT } from "../constants/action-types";
const initialState = {
  votes: [
    { name: 'DINOSAURS', total: 0 },
    { name: 'MONSTERS', total: 0 },
    { name: 'ROBOTS', total: 0 }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:
      const votes_inc = state.votes.map(obj => {
        return obj.name === action.payload ? {name: obj.name, total: obj.total + 1 } : obj
      });
      return Object.assign({}, state, {
        votes: votes_inc
      });
    case DECREMENT:
      const votes_dec = state.votes.map(obj => {
        return obj.name === action.payload ? {name: obj.name, total: obj.total - 1 } : obj
      });
      return Object.assign({}, state, {
        votes: votes_dec
      });
    default:
      return state;
  }
};

export default rootReducer;
