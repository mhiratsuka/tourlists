import React from 'react';

import styles from './TourDetail.module.css';


const TourDetail = (props) => (
    // console.log(props);
    <div className={styles.TourDetail}>
        <p>{props.tour}</p>
        <p>detail</p>
    </div>
);

export default TourDetail;
