/**
 * Actions
 */

export const ADD_CARD = 'ADD_CARD';
export const LOAD_CARDS = 'LOAD_CARDS';

/**
 * Action Creators
 */

export function addCard(newCard) {
  return (dispatch) => {
    return fetch('/', {
      method : 'POST',
      body : JSON.stringify(newCard),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        return dispatch({
            type : ADD_CARD,
            payload : newCard
          });
      });
  }
}

export function loadCards() {
  return (dispatch) => {
    // fetch, .then( convert to JSON object ) .then( take that response and serve the JSON object as the payload )
    return fetch('/cards')
      .then(response => {
        return response.json();
      })
      .then(cards => {
        return dispatch({
          type : LOAD_CARDS,
          payload : cards
        })
      });
  }
}
