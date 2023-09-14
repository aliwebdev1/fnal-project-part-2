import React from 'react';

const Review = ({ review }) => {
    const { name, description, img, address } = review;
    return (
        <div className="card  p-6 shadow-xl">
            <p>{description}</p>
            <div className="flex items-center mt-6">
                <div className='w-16 mr-5 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;