import React, { useState } from 'react'
import { products } from '../../utils/products'
import ProductCart from './ProductCart';
import ButtonIcon from '../../assets/button-icon.png'

const Products = ({ headline }) => {
    const catagories = ['Chair', 'Beds', 'Sofa', 'Lamp'];
    const [selectedCatagory, setSelectedCatagory] = useState("Chair");
    const [visibleProducts, setvisibleProducts] = useState(4);
    const filteredProducts = products.filter((product) => product.category === selectedCatagory)

    const loadMoreProducts = () => {
        setvisibleProducts((prev) => prev + 4)
    }
    return (
        <div>
            <div className='max-w-screen-2xl container mx-auto'>
                <h1 className='text-4xl font-bold text-center my-8'>{headline}</h1>


                {/* Category tabs */}

                <div className='bg-[#F7F7F7] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className=' flex flex-col sm:flex-row items-center md:jus justify-center gap-4'>
                        {
                            catagories.map((catagory) => (
                                <button onClick={() => {
                                    setSelectedCatagory(catagory);
                                    setvisibleProducts(4);
                                }} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selectedCatagory === catagory ? 'bg-white text-primary' : 'text-black'}`} key={catagory}>{catagory}</button>
                            ))
                        }
                    </div>
                </div>
                {/* Products Grid */}
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                        filteredProducts.slice(0, visibleProducts).map((product, index) => (
                            <ProductCart key={index} product={product}></ProductCart>
                        ))
                    }
                </div>
                {/* load More Products */}
                {
                    visibleProducts < filteredProducts.length && (
                        <div className=' flex justify-center items-center mt-8'>
                            <button onClick={loadMoreProducts} className='text-base font-semibold text-primary flex items-center gap-1'>
                                View All
                                <img src={ButtonIcon} alt="" />
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Products