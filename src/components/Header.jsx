import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <header className='absolute w-full px-6 pt-8 font-Barlow'>
            <div className='flex place-content-between'>
                <img src={logo} alt="" />
                <Navbar />
            </div>

        </header>
    )
}

