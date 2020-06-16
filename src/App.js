import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import styles from './App.module.css';
import TourList from './containers/TourList/TourList';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <TourList />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
