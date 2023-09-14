import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import treatment from "../../../assets/images/treatment.png"

const DentalCare = () => {
    return (
        <div className="hero py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className='ps-5'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        GET STARTED</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>

                <img src={treatment} className="rounded-lg lg:w-2/5 h-2/6 shadow-2xl" />
            </div>
        </div>
    );
};

export default DentalCare;