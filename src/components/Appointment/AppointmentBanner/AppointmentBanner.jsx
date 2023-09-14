import React, { useState } from 'react';
import bannerImage from '../../../assets/images/chair.png';
import bannerBG from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <div
            style={{
                background: `url(${bannerBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

            className="hero py-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className=" rounded-lg shadow-2xl lg:w-1/2" />
                <div className='mr-6 sm:w-full lg:w-1/3'>

                    <div>
                        <DayPicker
                            className='bg-base-100 p-3 rounded'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;