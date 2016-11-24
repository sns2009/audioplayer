export function changeCardsStatus(cardsToChange, status) {
  return {
    type: 'CHANGE_CARD_STATUS',
    cardsToChange,
    status,
  };
}
export function setPrevFieldSize(prevFieldSize) {
  return {
    type: 'SET_PREV_FIELD_SIZE',
    prevFieldSize,
  };
}
