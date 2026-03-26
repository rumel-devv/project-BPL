import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-black h-100 p-30">
     <div className='w-full md:w-8/11 mx-auto text-base-content footer sm:footer-horizontal'>
  <nav className='text-white'>
    <h6 className="footer-title text-white text-lg">About Us</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title text-white text-lg">Quick Links</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title text-white text-lg ">Social</h6>
    <p >Subscribe to our Newsletter</p>
    <p>Get the latest updates and news right in your inbox!</p>
        <form> 
                <input
                  className='bg-gray-100 py-1.5 px-3 rounded-md text-black'
                   type='email'  placeholder='Write your email here' />
                   <button className='bg-gray-600 py-1.5 px-3  rounded-r-2xl'>Subcribe</button>
            </form>
  </nav>
</div>
</footer>
    );
};

export default Footer;