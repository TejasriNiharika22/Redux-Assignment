import React from "react";
import { connect } from 'react-redux';
import getCountryList from '../actions/actions-get-dropdownList';
import CommonDropDown from './common/commonDropDown';
class CountriesAndRegionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: [],
      countries: [],
      selectCountry: '',
    };
  }
  componentDidMount() {
    this.setCountries(this.props.Content.regionDropDown[0].name);
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps.result !== nextProps.result) {
      return {
        countries: nextProps.result,
        selectCountry: nextProps.name,
      };
    }
    return null;
  }
  setCountries(name) {
    this.props.getCountryList(name);
    if (this.props.result) {
      this.setState({
        countries: this.props.result,
      })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-20" style={{ textAlign: "center" }}>
          <CommonDropDown id="regionDropDown" label={this.props.Content.regionDropdownLabel}
           handleOnChange={(name)=>this.setCountries(name)} 
           dropdownList={this.props.Content.regionDropDown} />
          <br />
          <CommonDropDown label={this.props.Content.countryDropdownLabel} id="countryDropDown" dropdownList={this.props.result} />
        </div>
      </div >

    )
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.event.result,
    error: state.event.error,
  };
};
const mapsDispatchToProps = (dispatch) => ({
  getCountryList: (name) => dispatch(getCountryList(name))
});
export default connect(mapStateToProps, mapsDispatchToProps)(CountriesAndRegionDropdown);