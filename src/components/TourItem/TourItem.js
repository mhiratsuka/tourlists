import React from 'react';
import { Rating } from '@material-ui/lab';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from 'react-router-dom';

import styles from './TourItem.module.css';

const imagePlacefolder = "https://cdn.pixabay.com/photo/2016/12/11/08/01/coming-soon-1898936_1280.jpg";

const touritem = (props) => {
    const duration = props.duration ? 
        (<div className={styles.Duration}>
            <ScheduleIcon fontSize="small" /> 
            <span>{props.duration}</span>
        </div>) : null;

    return (
        <div className={styles.TourItem}>
        <div className={styles.ImageContainer}>
            <img src={props.image != null ? props.image : imagePlacefolder} alt={props.title} />
        </div>
        <div className={styles.ContentMain}>
            <h2>{props.title}</h2>
            <div className={styles.Rating}>
                <Rating className={styles.RatingIcon} value={parseInt(props.rating)} size="small" readOnly={true} precision={0.5} />
                <span className={styles.RatingCount}>{props.ratingcount} Reviews</span>
            </div>
            <div className={styles.Description}>{props.description}</div>
        </div>
        <div className={styles.ContentSide}>
            <div className={styles.Cost}> from <span>{props.currencysymbol}{props.cost}</span></div>
            <Link to={'/' + props.tourid}>
                <div className={styles.PrimaryButton} onClick={props.click}>Learn More</div>
            </Link>
            {duration}
        </div>
    </div>
    )
};

export default touritem;
