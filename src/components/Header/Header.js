import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '200px' }}>
            <div>
                <h2>City Rides</h2>
            </div>
            <nav className="nav">
                <ul>

                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login">{loggedInUser?.email ? loggedInUser.email : 'Login'}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;