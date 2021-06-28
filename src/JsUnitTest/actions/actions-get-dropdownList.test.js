import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getCountryList  from '../../actions/actions-get-dropdownList';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('getCountriesList actions', () => {
    it('dispatches GET_DROPDOWN_VALUES after a successfull API get requets', () => {
        mock.onGet('https://restcountries.eu/rest/v2/region/Africa').reply(200, { data: [{name: "Algeria"}] })
        store.dispatch(getCountryList("Africa")).then(() => {
            console.log('getCountryList',store.getActions());
            let expectedActions = [

                {
                    type: 'event_Types.SET_DROPDOWN_VALUES',
                    payload: data
                }]
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('dispatches event_Types.SET_DROPDOWN_VALUES_ERROR after a failed API requets', () => {
        mock.onGet('https://restcountries.eu/rest/v2/region/').reply(400, { error: { message: 'error message' } });
        store.dispatch(getCountryList()).then(() => {
            let expectedActions = [
                {
                    type: 'event_Types.SET_DROPDOWN_VALUES_ERROR',
                    payload: { error: { message: 'error message' } }
                }]	           
                 expect(store.getCountryList()).toEqual(expectedActions)
        });
    });
})