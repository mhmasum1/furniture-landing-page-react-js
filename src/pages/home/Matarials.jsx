import React from 'react'
import Button from '../../components/Button'
import matarialImg1 from '../../assets/material1.png'
import matarialImg2 from '../../assets/material2.png'
import matarialImg3 from '../../assets/material3.png'

const Matarials = () => {
    return (
        <section className='max-w-screen-2xl container mx-auto my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 px-5'>

            <div className=' md:w-1/2 mx-auto'>
                <h3 className=' uppercase text-lg font-semibold text-primary mb-4'>Materials</h3>
                <h2 className=' capitalize text-4xl font-bold mb-4 lg:w-1/2'> Very serious materials for making furniture</h2>
                <p className=' text-black dark:text-white mb-5 lg:w-1/2'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <Button></Button>
            </div>
            <div className='md:w-1/2 grid grid-cols-1 md:grid-cols-3 md:items-end gap-2'>
                {/* Small screen: সবগুলো vertically stack হবে */}

                {/* Left Small Images */}
                <div className='md:col-span-1 flex md:block gap-2'>
                    <img src={matarialImg1} alt="" className='w-1/2 md:w-full' />
                    <img src={matarialImg2} alt="" className='w-1/2 md:w-full' />
                </div>

                {/* Right Big Image */}
                <div className='md:col-span-2'>
                    <img src={matarialImg3} alt="" className='w-full md:h-[541px]' />
                </div>
            </div>

        </section>
    )
}

export default Matarials