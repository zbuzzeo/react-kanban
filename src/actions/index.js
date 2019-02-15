/**
 * Actions
 */

export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

/**
 * Action Creators
 */

export function addCard(newCard) {
  return {
    type : ADD_CARD,
    payload : newCard
  }
}

export function loadCards() {
  return (dispatch) => {
    // fetch, .then( convert to JSON object ) .then( take that response and serve the JSON object as the payload )
  }
}
