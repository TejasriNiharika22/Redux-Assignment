import React, { Component } from "react";


class CommonDropDown extends Component {
    render() {
        const dropdownList = this.props.dropdownList

        return (
            <div>
                <label>{this.props.label}</label>
                <select
                    id={this.props.id}
                    onChange={this.props.onChange} style={{ textAlign: "center", color: "green", width: "300px" }}>
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

