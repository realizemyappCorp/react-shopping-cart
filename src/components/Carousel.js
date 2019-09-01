import React from 'react';

// import neil from '../images/neil-soni.jpg';
// import car from '../images/car.png';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import '../scss/components/carousel.scss';
import '../scss/components/presentation.scss';



export default class Tourne extends React.Component {
  render() {
    return( 
      <div className="presentation-mode" height="50%">
        <Carousel infiniteLoop useKeyboardArrows autoPlay  width="100%">
        {/* className="my-slide content" */}
            <div  width="100%">
                <img src={img1} width="100%" />
            </div>
            {/* <div  width="100%">
                <img src={img2} width="100%" />
            </div> */}
            <div  width="100%">
                <img src={img3} width="100%" />
            </div>
            <div  width="100%">
                <img src={img4} width="100%" />
            </div>

        </Carousel>
      </div>
    ) 
  }
}
