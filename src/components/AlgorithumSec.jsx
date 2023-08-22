import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cyber_drop_1 from '../assets/png/Cyber_drop_1.webp'
import Cyber_drop_2 from '../assets/png/Cyber_drop_2.webp'
import Cyber_drop_3 from '../assets/png/Cyber_drop_3.webp'
import radial_gradient_2 from '../assets/png/radial_gradient_2.png'

const AlgorithumSec = () => {
    return (
        <div className='bg_black py-5 mt_-1 overflow-hidden position-relative'>
            <div className='my_container pt-5'>
                <Row className='align-items-center justify-content-lg-between justify-content-center reverse'>
                    <Col lg={6} className='pe-lg-4 pe-0' data-aos="fade-up-right" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <p className='text-white fs_48px ff_Lato fw_700'>Our <span className='text-orange'>Algo</span></p>
                        <p className='text-white fs_18px fw_400 ff_Lato'>We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily micromanagement. While most trading algorithms can’t stand up against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of income with minimal ups and downs. Our algorithm has been in the works for YEARS. This has given us the time to rigorously backtest and release any needed hotfixes. As of early March 2022, we have close to a quarter of a million under direct management!</p>
                    </Col>
                    <Col lg={5} md={7} sm={7} className='ps-lg-5 py-5 ps-lg-0'>
                        <Row className='align-items-center'>
                            <Col xs={5}>
                                <div className='d-flex align-items-center flex-column gap-3'>
                                    <img data-aos="fade-down" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" className='w-100 cursor' src={Cyber_drop_1} alt="Cyber_drop_1" />
                                    <img data-aos="fade-up" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" className='w-100 cursor' src={Cyber_drop_2} alt="Cyber_drop_2" />
                                </div>
                            </Col>
                            <Col xs={7}>
                                <div className='d-flex align-items-center justify-content-center flex-column'>
                                    <img data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" className='w-100 cursor' src={Cyber_drop_3} alt="Cyber_drop_3" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AlgorithumSec