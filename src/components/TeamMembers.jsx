import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Varun_Muthu from '../assets/png/Varun_Muthu.webp'
import Shubh_Sharma from '../assets/png/Shubh_Sharma.webp'
import Slider from "react-slick";
import { DiscordIcon, TwitterIcon, MIcon } from './Icons';
import purple_yellow_drop from '../assets/png/purple_yellow_drop.webp'
import radial_gradient_2 from '../assets/png/radial_gradient_2.png'

const TeamMembers = () => {

    var settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrow: true,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrow: true,
                }
            },]

    };

    return (
        <div className='bg_black overflow-hidden py-5 position-relative'>
            <img className='slider_umberalla' src={purple_yellow_drop} alt="faq_umberalla" />
            <img className='slider_gradient' src={radial_gradient_2} alt="radial_gradient_2" />
            <div className='my_container py-5'>
                <div className='d-flex align-items-center justify-content-center py-5'>
                    <p className='ff_Lato mb-0 text-white fs_48px fw_700'>Meet the <span className='text-orange'>Team</span></p>
                </div>

                <Slider {...settings} className='py-5'>

                    <div className="px-sm-4 px-5" data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='slider_card'>
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <img className='w-100' src={Varun_Muthu} alt="Varun_Muthu" />
                                </Col>
                                <Col md={6} className='py-5 py-md-0'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <h1 className='ff_Lato fs_24px fw_600'>Varun Muthu</h1>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <h1 className='ff_Lato fs_16px fw_400'>Marketing Director</h1>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center text-center'>
                                        <Link className='ff_Lato fs_16px fw_400 text-black'>https://www.linkedin.com/ <span>in/varunmuthu1</span></Link>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center justify-content-center gap-2'>
                                        <Link><DiscordIcon /></Link>
                                        <Link><TwitterIcon /></Link>
                                        <Link><MIcon /></Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="px-sm-4 px-5" data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='slider_card'>
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <img className='w-100' src={Shubh_Sharma} alt="Shubh_Sharma" />
                                </Col>
                                <Col md={6} className='py-5 py-md-0'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <h1 className='ff_Lato fs_24px fw_600'>Varun Muthu</h1>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <h1 className='ff_Lato fs_16px fw_400'>Marketing Director</h1>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center text-center'>
                                        <Link className='ff_Lato fs_16px fw_400 text-black'>https://www.linkedin.com/ <span>in/varunmuthu1</span></Link>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center justify-content-center gap-2'>
                                        <Link><DiscordIcon /></Link>
                                        <Link><TwitterIcon /></Link>
                                        <Link><MIcon /></Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className='px-sm-4 px-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='slider_card'>
                            <Row className='align-items-center'>
                                <Col md={6}>
                                    <img className='w-100' src={Varun_Muthu} alt="Varun_Muthu" />
                                </Col>
                                <Col md={6} className='py-5 py-md-0'>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <h1 className='ff_Lato fs_24px fw_600'>Varun Muthu</h1>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <h1 className='ff_Lato fs_16px fw_400'>Marketing Director</h1>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center text-center'>
                                        <Link className='ff_Lato fs_16px fw_400 text-black'>https://www.linkedin.com/ <span>in/varunmuthu1</span></Link>
                                    </div>
                                    <div className='pt-4 d-flex align-items-center justify-content-center gap-2'>
                                        <Link><DiscordIcon /></Link>
                                        <Link><TwitterIcon /></Link>
                                        <Link><MIcon /></Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>


                </Slider>
            </div>
        </div>
    )
}

export default TeamMembers