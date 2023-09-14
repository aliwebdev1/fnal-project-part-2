import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className='btn btn-primary bg:gradient-to-r from-primay to-secondary text-white'>{children}</button>
    );
};

export default PrimaryButton;