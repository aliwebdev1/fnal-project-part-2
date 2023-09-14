import React from 'react';
import bannerImage from '../../../assets/images/chair.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import bannerBG from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${bannerBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

            className="hero py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Stard</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;