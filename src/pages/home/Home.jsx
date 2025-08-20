import React from 'react'
import Hero from './Hero'
import WhyChoosingUs from './WhyChoosingUs'
import Products from '../shop/Products'
import Experiences from './Experiences'
import Matarials from './Matarials'


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <WhyChoosingUs></WhyChoosingUs>
            <Products headline="Best Selling Products"></Products>
            <Experiences></Experiences>
            <Matarials></Matarials>

        </>
    )
}

export default Home