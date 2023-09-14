import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className=" p-10 ">
            <div className="footer">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">ORAL HEALTH</header>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </nav>
                <nav>
                    <header className="footer-title">Address</header>
                    <div>
                        <p>New York - 101010 Hudson</p>
                    </div>
                </nav>
            </div>
            <div className='text-center mt-35'>
                <p >Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;