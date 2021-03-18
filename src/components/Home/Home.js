import React from 'react';
import Ride from '../Ride/Ride';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rides = [
        {
            title: 'BIKE',
            imgUrl: bike,
            price: 119
        },
        {
            title: 'CAR',
            imgUrl: car,
            price: 139
        },
        {
            title: 'BUS',
            imgUrl: bus,
            price: 149
        },
        {
            title: 'TRAIN',
            imgUrl: train,
            price: 109
        },
    ]
    return (
        <div style={style}>
            {
                rides.map(ride => <Ride ride={ride}></Ride>)
            }
        </div>
    );
};

export default Home;