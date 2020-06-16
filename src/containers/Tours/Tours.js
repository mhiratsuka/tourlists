import React, { Component } from 'react';
import axios from 'axios';

import TourItem from '../../components/TourItem/TourItem';


class Tours extends Component {
    state = {
        tours: [],
        hasTours: false,
    }

    componentDidMount() {
        axios.get('https://parsernew.rzg.ca/test/awesome.json')
          .then( response => {
            this.setState({tours: response.data.item, hasTours: true})
          });
    }

    render()  {
        let tourLists = null;

        if (this.state.hasTours) {
            tourLists = this.state.tours.map((tour, index) => {
                const clearnDescription = tour.details.overview.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, '');
                const duration = typeof tour.duration === 'object' ? "" :  tour.duration;
        
                return (
                        <TourItem 
                            key={tour.uid}
                            tourid={tour.uid}
                            title={tour.item}
                            image={tour.media.image ? tour.media.image[0].path : null}
                            cost={tour.starting}
                            currencysymbol={tour.currency_symbol}
                            duration={duration}
                            description={clearnDescription}
                            rating={tour.rating}
                            ratingcount={tour.rating_count}
                        />
                )
            });
        }

        return (
            tourLists
        )
    }

}

export default Tours;