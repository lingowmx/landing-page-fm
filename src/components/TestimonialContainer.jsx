import { Testimonials } from "./Testimonials"
import EmilyPhoto from '../assets/images/image-emily.jpg'
import ThomasPhoto from '../assets/images/image-thomas.jpg'
import JenniePhoto from '../assets/images/image-jennie.jpg'


export const TestimonialContainer = () => {
    return (
        <section className="pt-16 bg-white" >
            <h2 className="text-center uppercase font-Fraunces mb-16 text-Grayish-blue">Client Testimonials</h2>
            <div className="lg:flex lg:w-[980px] lg:mx-auto xl:w-[1110px]">
                <Testimonials
                    img={EmilyPhoto}
                    testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    name='Emily R.'
                    position='Marketing Director'
                />
                <Testimonials
                    img={ThomasPhoto}
                    testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                    name='Thomas S.'
                    position='Chief Operating Officer'
                />
                     <Testimonials
                    img={JenniePhoto}
                    testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name='Thomas S.'
                    position=' Business Owner'
                />
            </div>
        </section>
    )
}
