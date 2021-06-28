import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';


describe('Testing component', () => {
    it('renders if classname exists or not', () => {
        const wrapper = shallow(<App />);
        const classname= wrapper.find(".row");
        expect(classname.exists()).toBe(true);
    });
   
});