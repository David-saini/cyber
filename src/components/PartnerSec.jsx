import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayBit from '../assets/png/PlayBit.webp'
import partner_2 from '../assets/png/partner_2.webp'
import partner_3 from '../assets/png/partner_3.webp'
import partner_4 from '../assets/png/partner_4.webp'
import radial_gradient_2 from '../assets/png/radial_gradient_2.png'
import { Link } from 'react-router-dom'

const PartnerSec = () => {
    return (
        <div className='py-5 mt_-1 bg_black position-relative'>
            <img className='partner_gradient' src={radial_gradient_2} alt="radial_gradient_2" />
            <h1 className='d-flex align-items-center justify-content-center ff_Lato fw_700 fs_48px text-white mb-0'>Part <span className='text-orange'>ners</span></h1>
            <div className='bg-img'>
                <div className='my_container'>
                    <div className='slider-container'>
                        <div className='d-flex align-items-center justify-content-center slider'>
                            <div className='gap-4 d-flex align-items-center justify-content-center flex-grow-1 min-vh-70 pt-5 flex-wrap'>


                                <img className='w-365px w-100 img img_playbit' src={PlayBit} alt="PlayBit" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='img' src={partner_2} alt="partner_2" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='img' src={partner_3} alt="partner_3" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='img' src={partner_4} alt="partner_4" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='w-365px w-100 img_playbit' src={PlayBit} alt="PlayBit" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='img' src={partner_2} alt="partner_2" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='img' src={partner_3} alt="partner_3" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                                <img className='img' src={partner_4} alt="partner_4" data-aos="flip-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />

                            </div>
                        </div>
                    </div>
                    <Link className='d-flex align-items-center justify-content-center text-center text-orange ff_Lato fw_700 fs_18px'>For business and collaborations, contact us team@cyberdrops.finance</Link>
                </div>
            </div>
        </div>
    )
}

export default PartnerSec