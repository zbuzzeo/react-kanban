/**
 * Actions
 */

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

/**
 * Action Creators
 */

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

export function deleteCard(card) {
  return (dispatch) => {
    return fetch('/', {
      method : 'DELETE',
      body : JSON.stringify(card),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
  }
}
