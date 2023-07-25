import imgMobile from '../assets/images/mobile/image-header.jpg'
import imgDesktop from '../assets/images/desktop/image-header.jpg'
import arrow from '../assets/images/icon-arrow-down.svg'

export const Main = () => {
    return (
        <section>
            <picture>
                <source media="(max-width:639px)" srcSet={imgMobile} />
                <source media="(min-width:640px)" srcSet={imgDesktop} />
                <img src={imgMobile} alt="Bg Header" />
            </picture>
            <p className='absolute w-[327px] top-[144px] text-White uppercase left-0 right-0 mx-auto font-Fraunces text-[40px] tracking-[6.25px] text-center 
            sm:w-[600px]'>
                We are creatives
            </p>
            <img className='absolute top-[294px] left-0 right-0 mx-auto
            sm:top-[220px]' src={arrow} alt="flecha"/>
        </section>

    )
}
