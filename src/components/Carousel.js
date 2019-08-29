import React from 'react';

import neil from '../images/neil-soni.jpg';
import car from '../images/car.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const images = [{ source: neil, source: car , source: car }];

export default class Tourne extends React.Component {
  render() {
    return( 
        <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight centerMode >
            <div >
                <img src={neil} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={car}/>
                <p className="legend">Legend 2</p>
            </div>

        </Carousel>
    ) 
  }
}
