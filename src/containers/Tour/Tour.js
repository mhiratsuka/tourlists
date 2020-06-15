import React, { Component } from 'react';
import axios from 'axios';

import styles from'./Tour.module.css';
import TourItem from '../../components/TourItem/TourItem';
import TourDetail from '../../components/TourDetail/TourDetail';

class Tour extends Component {
  state = {
      tours: [],
      hasTours: false,
      currentTour: [],
      clickedCurrentTour: false
  }

  componentDidMount() {
    axios.get('https://parsernew.rzg.ca/test/awesome.json')
      .then( response => {
console.log(response.data.item);
        this.setState({tours: response.data.item, hasTours: true})
      });
  }
  
  onTourClickHandler = (index) => {
    const getTour = this.state.tours[index];
console.log(getTour);

    // this.setState({currentTour: getTour});
    // console.log(this.state.tours);
    // console.log(this.state.currentTour);

    this.setState({currentTour: getTour}, function () {
      console.log(this.state.currentTour);
  });

  this.setState({clickedCurrentTour: true}, function () {
    console.log(this.state.clickedCurrentTour);
});

    // this.setState({clickedCurrentTour: true});
    // console.log(this.state.clickedCurrentTour);
  } 
  
  render() {
    let tourLists = null;
    // let tourdetails = null;
console.log(this.state.currentTour);

    if (this.state.hasTours) {
      tourLists = this.state.tours.map((tour, index) => {
        const clearnDescription = tour.details.overview.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, '');
        const duration = typeof tour.duration === 'object' ? "" :  tour.duration;

        return <TourItem 
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
          click={() => this.onTourClickHandler(index)}
          />
      });
    }

    // if (this.state.clickedCurrentTour) {
    //   const tourdetails = <TourDetail 
    //       tour={this.state.currentTour}
    //     />
      
    // }
    console.log(this.state.currentTour);

    return (
      <div className={styles.Tour}>
        <h1>Tours</h1>
        {tourLists}
        <TourDetail tour={this.state.currentTour} />
      </div>
    );
  }
}

export default Tour;