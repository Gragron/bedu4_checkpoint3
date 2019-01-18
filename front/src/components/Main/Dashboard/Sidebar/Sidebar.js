import React, { Component } from 'react';

// components react
import { SideNav, SideNavItem } from 'react-materialize';

// styles
import './Sidebar.css';

const Sidebar = (props) => {

    var sbar = {
        marginTop: '64px'
    }

    return(
        <>
            <SideNav id='SideNav' className='blue-grey darken-3' style={sbar} fixed>
                <SideNavItem className='textCoiny txt-15 active'>Home</SideNavItem>
                <SideNavItem className='textCoiny txt-15'>Serivicios</SideNavItem>
                <SideNavItem className='textCoiny txt-15'>Historial</SideNavItem>
            </SideNav>
        </>
    );
}

export default Sidebar;
