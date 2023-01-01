import React from 'react';
//Styles
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>افزونه حذف تبلیغات یا فیلترشکـن را در مرورگر غیرفعال کنید، سپس F5 بزنید.</p>
            <span>پشتیبانی : SMostafaMoosavi@</span>
        </div>
    );
};

export default Footer;