import React from 'react'
import ButtonIcon from '../assets/button-icon.png'

const Button = () => {
    return (
        <div className='flex gap-2'>
            <button class="text-[rgba(229,132,17,1)] ">
                More Info
            </button>
            <img src={ButtonIcon} alt="" />
        </div>

    )
}

export default Button