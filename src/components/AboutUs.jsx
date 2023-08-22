import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import card_img from '../assets/png/cards_img.webp'
import radial_gradient_2 from '../assets/png/radial_gradient_2.png'

const AboutUs = () => {
    return (


        <div className='bg-black py-5 mt_-1 z-3 overflow-hidden position-relative'>
            <img className='about_gradient' src={radial_gradient_2} alt="radial_gradient_2" />
            <img className='about_gradient_2' src={radial_gradient_2} alt="radial_gradient_2" />
            <div className='my_container pb-5'>
                <Row className='d-flex align-items-center justify-content-lg-between justify-content-center py-5'>
                    <Col lg={5} md={7} sm={9} xs={10} className='px-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <img className='w-100' src={card_img} alt="card_img" />
                    </Col>

                    <Col lg={5} className='pt-5 pt-lg-0' data-aos="fade-up-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <h1 className='ff_Lato fw_700 fs_48px text-white'>Our <span className='text-orange'>Mission</span></h1>
                        <p className='text-white ff_Lato fs-18px fw_400 py-4'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                        <div className='pt-4'>
                            <Link className='btn_2 ff_Lato fs_16px fw-500'>Read More</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutUs