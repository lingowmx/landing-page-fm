import { Image } from "./Image"
import milkBottlesImgMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg'
import milkBottlesImgDesktop from '../assets/images/Desktop/image-gallery-milkbottles.jpg'
import orangeImgMobile from '../assets/images/mobile/image-gallery-orange.jpg'
import orangeImgDesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import coneImgMobile from '../assets/images/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '../assets/images/desktop/image-gallery-cone.jpg'
import sugarcubesImgMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import sugarcubesImgDesktop from '../assets/images/Desktop/image-gallery-sugarcubes.jpg'








export const Gallery = () => {
    return (
        <div className="grid grid-cols-2 sm:flex">
            <Image
                imgMobile={milkBottlesImgMobile}
                imgDesktop={milkBottlesImgDesktop}
            />
            <Image
                imgMobile={orangeImgMobile}
                imgDesktop={orangeImgDesktop}
            />
            <Image
                imgMobile={coneImgMobile}
                imgDesktop={coneImgDesktop}
            />
            <Image
                imgMobile={sugarcubesImgMobile}
                imgDesktop={sugarcubesImgDesktop}
            />
        </div>
    )
}
