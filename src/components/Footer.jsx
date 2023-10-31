import React from 'react'
import { FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div >
                <h6 className='font-bold uppercase pt-2'> Solutions</h6>
                <ul>
                    <li className='py-1'>Binding Services</li>
                    <li className='py-1'>Copy Services</li>
                    <li className='py-1'>Laminating Services</li>
                    <li className='py-1'>Stationery Sales</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div >
                <h6 className='font-bold uppercase pt-2'> Solutions</h6>
                <ul>
                    <li className='py-1'>Binding Services</li>
                    <li className='py-1'>Copy Services</li>
                    <li className='py-1'>Laminating Services</li>
                    <li className='py-1'>Stationery Sales</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div >
                <h6 className='font-bold uppercase pt-2'> Solutions</h6>
                <ul>
                    <li className='py-1'>Binding Services</li>
                    <li className='py-1'>Copy Services</li>
                    <li className='py-1'>Laminating Services</li>
                    <li className='py-1'>Stationery Sales</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'> Get Quotes</p>
                <p className='py-4'> The latest features and resources sent to your inbox weekly</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4' type="email" placeholder='Enter email..' />
                    <button className='p-2 mb-4'> Get Quote</button>
                </form>

            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
    <p className='py-4'>2023 Brand, LLC. All rights reserved</p>
    <div className='flex justify-between sm:-mx-4 sm:px-4 pt-4 text-2xl'>
        <div className='px-4'>
            <FaFacebook />
        </div>
        <div className='px-4'>
            <FaInstagram />
        </div>
        <div className='px-4'>
            <FaTwitch />
        </div>
    </div>
</div>

    </div>
  )
}

export default Footer