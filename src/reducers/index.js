import { ADD_CARD, LOAD_CARDS, DELETE_CARD } from '../actions';

let cardId = 0;

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      action.payload['id'] = ++cardId;
      return [...state, action.payload];
    case LOAD_CARDS:
      return [].concat(action.payload);
    case DELETE_CARD:
      return [].concat(action.payload);
    default:
      return state;
  }
}

export default cardReducer;
