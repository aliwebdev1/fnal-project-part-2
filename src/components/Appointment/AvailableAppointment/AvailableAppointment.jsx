import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='container my-12'>
            <div className=' text-center'>
                <h4 className='text-primary'>Available Services on {format(selectedDate, "PP")}
                </h4>
                <p>Please select a service.</p>
            </div>

            <div className='grid mt-8 gap-6 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }

            </div>


        </div>
    );
};

export default AvailableAppointment;