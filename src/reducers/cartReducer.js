import { PLAY_KEY, CHANGE_VOLUME, SELECT_BANK, TOGGLE_POWER } from "../actionTypes/actionTypes";

const initialState = {
  bank : 1,
  volume : 50, 
  key : null,
  power : "on"
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_KEY :
      return {
        ...state,
        key: action.key
      }  
    case CHANGE_VOLUME : 
      return {
        ...state,
        volume: action.volume
      }
    case SELECT_BANK : 
    return {
      ...state,
      bank: action.bank
    }
    case TOGGLE_POWER : 
    return {
      ...state,
      power: action.power
    }

    default:
      return state;
  }
};

export default cartReducer;