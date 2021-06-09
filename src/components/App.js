import React, { Component } from 'react';
import styles from '../styles/App.css'
import CountriesAndRegionDropdown from './countriesAndRegionDropdown';
import MockContent from '../mock/countryRegionMock';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1 style={{ textAlign: "center" }}>{this.props.Content.heading}</h1>
        <div className="row">
          <form className="row g-3">
            <CountriesAndRegionDropdown Content={this.props.Content}/>
          </form>
        </div>
      </div>
    );
  }
}
App.defaultProps = { Content: MockContent }

export default App;
