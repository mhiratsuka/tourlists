import React, { Component } from 'react';
import styles from './App.module.css';
import Tour from './containers/Tour/Tour';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Tour />
      </div>
    );
  }
}

export default App;
