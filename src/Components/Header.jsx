import React from 'react';

const Header = () => {
    return (
        <div className='bg-purple-200 h-68 items-center '>

            <div className='text-center  items-center'>
                <h1 className='font-bold text-4xl pt-8 pb-2'>Wix Premium Plans</h1>
                <h4>Wix gives you 100s of template, unlimited pages & top grade <br />
                    hosting FREE. Upgrade tpo premium and get even more.</h4>
                <a className="btn btn-sm border-none bg-fuchsia-600 text-white  rounded-full px-12 m-4">Get Started Today</a>
                <div className='flex justify-center'>
                    <div className='bg-white rounded-t-lg  px-12 py-4  translate-x-4  '>
                        <h1 className='font-medium text-fuchsia-600'>Website Plans</h1>
                        <small className='text-fuchsia-600'>Great for showcasing a professional site</small>
                    </div>
                    <div className='bg-violet-300 rounded-tr-lg px-12 py-4 mb-0 '>
                        <h1>Business and eCommerce Plans</h1>
                        <small>Great for showcasing a professional site</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;