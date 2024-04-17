import React from 'react';
import image1 from '../assets/images/visa.png'
import image2 from '../assets//images/unoon.png'
 import image3 from '../assets/images/American.webp'
import image4 from '../assets/images/png-clipart-mastercard-mastercard.png'
import image5 from '../assets/images/ali.png'

import image14 from '../assets/images/days-go-last-countdown-icon-260nw-2150592977.png'

import image28 from '../assets/images/secure-ssl-encryption-logo-secure-connection-icon-vector-illustration-ssl-certificate-icon_526569-863 [MConverter.eu].png'

const Visa = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mt-8 mb-8 p-2'>
                <p>Displayed prices are for yearly subscriptions, paid in full at the time of purchase. Prices do not include applicable taxes, which are determined according to your billing address The final price can be seen on the purchase page, before payment is completed.</p>
            </div>
            <hr className='mb-8'/>
            <div className='p-2 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1'>
                <div className='flex-col lg:ps-0 md:ps-0 ps-12 mt-8'>
                    <div>
                        <h2 className='font-black mb-4'>ACCEPTED PAYMENT METHODS</h2></div>
                    <div className='flex items-center gap-2 mb-8'>
                        <img className='h-4 w-12' src={image1} alt="" />
                        <img className='h-6 w-12 ' src={image2} alt="" />
                        <img className='h-8 w-12' src={image3} alt="" />
                        <img className='h-4 w-8' src={image4} alt="" />
                        <img className='h-6 w-12' src={image5} alt="" /> 


                    </div>
                </div>
                <div className='flex justify-center items-center border-x-4 '>
                    <div>
                        <img className='h-16 w-16' src={image14} alt="" />
                    </div>
                    <div>
                        <p className='font-black   text-start ps-2 pb-2'>MONEY BACK GUARANTEE</p>
                    <p className='text-start ps-2 text-xs '>try wix for 14 days and if you are not 100% <br/>satisfied ,get your money back</p></div>
                    <div></div>
                </div>
                <div className='flex justify-center items-center '>
                    <div>
                        <img className='h-32 w-32' src={image28} alt="" />
                    </div>
                    <div>
                        <p className='font-black   text-start ps-2 pb-2'>SSL SECURE PAYMENT</p>
                    <p className='text-start ps-2 text-xs '>Your information is protected by 256-bit SSL <br/>satisfied ,get your money encryption</p></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Visa;
