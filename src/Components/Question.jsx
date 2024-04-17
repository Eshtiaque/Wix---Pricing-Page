import React from 'react';

const Question = () => {
    return (
        <div className='bg-slate-300  '>
            <div className='mx-auto max-w-7xl pt-48 pb-48 grid lg:grid-cols-3 gap-4 p-2 mt-8'>
                <div className=' lg:ps-0 md:ps-0 ps-6'>
                    <h1 className='font-extrabold text-4xl pb-4'>Frequently Asked <br />Questions</h1>
                    <p>Haven't found what you're looking <br /> for? Try the <small className='text-lg text-blue-400'>Wis Help Center</small> or <br /> <small className='text-blue-400 text-lg'>Contact Us</small></p>

                </div>
                <div className='col-span-2 '>
                    <hr className='mb-8  border-gray-400'/>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                            What is a Premium Plan?
                            </div>
                            <div className="collapse-content">
                                <p>Creating your website is free. With a Premium Plan you can connect your own domain, remove Wix ads from your site, and more, Most Premium Plans include a 1 year free domain voucher. For best value, we recommend our Yearly or Multi-Year Plans.</p>
                            </div>
                        </div>
                        <hr className='mb-8  border-gray-400'/>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            Can I try a Wix Premium Plan for free?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, Try any Wix Premium Plan and if you decide it's not for you, you can cancel within 14 days and receive a full refund-no questions asked. This applies to the initial upgrade to a Premium Plan
</p>
                            </div>
                        </div>
                        <hr className='mb-8  border-gray-400'/>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            How do I get my free domain?
                            </div>
                            <div className="collapse-content">
                                <p>Most Yearly or Multi-Year Premium Plans come with a 1 year free domain voucher. You can choose your own domain name with suffixes such an.com.pet, .org and more. Once you find the perfect domain for your site, your voucher will be waiting for you at checkout</p>
                            </div>
                        </div>
                        <hr className='mb-8  border-gray-400'/>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            Why do I need a custom domain?
                            </div>
                            <div className="collapse-content">
                                <p>A custom domain, like mystunningwebsite.com, is a great way to get found online and promote your brand. Replace your free Wix URL (username.wixsite.com/sitename) with a custom domain you purchased from Wix, or one you already own.</p>
                            </div>
                        </div>
                        <hr className='mb-8  border-gray-400'/>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            How can I get my own personalized email address?
                            </div>
                            <div className="collapse-content">
                                <p>Once you have your own domain, you can purchase a Google Workspace plan and get a custom email address using your domain, like info@mystunningwebsite.com. We've partnered with Google to give you 30GB of Drive storage, as well as Google Calendar, Docs, Sheets and Slides
</p>
                            </div>
                        </div>
                        <hr className='mb-8  border-gray-400'/>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            Where can I find my billing information?
                            </div>
                            <div className="collapse-content">
                                <p>Sign into your Wis account and choose Billing & Payments from the main menu at the top-right of the page. You'll see all your subscriptions and billing history right there.</p>
                            </div>
                        </div>
                        <hr className='mb-8  border-gray-400'/>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            What online payments are accepted?
                            </div>
                            <div className="collapse-content">
                                <p>Wix accepts all major credit cards and debit cards, including Visa, Mastercard, American Express, Discover, JCB and Diners. Additional payment options may be available in your specific location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;