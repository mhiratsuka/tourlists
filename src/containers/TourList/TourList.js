import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import styles from'./TourList.module.css';
import Tours from '../Tours/Tours';
import TourDetail from '../TourDetail/TourDetail';

class TourList extends Component {
  
  render() {
    return (
      <div className={styles.TourList}>
          <Link to="/">
            <h1>Tours</h1>
          </Link>
          <Switch>
          <Route path="/" exact component={Tours}/>
          <Route path="/:uid" exact component={TourDetail}/>
        </Switch>
      </div>
    );
  }
}

export default TourList;