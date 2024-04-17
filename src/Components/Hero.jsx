import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
    return (
        <div className=" p-12 max-w-7xl mx-auto bg-slate-200">
            <div className=" flex-col lg:flex-row-reverse">

                <div>
                    <h1 className="text-3xl font-bold">Business & eCommerce plans
                    </h1>
                    <p className="py-6">Grow and manage your online business with a custom storefront, catalog and order management,<br /> shipping and taxes, integrated sales channels and more.</p>
                    <a className="flex items-center gap-2  text-blue-600">See Business Plans <FaArrowRight />
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;