import React, { useState, } from 'react';
import { useParams } from 'react-router';
import bike from '../../images/Frame.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const DefaultDestination = () => {
    const [value, onChange] = useState(new Date());
    const rides = [
        {
            title: 'BIKE',
            imgUrl: bike,
            price: 119
        },
    ];
    const [vehicleInfo, setVehicleInfo] = useState({});
    const [routes, setRoutes] = useState({
        pick: '',
        drop: ''
    });
    const handleSubmit = (e) => {
        const newVehicle = { ...vehicleInfo };
        newVehicle.title = rides[0].title;
        newVehicle.imgUrl = rides[0].imgUrl;
        newVehicle.price = rides[0].price;
        setVehicleInfo(newVehicle);
        e.preventDefault();
    }
    const handleBlur = (event) => {
        const newRouteInfo = { ...routes };
        newRouteInfo[event.target.name] = event.target.value;
        setRoutes(newRouteInfo);
    }
    return (
        <div className="total-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="destination" style={{ width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Pick Up:
                            <br /><input type="text" name="pick" onBlur={handleBlur} required />
                    </label>
                    <br />
                    <label>
                        Destination:
                            <br /><input type="text" name="drop" onBlur={handleBlur} required />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                {routes.pick && routes.drop && <h2>From: {routes.pick} <br />To: {routes.drop}</h2>}
                {routes.pick && routes.drop && <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%', background: 'white', color: 'black', margin: '2px', border: '1ps solid gray', padding: '2px' }}><img style={{ width: '60px' }} src={vehicleInfo.imgUrl} alt="" /> <h3>{vehicleInfo.title}</h3> <p><small>${vehicleInfo.price}</small></p></div>}
                {routes.pick && routes.drop && <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%', background: 'white', color: 'black', margin: '2px', border: '1ps solid gray', padding: '2px' }}><img style={{ width: '60px' }} src={vehicleInfo.imgUrl} alt="" /> <h3>{vehicleInfo.title}</h3> <p><small>${vehicleInfo.price}</small></p></div>}
                {routes.pick && routes.drop && <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%', background: 'white', color: 'black', margin: '2px', border: '1ps solid gray', padding: '2px' }}><img style={{ width: '60px' }} src={vehicleInfo.imgUrl} alt="" /> <h3>{vehicleInfo.title}</h3> <p><small>${vehicleInfo.price}</small></p></div>}
                <Calendar
                    onChange={onChange}
                    value={value}
                />

            </div>
            <div className="map" style={{ width: '50%' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
            </div>
        </div>
    );
};

export default DefaultDestination;