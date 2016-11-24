import R from 'ramda';


export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_PREV_FIELD_SIZE': {
      const { gameParams } = state;
      gameParams.prevFieldSize = action.prevFieldSize;
      return R.merge(state, { gameParams }); }
    default: return state;
  }
}

