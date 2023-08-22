import React from 'react'
import { Col, Row } from 'react-bootstrap'
import info_img_1 from '../assets/png/info_img_1.jpg'
import info_img_2 from '../assets/png/info_img_2.jpg'
import info_img_3 from '../assets/png/info_img_3.jpg'
import radial_gradient_2 from '../assets/png/radial_gradient_2.png'
import rainbow_umberalla from '../assets/png/rainbow_umberalla.webp'
const Info = () => {
    return (
        <div className='bg-black mt_-1 pb-5 overflow-hidden position-relative'>
            <img className='rainbow_umberalla' src={rainbow_umberalla} alt="rainbow_umberalla" />
            <img className='info_gradient' src={radial_gradient_2} alt="radial_gradient_2" />
            <img className='algo_gradient' src={radial_gradient_2} alt="radial_gradient_2" />
            <div className='my_container py-5'>
                <Row className='align-items-center justify-content-lg-between justify-content-center'>
                    <Col lg={6} md={10} sm={10}>
                        <Row>
                            <Col xs={5} data-aos="fade-down-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={info_img_1} alt="info_img_1" />
                            </Col>
                            <Col xs={5} data-aos="fade-down-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={info_img_2} alt="info_img_2" />
                            </Col>
                        </Row>
                        <Row className='align-items-center justify-content-end'>
                            <Col xs={5} data-aos="fade-up-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100' src={info_img_3} alt="info_img_3" />
                            </Col>
                            <Col xs={5}>
                                <img data-aos="fade-up-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" className='w-100' src={info_img_3} alt="info_img_3" />
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={5} data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <h1 className='text-white ff_Lato fs_48px fw_700 mb-4 pt-5 pt-lg-0'>What <span className='text-orange'>we do</span></h1>
                        <p className='text-white ff_Lato fs_16px mb-0 fw_400'>1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default Info