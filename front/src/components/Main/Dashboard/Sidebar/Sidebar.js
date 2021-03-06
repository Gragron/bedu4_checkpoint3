import React, {Component} from 'react';

// components react
import { SideNav } from 'react-materialize';
import { Link } from 'react-router-dom'

// styles
import './Sidebar.css';

class Sidebar extends Component {

    getSiblings = (elem) => {

        // Setup siblings array and get the first sibling
        var sibling = elem.parentNode.parentNode.firstChild;

        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {                          
                sibling.classList.remove('active');
            }
            sibling = sibling.nextSibling
        }
       
        elem.parentNode.classList.add('active');
    
    };

    handleClick = (event) => {
        this.getSiblings(event.target);
    }

    componentDidMount(){        
        if (this.props.location.pathname === '/dashboard/history'){
            this.getSiblings(document.getElementById('history'));
        }
    }

    render(){           

        var sbar = {
            marginTop: '64px'
        }
    
        return(
        
            <>
                <SideNav id='SideNav' className='blue-grey darken-3' style={sbar} fixed>
                    <li className='active'>
                        <Link onClick={(e) => this.handleClick(e)} to="/dashboard" className="link textCoiny" id='dashboard'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={(e) => this.handleClick(e)} to="/dashboard/history" className="link textCoiny" id='history'>Payment history</Link>
                    </li>
                </SideNav>
    
            </>
        );
    }
}

export default Sidebar;
