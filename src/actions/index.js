/**
 * Actions
 */

export const ADD_CARD = 'ADD_CARD';

/**
 * Action Creators
 */

export function addCard(newCard) {
  return {
    type : ADD_CARD,
    payload : newCard
  }
}
