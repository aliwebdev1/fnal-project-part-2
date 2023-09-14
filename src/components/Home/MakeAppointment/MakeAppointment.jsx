import React from 'react';
import appintmentBg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appintmentBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

            className="hero mt-20">
            <div className="hero-content p-0 flex-col lg:flex-row">
                <img src={doctor} className="-mt-32 rounded-lg lg:w-1/2 " />
                <div className='text-white'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;