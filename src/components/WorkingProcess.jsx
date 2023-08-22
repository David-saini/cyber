import React from 'react'
import { Col, Row } from 'react-bootstrap'
const WorkingProcess = () => {
    return (
        <div className='bg-black mt_-1 py-5 overflow-hidden'>
            <div className='d-flex align-items-center justify-content-center' data-aos="zoom-out" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                <h1 className='ff_Lato fw_700 fs_48px text-white mt-5'>How  <span className='text-orange'>it works</span></h1>
            </div>
            <div className='my_container'>
                <Row className='py-5'>

                    <Col lg={3} md={4} sm={6} className='d-flex align-items-center justify-content-center pt-4 pt-lg-0' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='gradient_card'>
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <div className='pb-3 pt-4'>
                                    <div className='bg-circle'>
                                        <h1 className=' px-3 py-3 ms-1 ff_Lato fs_28px fw_700'>01</h1>
                                    </div>
                                </div>
                                <h2 className='ff_Lato fs_18px fw_700 text-white py-3'>Mint NFT</h2>
                                <p className='ff_Lato fw_400 fs_16px text-white px-3 pb-4 text-center'>You must own our NFT to connect to direct management or participate in governance</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={4} sm={6} className='d-flex align-items-center justify-content-center pt-4 pt-lg-0' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='gradient_card'>
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <div className='pb-3 pt-4'>
                                    <div className='bg-circle'>
                                        <h1 className=' px-3 py-3 ms-1 ff_Lato fs_28px fw_700'>02</h1>
                                    </div>
                                </div>
                                <h2 className='ff_Lato fs_18px fw_700 text-white py-3 text-center'>Verify NFT Ownership</h2>
                                <p className='ff_Lato fw_400 fs_16px text-white px-3 pb-4 text-center'>Only Cyber Drops that are have verified are eligible to be connected under direct management
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={4} sm={6} className='d-flex align-items-center justify-content-center pt-4 pt-lg-0' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='gradient_card'>
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <div className='pb-3 pt-4'>
                                    <div className='bg-circle'>
                                        <h1 className=' px-3 py-3 ms-1 ff_Lato fs_28px fw_700'>03</h1>
                                    </div>
                                </div>
                                <h2 className='ff_Lato fs_18px px-3 fw_700 text-white py-3 mb-0 text-center'>Link API to your account</h2>
                                <p className='ff_Lato fw_400 fs_16px text-white px-3 pb-4 mb-0 text-center'>Only HODLers that submit their API key and secret will be under direct management

                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={4} sm={6} className='d-flex align-items-center justify-content-center pt-4 pt-lg-0' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">
                        <div className='gradient_card'>
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <div className='pb-3 pt-4'>
                                    <div className='bg-circle'>
                                        <h1 className=' px-3 py-3 ms-1 ff_Lato fs_28px fw_700'>04</h1>
                                    </div>
                                </div>
                                <h2 className='ff_Lato fs_18px fw_700 text-white py-3 text-center'>Passive Income for life</h2>
                                <p className='ff_Lato fw_400 fs_16px text-white px-3 pb-4 text-center'>As long as your HODL your Cyber Drop, you will be connected under direct management</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

        </div>
    )
}

export default WorkingProcess