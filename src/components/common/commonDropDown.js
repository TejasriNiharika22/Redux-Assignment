import React, { Component } from "react";

class CommonDropDown extends Component {
    handleDropdownChange(e) {
        e.preventDefault();
        this.props.handleOnChange(e.target.value)
        // this.setCountries(e.target.value);
    }
    render() {
        const dropdownList = this.props.dropdownList

        return (
            <div>
                <label>{this.props.label}</label>
                <select
                    id={this.props.id}
                    onChange={(e) => this.handleDropdownChange(e)} style={{ textAlign: "center", color: "green", width: "300px" }}>
                    {
                        dropdownList.map(x => {
                            return <option>{x.name}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default CommonDropDown;