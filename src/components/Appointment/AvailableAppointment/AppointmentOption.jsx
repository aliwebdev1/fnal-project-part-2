import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOption }) => {
    const { _id, name, slots } = appointmentOption;
    return (
        <div className="card  p-6 text-center shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"}  Available</p>
                <PrimaryButton>Book Appointment</PrimaryButton>

            </div>
        </div>
    );
};

export default AppointmentOption;