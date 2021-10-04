import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bank1 from '../image/bank1.jpg';
import BG2 from '../image/BG2.jpg';
import bank4 from '../image/bank4.jpg'

class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '50%' }, { align: 'center' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bank1}
                            height='550px'
                            width='50px'
                            align='center'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BG2}
                            height='550px'
                            width='50%'
                            align='center'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bank4}
                            height='550px'
                            width='50%'
                            align='center'
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Home