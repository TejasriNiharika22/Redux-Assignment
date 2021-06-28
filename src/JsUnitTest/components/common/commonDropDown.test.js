import { shallow } from "enzyme";
import CommonDropDown from "../../../components/common/commonDropDown";
describe('passing props', () => {

    let props = {
        dropdownList: [{
            id: "regionDropDown",
            label: "Region"
        }],
        MockContent: {
            heading: "Countries App",
            regionDropDown: [
                {
                    id: "africa",
                    name: "Africa"
                },
                {
                    id: "americas",
                    name: "Americas"
                },
                {
                    id: "asia",
                    name: "Asia"
                },
                {
                    id: "europe",
                    name: "Europe"
                }
            ],
            regionDropdownLabel: "Region",
            countryDropdownLabel: "Country"
        },

        handleOnChange: fn => fn,
        handleDropdownChange: fn => fn
    }
    it('should render classname exists or not', () => {

        const wrapper = shallow(<CommonDropDown {...props} />);
        expect(wrapper.find(".commonselect"));
    });
    it('renders inputfield for handleDropdownChange', () => {
        const wrapper = shallow(<CommonDropDown {...props} />);
       const commonSelect =  wrapper.find(`select`).simulate('change', {
            preventDefault: fn => fn,
            target: {
                name: "Africa"
            }
        });
        expect(commonSelect.exists()).toBe(true);
    });
});
