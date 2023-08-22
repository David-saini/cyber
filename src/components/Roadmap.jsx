import React from 'react'
import roadmap_img_1 from '../assets/png/roadmap_img_1.webp'
import roadmap_img_2 from '../assets/png/roadmap_img_2.webp'
import roadmap_img_3 from '../assets/png/roadmap_img_3.webp'
import roadmap_img_4 from '../assets/png/roadmap_img_4.webp'
import roadmap_img_5 from '../assets/png/roadmap_img_5.webp'
import roadmap_img_6 from '../assets/png/roadmap_img_6.webp'
import roadmap_img_7 from '../assets/png/roadmap_img_7.webp'
import roadmap_img_8 from '../assets/png/roadmap_img_8.webp'
import right_dotted_line from '../assets/png/right_dotted_line.webp'
import left_dotted_line from '../assets/png/left_dotted_line.webp'
import purple_yellow_drop from '../assets/png/purple_yellow_drop.webp'
import roadmap_umbrella_2 from '../assets/png/roadmap_umbrella_2.webp'
import rainbow_umberalla from '../assets/png/rainbow_umberalla.webp'
import { Col, Row } from 'react-bootstrap'

const Roadmap = () => {
    return (
        <div className='bg-black pt-5 mt_-1 roadmap_bg position-relative overflow-hidden'>
            <img className='roadmap_umbrella_1' src={purple_yellow_drop} alt="" />
            <img className='roadmap_umbrella_2' src={roadmap_umbrella_2} alt="" />
            <img className='roadmap_umbrella_3' src={rainbow_umberalla} alt="rainbow_umberalla" />
            <div className='my_container'>
                <div className='d-flex align-items-center justify-content-center pb-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                    <h1 className='text-white ff_Lato fw_700 fs_48px'>Road<span className='text-orange'>Map</span></h1>
                </div>
                <div className='position-relative'>
                    <div className='Dotted_timeline mt-5' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">


                        <Row className='mb-5 pb-5'>
                            <Col md={6}></Col>
                            <Col md={6} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_1} alt="" data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_1'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato ms_5 ps_5' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600'>March 2022</h4>
                                    <h4 className='fs_16px fw_400'>1000 Drops Launch on Ethereum</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 py-5'>

                            <Col md={6} xs={11} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute_2'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_2} alt="" data-aos="zoom-in" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_2 d-md-block d-none' data-aos="fade-left" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                            <img className='width' src={left_dotted_line} alt="" />
                                        </div>
                                        <div className='line_1 d-md-none d_block'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato pe_10 ps_10' data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600 text-md-end'>March 2022</h4>
                                    <h4 className='fs_16px fw_400'>1000 Drops Launch on Ethereum</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 py-5'>
                            <Col md={6}></Col>
                            <Col md={6} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_3} alt="" data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_1'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato ms_4 ps-4' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600'>March 2022</h4>
                                    <p className='fs_16px fw_400 mb-0'>Creation of Treasury</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 py-5'>

                            <Col md={6} xs={11} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute_2'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_4} alt="" data-aos="zoom-in" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_2 d-md-block d-none' data-aos="fade-left" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                            <img className='width' src={left_dotted_line} alt="" />
                                        </div>
                                        <div className='line_1 d-md-none d_block'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato pe_10 ps_10' data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600 text-md-end'>March 2022</h4>
                                    <h4 className='fs_16px fw_400'>1000 Drops Launch on Ethereum</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 py-5'>
                            <Col md={6}></Col>
                            <Col md={6} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_5} alt="" data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_1'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato ' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600'>June 2022</h4>
                                    <p className='fs_16px fw_400 mb-0'>Major Collabs</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 py-5'>

                            <Col md={6} xs={11} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute_2'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_6} alt="" data-aos="zoom-in" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_2 d-md-block d-none' data-aos="fade-left" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                            <img className='width' src={left_dotted_line} alt="" />
                                        </div>
                                        <div className='line_1 d-md-none d_block'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato pe_10 ps_10' data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600 text-md-end'>March 2022</h4>
                                    <h4 className='fs_16px fw_400'>1000 Drops Launch on Ethereum</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 py-5'>
                            <Col md={6}></Col>
                            <Col md={6} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_7} alt="" data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_1'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato ps_5' data-aos="fade-left" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600'>Sometime in Q3</h4>
                                    <p className='fs_16px fw_400 mb-0'>Streetwear + Merch</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5 pt-5'>
                            <Col md={6} xs={11} className='d-flex align-items-center justify-content-center position-relative'>
                                <div className='group_absolute_2'>
                                    <div className='position-relative'>
                                        <img src={roadmap_img_8} alt="" data-aos="zoom-in" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        <div className='horizontal_line_2 d-md-block d-none' data-aos="fade-left" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                            <img className='width' src={left_dotted_line} alt="" />
                                        </div>
                                        <div className='line_1 d-md-none d_block'>
                                            <img className='width' src={right_dotted_line} alt="" data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear" />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white ff_Lato pe_10 ps_10' data-aos="fade-right" data-aos-delay="600" data-duration="2000" data-aos-easing="linear">
                                    <h4 className='fs_24px fw_600 text-md-end'>March 2022</h4>
                                    <h4 className='fs_16px fw_400'>1000 Drops Launch on Ethereum</h4>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default Roadmap