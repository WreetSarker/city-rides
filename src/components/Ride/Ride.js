import React from 'react';
import { useHistory } from 'react-router';
import './Ride.css'

const Ride = (props) => {
    const { title, imgUrl, price } = props.ride;
    const history = useHistory();
    const handleBook = (ride) => {
        history.push(`ride/${ride}`)
    }
    return (
        <div onClick={() => handleBook(title)} className="vehicle-holder">
            <div>
                <img style={{ width: '160px' }} src={imgUrl} alt="" />
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Ride;