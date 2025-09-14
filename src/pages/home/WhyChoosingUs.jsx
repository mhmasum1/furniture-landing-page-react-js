import React from 'react'
import Button from '../../components/Button'

const WhyChoosingUs = () => {
    return (

        <section className=' max-w-screen-2xl container mx-auto '>
            <div className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12 text-left px-5 '>

                <div >
                    <h2 className='font-bold text-4xl'>Why <br />
                        Choosing Us</h2>
                </div>
                <div className=''>
                    <h3 className='text-2xl font-normal'>Affordable Price</h3>
                    <p className='text-base mb-2'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <Button></Button>
                </div>
                <div className=''>
                    <h3 className='text-2xl font-normal'>Luxury facilities</h3>
                    <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <Button></Button>
                </div>
                <div className=''>
                    <h3 className='text-2xl font-normal'>Many Choices</h3>
                    <p className='text-base mb-2'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <Button></Button>
                </div>
            </div>

        </section>

    )
}

export default WhyChoosingUs