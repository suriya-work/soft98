import React from 'react';
//Styles
import styles from "../styles/Header.module.css";
import Night from "../image/night-mode.png"
import Email from "../image/email.png";
import User from "../image/user.png";
import Magnifying from "../image/magnifying-glass.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <a href="#">خانه</a>
                    </li>
                    <li>
                        <a href="#">سیستم عامل</a>
                    </li>
                    <li>
                        <a href="#">نرم افزار</a>
                    </li>
                    <li>
                        <a href="#">موبایل</a>
                    </li>
                    <li>
                        <a href="#">گرافیگ</a>
                    </li>
                    <li>
                        <a href="#">آموزشی</a>
                    </li>
                    <li>
                        <a href="#">بازی</a>
                    </li>
                    <li>
                        <a href="#">بخش اندروید</a>
                    </li>
                    <li>
                        <a href="#">رفع مشکلات نرم افزاری</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.images}>
                <img src={Night} alt="svg" />
                <img src={Email} alt="svg" />
                <img src={User} alt="svg" />
                <img src={Magnifying} alt="svg" />
            </div>
        </header>

    );
};

export default Header;