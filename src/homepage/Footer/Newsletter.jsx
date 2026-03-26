import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full md:w-8/11 mx-auto h-80  bg-linear-to-r from-blue-200 to-red-300 rounded-md  '>
            <div className='text-center py-26 md:py-35 space-y-3'>
                 <h2 className='text-2xl md:text-4xl font-semibold'>Subscribe to our Newsletter</h2>
                <p className='text-xs md:text-lg'>Get the latest updates and news right in your inbox!</p>
               <form> 
                <input
                  className='bg-gray-100 py-1.5 px-3 rounded-md'
                   type='email'  placeholder='Write your email here' />
                   <button className='bg-gray-600 py-1.5 px-3 text-white rounded-r-2xl'>Subcribe</button>
            </form>
 
            </div>

        </div>
    );
};

export default Newsletter;