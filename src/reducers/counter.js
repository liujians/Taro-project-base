import { GET_LIST_DATA } from '../constants/counter';

const INITIAL_STATE = {
  positionsList: [],
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LIST_DATA:
      return {
        ...state,
        positionsList: [...state.positionsList, ...action.positionsList],
      };
    default:
      return state;
  }
}
