import React from 'react'
import { Link } from 'react-router-dom'
import { Boat, Cross, Discord, M, MenuIcon, Twitter, } from '../components/Icons'
import { useState } from 'react';
import Logo from '../assets/png/Logo.png'
import radial_gradient from '../assets/png/radial_gradient.png'

const Nav = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='bg_black position-relative'>
            <img className='position-absolute start-0 w-lg-25 w-md-50 w-sm-75 w_100' src={radial_gradient} alt="radial_gradient" />
            <div className='my_container'>
                <div className='d-flex align-items-center justify-content-between pb-5'>
                    <img src={Logo} alt="Logo" />

                    <div className='d-lg-none d-block'>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100 position-relative'
                                onClick={() => setMenu(false)}>
                                <div className='absolute-cross'>
                                    <Link><Cross /></Link>
                                </div>
                            </div>
                        </div>

                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='z-index-100'
                                onClick={() => setMenu(false)}>
                                <div className='absolute-cross'>
                                    <Link><Cross /></Link>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-4'>
                                <ul className='d-flex align-items-center gap-4 mb-0'>
                                    <li><Link className='text_white ff_Lato fs_16px fw-400'>Home</Link></li>
                                    <li><Link className='text_white ff_Lato fs_16px fw-400'>About</Link></li>
                                    <li><Link className='text_white ff_Lato fs_16px fw-400'>Team</Link></li>
                                    <li><Link className='text_white ff_Lato fs_16px fw-400'>Roadmap</Link></li>
                                    <li><Link className='text_white ff_Lato fs_16px fw-400'>Partners</Link></li>
                                </ul>
                                <div className='d-flex align-items-center gap-2'>
                                    <Link><Boat /></Link>
                                    <Link><Discord /></Link>
                                    <Link><Twitter /></Link>
                                    <Link><M /></Link>
                                </div>

                                <Link className='btn_1 ff_Lato fs_16px fw-500'>Connect Wallet</Link>

                            </div>
                        </div>
                    </div>

                    <div className='d-lg-block d-none'>
                        <div className='d-flex align-items-center gap-4'>
                            <ul className='d-flex align-items-center gap-4 mb-0'>
                                <li><Link className='text_white ff_Lato fs_16px fw-400'>Home</Link></li>
                                <li><Link className='text_white ff_Lato fs_16px fw-400'>About</Link></li>
                                <li><Link className='text_white ff_Lato fs_16px fw-400'>Team</Link></li>
                                <li><Link className='text_white ff_Lato fs_16px fw-400'>Roadmap</Link></li>
                                <li><Link className='text_white ff_Lato fs_16px fw-400'>Partners</Link></li>
                            </ul>
                            <div className='d-flex align-items-center gap-2'>
                                <Link><Boat /></Link>
                                <Link><Discord /></Link>
                                <Link><Twitter /></Link>
                                <Link><M /></Link>
                            </div>
                            <Link className='btn_1 ff_Lato fs_16px fw-500'>Connect Wallet</Link>
                        </div>
                    </div>

                    <div className='d-lg-none z-1'>
                        <Link onClick={() => setMenu(true)}>
                            <MenuIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav