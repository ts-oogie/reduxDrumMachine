import { PLAY_KEY, CHANGE_VOLUME, SELECT_BANK, TOGGLE_POWER } from "../actionTypes/actionTypes";

const changeVolume = (value) => {
  return {
    type: CHANGE_VOLUME,
    volume: value
  }
}

const playKey = (key) => {
  return {
    type: PLAY_KEY,
    key: key
  } 
}

const selectBank = (bank) => {
  return {
    type: SELECT_BANK,
    bank: bank
  }
} 

const togglePower = (val) => {
  return {
    type: TOGGLE_POWER,
    power : val
  }
}

export { playKey, changeVolume, selectBank, togglePower };