import burguerMenu from '../assets/images/icon-hamburger.svg'
import { useState } from 'react'

export const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    const handleClick = () => {
       setMenuClicked(prevState => !prevState)
    }
    console.log(menuClicked)

  return (
    <nav className='sm:h-[24px]' >
        <ul className={`${menuClicked ? 'flex' : 'hidden'} bg-white py-[39px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-r-white after:border-b-white after:border-l-transparent text-Dark-grayish-blue text-xl z-10
        
        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:relative sm:text-White sm:mt-0
        md:w-[500px]`}>

            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue uppercase
            
            sm:bg-White sm:hover:bg-opacity-25 sm:text-Black'>Contact</li>
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={handleClick}>
            <img src={burguerMenu} alt="burguer Menu" />
        </div>
    </nav>
  )
}

  
 
  