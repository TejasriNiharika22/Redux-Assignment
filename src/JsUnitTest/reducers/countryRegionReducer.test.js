import event_Types from "../../actions/actionTypes/eventTypes";
import countryRegionReducer from '../../reducers/countryRegionReducer';

const initialState = {
    result: '',
    error: null
}
describe('testing reducer', () => {
    it('handles success', () => {
        expect(countryRegionReducer(initialState, {
            type: event_Types.SET_DROPDOWN_VALUES,
            payload: 'India',
        })).toEqual({
            ...initialState,
            result: 'India'
        })
    })
    it('handles error', () => {
        expect(countryRegionReducer(initialState, {
            type: event_Types.SET_DROPDOWN_VALUES_ERROR,
           error: undefined
        })).toEqual({
            ...initialState,
            error : undefined
        })
    })
})