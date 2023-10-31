import React from 'react'
import { CloudUploadIcon } from '@heroicons/react/solid';
import { DatabaseIcon } from '@heroicons/react/solid';
import { PaperAirplaneIcon } from '@heroicons/react/solid';


import bgImg from '../assets/targ.jpg'

const Hero = () => {
  return (
    <div name='Home' className='w-full bg-zinc-200 flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>

            <p className='text-2xl'> Unique Production & Services</p>
            <h1 className='py-3 text-5xl md:-7xl font-bold'> In Store Purchase</h1>
            <p className='text-2xl'> This is our Tech brand</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div> 
            <img className = 'w-full' src={bgImg} alt="/"  />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-18%] mx-1 md:left-1/2 transform md:-translate-x-1/2
        bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
            <p> Professional Services</p>
        
        <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'></CloudUploadIcon> Copy Services </p>
            <p className='flex px-4 py-2 text-slate-500'> <DatabaseIcon className='h-6 text-indigo-600'></DatabaseIcon>Binding Services </p>
            <p className='flex px-4 py-2 text-slate-500'> <PaperAirplaneIcon className='h-6 text-indigo-500'></PaperAirplaneIcon>Laminating Services</p>
            

        </div>

    </div>

    </div>
    </div>
  )
}

export default Hero