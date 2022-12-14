import './Nav.css';
import './NavQueries.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoPowerSharp } from 'react-icons/io5';
import { FaArrowCircleRight } from 'react-icons/fa';

const Nav = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <nav className='payment-nav-container'>
            <div>
                <h1>Tokopedei <span><IoPowerSharp className='power-icon' />nline</span> </h1>
                <div>
                    <h2>Informasi Pembayaran dan Pengiriman</h2>
                    <button
                        onClick={() => { 
                            history.push('/');
                            dispatch({type: 'SET_CART_SUMMERY', cartSummery: []});
                    }}
                    >
                        Lanjut Belanja <span><FaArrowCircleRight /></span>
                    </button> 
                </div>
            </div>
        </nav>
    );
}

export default Nav;