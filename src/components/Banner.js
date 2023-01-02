import React from 'react';
//Styles
import styles from '../styles/Banner.module.css';
//Images
import Logo from '../image/logo.png';
import iran from '../image/iranicard2.gif'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <img src={iran} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;