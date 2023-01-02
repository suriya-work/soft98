import React, { useState } from 'react';
//Components
import Show from './Show';
//Styles
import styles from "../styles/Header.module.css";
import Night from "../image/night-mode.png"
import Email from "../image/email.png";
import User from "../image/user.png";
import Magnifying from "../image/magnifying-glass.png";
//images
// import ArrowDown from "../imnage/down-arrow-svg.svg.url";
import menu from '../image/bars.png';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isShowNav, setIsShowNow] = useState(false)

    const handleShowNavbar = () => {
        setIsShowNow(!isShowNav)
    }
    return (
        <header className={styles.header}>
            <div className={styles.menu} onClick={handleShowNavbar}>
                <img src={menu} alt="menu" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">خانه</a>
                    </li>
                    <li onClick={(e) => setOpenMenu(!openMenu)} onMouseEnter={() => setOpenMenu(true)}  >
                        <a href="#">سیستم عامل</a>
                        {
                            openMenu && (
                                <div onMouseLeave={() => setOpenMenu(false)}>
                                    <Show />
                                </div>
                            )
                        }
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