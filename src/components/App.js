import React, { Component } from 'react';
import styles from '../styles/App.css'
import DropDown from './dropDown';
import mock from '../mock/data';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>{this.props.Content.heading}</h1>
        <div className="container">
          <div className="row">
            <form className="row g-3">
              <DropDown />
            </form>
          </div>
        </div>

      </div>
    );
  }
}

App.defaultProps = { Content: mock }

export default App;
