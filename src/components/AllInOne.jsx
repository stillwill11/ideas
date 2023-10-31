import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const AllInOne = () => {
  return (
    <div name='Platform' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'> All-In-One Platform</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>A Company that caters to businesses, professionals, and individuals who require these services and supplies for their daily work. These services can be particularly valuable for businesses that rely on professional-looking documents and presentations.</p>
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>

                   
                    <div>
                        <h3 className='font-bold text-lg'>Stationery Sales</h3>
                        <p className='text-lg pt-2 pb-4'>Retailing various office supplies, including paper, pens, notepads, staplers, paperclips, and other stationery items.</p>

                    </div>
                </div>

                
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>

                   
                    <div>
                        <h3 className='font-bold text-lg'>Laminating Services</h3>
                        <p className='text-lg pt-2 pb-4'> Laminating documents to protect them from wear and tear. This is commonly used for items like ID cards, signs, and frequently referenced documents.</p>

                    </div>
                </div>
                
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>

                   
                    <div>
                        <h3 className='font-bold text-lg'>Copy Services</h3>
                        <p className='text-lg pt-2 pb-4'>Providing photocopying and printing services to customers. This can include black-and-white or color copying, large format printing, and more.</p>

                    </div>
                </div>
                
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>

                   
                    <div>
                        <h3 className='font-bold text-lg'>Binding Services</h3>
                        <p className='text-lg pt-2 pb-4'> Offering binding solutions for documents, reports, and presentations. This can involve various binding methods such as spiral binding, comb binding, or thermal binding.</p>

                    </div>
                </div>
            



        </div>
        
        
        </div>
    </div>
  )
}

export default AllInOne