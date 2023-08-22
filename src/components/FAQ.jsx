import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import arrow from '../assets/png/Downsidearrow.webp'
import faq_umberalla from '../assets/png/faq_umberalla.webp'
import radial_gradient_2 from '../assets/png/radial_gradient_2.png'

const FAQ = () => {
    return (
        <div className='bg_black py-5 overflow-hidden position-relative mt_-1'>
            <img className='faq_umberalla' src={faq_umberalla} alt="faq_umberalla" />
            <img className='radial_gradient_2' src={radial_gradient_2} alt="radial_gradient_2" />
            <div className='my_container py-5'>
                <h1 className='ff_Lato mb-0 fw_700 fs_48px mb-5 d-flex align-items-center justify-content-center text-orange'>FAQ <span className='text-white'>’s</span></h1>

                <Accordion defaultActiveKey="0" className='pt-1'>
                    <Accordion.Item eventKey="0" className='mt-4 accordion_border mx-auto' data-aos="fade-right" data-aos-delay="1000" data-duration="2000" data-aos-easing="linear">
                        <Accordion.Header className='py-2 my-1 ps-sm-5 px-2 ff_Lato fs_20px fw_500'>Egestas scelerisque duis quis aliquet. Consectetur?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_Lato fw_400 text-white mt_-20px ms-sm-3 px-sm-5 px-2'>
                            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className='mt-4 accordion_border mx-auto' data-aos="fade-left" data-aos-delay="1000" data-duration="2000" data-aos-easing="linear">
                        <Accordion.Header className='py-2 my-1 ps-sm-5 px-2 ff_Lato fs_20px fw_500'>Ac nec enim amet, leo lorem quis neque vitae aliquet?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_Lato fw_400 text-white mt_-20px ms-sm-3 px-sm-5 px-2'>
                            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='mt-4 accordion_border mx-auto' data-aos="fade-right" data-aos-delay="1000" data-duration="2000" data-aos-easing="linear">
                        <Accordion.Header className='py-2 my-1 ps-sm-5 px-2 ff_Lato fs_20px fw_500'>Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh donec?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_Lato fw_400 text-white mt_-20px ms-sm-3 px-sm-5 px-2'>
                            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mt-4 accordion_border mx-auto' data-aos="fade-left" data-aos-delay="1000" data-duration="2000" data-aos-easing="linear">
                        <Accordion.Header className='py-2 my-1 ps-sm-5 px-2 ff_Lato fs_20px fw_500'>Porta amet tortor nec pulvinar urna. Et blandit sit id?</Accordion.Header>
                        <Accordion.Body className='w-700px ff_Lato fw_400 mt_-20px text-white ms-sm-3 px-sm-5 px-2'>
                            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='mt-4 accordion_border mx-auto' data-aos="fade-right" data-aos-delay="1000" data-duration="2000" data-aos-easing="linear">
                        <Accordion.Header className='py-2 my-1 ps-sm-5 px-2 ff_Lato fs_20px fw_500'>Tellus hendrerit fermentum ut hendrerit ac vestibulum? </Accordion.Header>
                        <Accordion.Body className='w-700px ff_Lato fw_400 mt_-20px text-white ms-sm-3 px-sm-5 px-2'>
                            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
        </div>
    )
}

export default FAQ