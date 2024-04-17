import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";


//           <IoIosInformationCircleOutline />
//          <GoDash />
//         <IoMdCheckmark />



const Table = () => {



    return (

        
        <div className="overflow-x-auto max-w-7xl mx-auto mt-8 pt-8 mb-8">
            <table className="table table-xs ">
                <thead className='text-black '>
                    <tr>
                        <th></th>
                        <th className=' pt-4'>
                            <div className='text-center '>
                                <div>
                                    <p className='font-black text-xl'>VIP</p>
                                    <p className=' font-normal mb-8'>first priority support</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-4xl'>500</div>
                                    <div>py6<br />/month</div>
                                </div>
                            </div>

                        </th>
                        
                        <th className='  bg-gray-300'>
                        <div className="border  sticky shadow-2xl py-1 bg-white text-fuchsia-600  text-center -mt-4 mb-4 rounded-full ">
                                  MOST POPULAR</div>
                            
                            
                            <div className='text-center '>
                            
                                <div>
                                
                                
                                    <p className='font-black text-xl '>Unlimited</p>
                                    <p className=' font-normal mb-8'>Entrepreneurs &<br />Freelancers</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-4xl'>200</div>
                                    <div>py6<br />/month</div>
                                </div>
                            </div>
                        </th>
                        <th className=' pt-4'>
                            <div className='text-center '>
                                <div>
                                    <p className='font-black text-xl'>Combo</p>
                                    <p className=' font-normal mb-8'>For personal use</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-4xl'>150</div>
                                    <div>py6<br />/month</div>
                                </div>
                            </div>
                        </th>
                        <th className=' pt-4'>
                            <div className='text-center '>
                                <div>
                                    <p className='font-black text-xl'>Connect Domain</p>
                                    <p className=' font-normal mb-4'>Most Basic</p>
                                </div>
                                <div className='flex gap-2 items-center mb-4 justify-center'>
                                    <IoIosInformationCircleOutline className='' />
                                    <p className='font-light text-gray-500'>This plan displays wix adds</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='text-4xl'>90</div>
                                    <div>py6<br />/month</div>
                                </div>
                            </div>
                        </th>

                    </tr>
                </thead>
                <tbody  >
                   
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th>
                            <div className='flex justify-between'>
                                <p className='text-base'>Free domain for 1 year</p>
                                <p><IoIosInformationCircleOutline className='text-xl' /></p>
                            </div>
                        </th>
                        <td >
                            <div
                            className=' flex justify-center  mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>
                        <td  className='bg-gray-300'>
                            <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>
                        <td >
                            <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>
                        <td >
                            <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Bandwidth</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td  >
                            <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>
                        <td className='bg-gray-300'>
                            <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>
                        <td >
                            <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div>
                        </td>
                        <td >
                            <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div>
                        </td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Storage space</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td>35 GB</td>
                        <td className='bg-gray-300'>10 GB </td>
                        <td>3 GB</td>
                        <td>500  MB</td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Vide hours</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td>5 hours</td>
                        <td className='bg-gray-300'>1 hour</td>
                        <td>30 minutes</td>
                        <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Yandex voucher</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                        <td className='bg-gray-300'> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>

                    </tr>
                    <tr className='h-12' >
                        <th> <div className='flex justify-between items-center'>
                            <div >
                                <p className='text-base'>Site Booster app<br /> <small className='font-light '>Free for 1 year</small></p>
                                {/*  */}
                            </div>
                            <div>
                                <p><IoIosInformationCircleOutline className='text-xl' /></p>
                            </div>
                        </div></th>
                        <td className='text-center'> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                        <td className='text-center bg-gray-300'> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                            <td > <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>

                    </tr>
                    <tr className='h-12'>
                        <th><div className='flex justify-between items-center '>
                            <div>
                                <p className='text-base'>Visitor Analytics app<br /> <small className='font-light '>Free for 1 year</small></p>
                            </div>
                            <div>
                                <p><IoIosInformationCircleOutline className='text-xl' /></p>
                            </div>
                        </div></th>
                        <td className='text-center'> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                        <td className='text-center bg-gray-300'> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Professional logo</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                            <td className='bg-gray-300'> <div
                            className=' flex justify-center mt-2 '><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Social Media logo files</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td> <div
                            className=' flex justify-center mt-2'><IoMdCheckmark className='text-xl '/>
                            </div></td>
                            <td className='bg-gray-300'> <div
                            className=' flex justify-center mt-2 '><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>
                            <td> <div
                            className=' flex justify-center mt-2'><GoDash className='text-lg '/>
                            </div></td>

                    </tr>
                    <tr className='h-12' style={{ textAlign: 'center' }}>
                        <th> <div className='flex justify-between'>
                            <p className='text-base'>Customer care</p>
                            <p><IoIosInformationCircleOutline className='text-xl' /></p>
                        </div></th>
                        <td>24/7 customer care</td>
                        <td className='bg-gray-300'>24/7 customer care</td>
                        <td>24/7 customer care</td>
                        <td>24/7 customer care</td>

                    </tr>



                </tbody>

            </table>
        </div>
    );
};

export default Table;