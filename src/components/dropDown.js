import React from "react";
import mock from '../mock/data';
import { connect } from 'react-redux';
import getList from '../actions/actions-get-actions';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: [],
      countries: [],
      selected: '',
    };
  }
  componentDidMount() {
    this.setCountries(this.props.Content.regionDropDown[0]);
    this.setState({
      region: this.props.Content.regionDropDown,
      countries: this.props.result
    });
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps.result !== nextProps.result) {
      return {
        countries: nextProps.result,
        selected: nextProps.name,
      };
    }
    return null;
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (this.state.result !== nextProps.result) {
  //     this.setState({
  //       list: nextProps.result,
  //       selected: nextProps.name
  //     })
  //   }
  // }
  setCountries(name) {
    this.props.getList(name);
    if (this.props.result) {
      this.setState({
        countries: this.props.result,
      })
    }
  }
  handleDropdownChange(e) {
    e.preventDefault();
    this.setCountries(e.target.value);
  }
  render() {
    return (
      <div className="row">
        <div className="col-20">
          <select
            onChange={this.handleDropdownChange.bind(this)} style={{ color: "green", width: "300px" }}>
            {
              this.state.region.map(x => {
                return <option>{x}</option>
              })
            }
          </select>
          <br />
          <br />
          <div className="col-20">
            <select style={{ color: "green", width: "300px" }}>
              {
                this.state.countries.map(x => {
                  console.log(x.name);
                  return <option>{x.name}</option>
                })
              }
            </select>
          </div>
        </div >
      </div>
    );
  }
}
DropDown.defaultProps = { Content: mock }
const mapStateToProps = (state) => {
  return {
    result: state.event.result,
    error: state.event.error,
  };
};
const mapsDispatchToProps = (dispatch) => ({
  getList: (name) => dispatch(getList(name))
});
export default connect(mapStateToProps, mapsDispatchToProps)(DropDown);

