import event_Types from '../actions/actionTypes/eventTypes';
const INITIAL_STATE = {
  result: [],
  error: null
}

const countryRegionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case event_Types.SET_DROPDOWN_VALUES:
      return {
        ...state,
        error: null,
        result: payload
      }
    case event_Types.SET_DROPDOWN_VALUES_ERROR:
      return {
        ...state,
        error: payload.error,
      }
    default:
      return state;
  }
}

export default countryRegionReducer;