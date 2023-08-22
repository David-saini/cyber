import React from 'react'
import drop from '../assets/png/umbrella_img.webp'
import { Boat, Discord, M, Twitter } from '../components/Icons'
import { Link } from 'react-router-dom'
import radial_gradiant_2 from '../assets/png/radial_gradient_2.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-black pt-5 text-white mt_-1 overflow-hidden position-relative'>
                <img className='footer_gradient' src={radial_gradiant_2} alt="radial_gradiant_2" />
                <div className='my_container pt-4'>
                    <div className='d-flex align-items-center justify-content-center' data-aos="zoom-out" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <img className='w-50px' src={drop} alt="drop" />
                    </div>
                    <div className='d-flex align-items-center justify-content-center pt-2' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <h1 className='mb-0 fs_36px ff_Lato fw_600 text-orange'>Cyber Drops</h1>
                    </div>
                    <div className='d-flex align-items-center justify-content-center text-center pt-2' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <p className='w-444px mb-0 ff_Lato fw_400'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet.</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center text-center py-3 gap-2' data-aos="flip-down" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <Link><Boat /></Link>
                        <Link><Discord /></Link>
                        <Link><Twitter /></Link>
                        <Link><M /></Link>
                    </div>
                </div>
                <div className='footer-timeline'></div>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='ff_Lato fw_400 fs_16px pt-4 pb-2 light-black' data-aos="fade-down" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">Copyright By 2022</p>
                </div>

            </div>
        </div>
    )
}

export default Footer