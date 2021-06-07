import axios from "axios";
import event_Types from '../actions/actionTypes/eventTypes'

const getList = (name) => async (dispatch) => {
    dispatch(SET_DROPDOWN_BEGIN());
    await axios
        .get('https://restcountries.eu/rest/v2/region/' + name)
        .then((response) => {
            console.log("success", response.data);
            dispatch(SET_DROPDOWN_VALUES(response.data));
        })
        .catch((error) => {
            dispatch(SET_DROPDOWN_VALUES_ERROR(error));
            console.log(error);
        });
}

const SET_DROPDOWN_BEGIN = () => {
    return {
        type: event_Types.SET_DROPDOWN_BEGIN,
        payload: {
            isLoading: true,
        }
    }
};

const SET_DROPDOWN_VALUES = (result) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES,
        payload: result,
    };
};

const SET_DROPDOWN_VALUES_ERROR = (error) => {
    return {
        type: event_Types.SET_DROPDOWN_VALUES_ERROR,
        payload: error,
    };
};

export default getList;

