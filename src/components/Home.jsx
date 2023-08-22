import React from 'react'
import { Col, Row } from 'react-bootstrap'
import umbrella_img from '../assets/png/umbrella_img.webp'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg_black py-5 mt_-1'>
            <div className='my_container'>
                <Row className='align-items-center justify-content-lg-between justify-content-center reverse'>
                    <Col lg={6} data-aos="fade-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" >
                        <h1 className='text-white fs_72px fw_800 ff_Lato pb-1'>Welcome to <span className='fw_800 text-orange ff_Lato'> Cyber Drops</span></h1>
                        <p className='text-white ff-Lato fw_400 fs_18px pb-5 mt-5'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
                        <div className='pt-2'>
                            <p className='btn_2 ff_Lato fs_16px fw-500 mb-0'>Explore Now</p>
                        </div>
                    </Col>


                    <Col lg={5} md={6} sm={7} xs={9} data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" >
                        <img className='w-100' src={umbrella_img} alt="umbrella_img" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home