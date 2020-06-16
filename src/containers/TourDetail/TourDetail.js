import React, { Component } from 'react';
import axios from 'axios';
import { Rating } from '@material-ui/lab';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';

import styles from './TourDetail.module.css';

class TourDetail extends Component { 
    state = {
        loadedTour: null,
        hasTour: false,
    }

    componentDidMount() {
        axios.get('https://parsernew.rzg.ca/test/awesome.json')
          .then( response => {
            const tour = response.data.item.filter(tour => tour.uid === this.props.match.params.uid);
            this.setState({loadedTour: tour, hasTour: true})
          });
    }

    render () {
        let tourdetail = null;
        let dropoff, pickup, location, duration, time;

        if (this.state.hasTour) {
            const imagePlacefolder = "https://cdn.pixabay.com/photo/2016/12/11/08/01/coming-soon-1898936_1280.jpg";
            const image = this.state.loadedTour[0].media.image  ? this.state.loadedTour[0].media.image[0].path : imagePlacefolder;
            const clearnDescription = this.state.loadedTour[0].details.overview.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, '');
            const clearnItinerary = this.state.loadedTour[0].details.itinerary.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, '');

            if (typeof this.state.loadedTour[0].details.drop_off === 'string') {
                const clearnDropoff = this.state.loadedTour[0].details.drop_off.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, '');
                dropoff = (
                    <div>
                        <h4>Drop Off</h4>
                        <p>
                            {clearnDropoff}
                        </p>
                    </div>
                );
            }

            if (typeof this.state.loadedTour[0].details.pick_up === 'string') {
                const clearnPickup = this.state.loadedTour[0].details.pick_up.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, '');
                pickup = (
                    <div>
                        <h4>Pick Up</h4>
                        <p>
                            {clearnPickup}
                        </p>
                    </div>
                );
            }

            if (typeof this.state.loadedTour[0].location_address === 'string') {
                location = (
                    <div className={styles.TourDetailSideContentItem}>
                        <LocationOnIcon fontSize="small" style={{fill: "#bd4116"}}/> 
                        <span>{this.state.loadedTour[0].location_address}</span>
                    </div>
                );
            }

            if (typeof this.state.loadedTour[0].duration === 'string') {
                duration = (
                    <div className={styles.TourDetailSideContentItem}>
                        <ScheduleIcon fontSize="small" style={{fill: "#bd4116"}}/> 
                        <span>{this.state.loadedTour[0].duration}</span>
                    </div>
                );
            }

            if (typeof this.state.loadedTour[0].time === 'string') {
                time = (
                    <div className={styles.TourDetailSideContentItem}>
                        <DepartureBoardIcon fontSize="small" style={{fill: "#bd4116"}}/> 
                        <span>{this.state.loadedTour[0].time}</span>
                    </div>
                );
            }

            tourdetail = (
                <div className={styles.TourDetail}>
                    <h2>{this.state.loadedTour[0].item}</h2>
                    <div className={styles.TourDetailRating}>
                        <Rating className={styles.TourDetailRatingIcon} value={parseInt(this.state.loadedTour[0].rating)} size="small" readOnly={true} precision={0.5} />
                        <span className={styles.TourDetailRatingCount}>{this.state.loadedTour[0].rating_count} Reviews</span>
                    </div>
                    <div className={styles.TourDetailTopContent}>
                        <div className={styles.TourDetailImageContainer}>
                            <img src={image} alt={this.state.loadedTour[0].item} />
                        </div>
                        <div className={styles.TourDetailSideContent}> 
                            <div className={styles.TourDetailCost}> from <span>{this.state.loadedTour[0].currency_symbol}{this.state.loadedTour[0].starting}</span></div>
                            <div className={styles.TourDetailSideInfo}> 
                                {location}
                                {time}
                                {duration}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Overview</h3>
                        <p>
                            {clearnDescription}
                        </p>
                    </div>
                    <div>
                        <h4>Itinerary</h4>
                        <p>
                            {clearnItinerary}
                        </p>
                    </div>
                    {pickup}
                    {dropoff}
                </div>
               
            );
        }
        return tourdetail
    }
}


export default TourDetail;
