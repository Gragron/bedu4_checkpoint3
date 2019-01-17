import React, { Component } from 'react';

// styles
import './Navbar.css';

// components materialize
import {Navbar, NavItem} from 'react-materialize'

class Upbar  extends Component {

    render(){

        return (
            <>
                <Navbar id='Navbar'
                    className='blue-grey darken-4'
                    brand={
                        <div className='valign-wrapper'>
                            <img src='./img/Wallet1.png' className="brand responsive-img" alt='Logo'></img>
                            <span className='txtCoiny'>WatchWallet</span>
                        </div>
                    }
                    right 
                    fixed
                >
                    <NavItem onClick={() => console.log('test click')} className='green-1'>Cerrar Sesion</NavItem>
                </Navbar>
            </>
        )

    }


}



export default Upbar;