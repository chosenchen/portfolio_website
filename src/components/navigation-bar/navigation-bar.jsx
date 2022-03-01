import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../js/index';
import './navigation-bar.scss';

const NavigationBar =()=>{

    useEffect(()=> {
        navigation();
    }, [])
    return (
    <div className = "navigation">
        <div className = "container-fluid">
            <div className = "row">
                    <div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo">
							<Link to = "/"><img src = "images/logo.svg" alt=''/></Link>
						</div>
					</div>

                    <div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                    <div className = "primary-nav">
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default NavigationBar;