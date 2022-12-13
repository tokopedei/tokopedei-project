import './LandingPage.css';
import './LandingPageQueries.css';
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
    IoPowerSharp, 
    IoChevronDownOutline, 
    IoLogoTwitter, 
    IoLogoInstagram, 
    IoLogoFacebook, 
    IoCartSharp, 
    IoPersonSharp,
    IoShirt
} from 'react-icons/io5';
import { FaAppleAlt } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import Customer from './customer.svg';
import Customer2 from './customer2.svg';

const LandingPage = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [ordersCount, setOrdersCount] = useState(0);
    const [productsCount, setProductsCount] = useState(0);
    const history = useHistory();
    const nav = useRef(null);
    const axios = require('axios');

    useEffect(() => {
        window.addEventListener('scroll', () => { // Toggle sticky nav
            nav.current && nav.current.classList.toggle('sticky', window.scrollY > 0);
        });
    }, [nav]);

    useEffect(() => { // Fetch app statistics
        (async () => {
            try {
                const res = await axios.get('http://localhost:3001/statistics');

                setUsersCount(res.data.users);
                setOrdersCount(res.data.orders);
                setProductsCount(res.data.products);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [axios]);

    useEffect(() => { // Trigger AOS library
        Aos.init({duration: 2000, offset: 250});
    }, []);

    return (
        <div className='landing-page-container'>
            <nav ref={nav}>
                <ul>
                    <li>
                        <h1><span>Tokopedei</span> <span><IoPowerSharp className='power-icon' />nline</span></h1>
                    </li>

                    <li>
                        <button onClick={() => history.push('/i/login')}>
                        <span><FiUser /></span> <span>Masuk</span>
                        </button>

                        <button onClick={() => history.push('/i/signup')}>
                            Daftar
                        </button>
                    </li>
                </ul>
            </nav>

            <div className='landing-page-header'>
                <div>
                    <h2>
                        <span>TELUSURI MELALUI</span>  
                        <span>RIBUAN PRODUK</span>
                        <span>NIKMATI PENGIRIMAN CEPAT</span>
                    </h2>
                    <h3>DAN GUNAKAN WAKTU ANDA DENGAN LEBIH BAIK!</h3>

                    <a href='#content' className='scroll-btn'>
                        <IoChevronDownOutline />
                    </a>
                </div>
            </div>

            <div className='landing-page-wraper' id='content' >
                <div 
                    className='statistics-box' 
                    data-aos='fade-up'
                >
                    <ul>
                        <li>
                            <IoPersonSharp className='statistics-icon' />
                            <h3>{usersCount}</h3>
                            <p>Pengunjung</p>
                        </li>
                        <li>
                            <IoCartSharp className='statistics-icon' />
                            <h3>{ordersCount}</h3>
                            <p>Pesanan</p>
                        </li>
                        <li>
                            <IoShirt className='statistics-icon' />
                            <h3>{productsCount}</h3>
                            <p>Produk</p>
                        </li>
                    </ul>

                </div>
                <div className='landing-page-content' data-aos='fade-right'>
                    <div>
                        <h2><span>Jadi siapa kita?</span></h2>
                        <p>Kami adalah layanan online supermarket yang mengantarkan pesanan Anda ke rumah Anda!</p>

                        <p><span>Bagaimana kita melakukannya?</span></p>
                        <p>Kami dengan hati-hati memilih dan bekerja sama dengan berbagai market yang berlokasi di pusat kota di seluruh Indonesia agar bisa sedekat mungkin dengan pelanggan kami dan memberikan pengiriman tercepat, sambil mempertahankan tingkat tertinggi dari layanan dan kualitas kami.</p>
                    </div>

                    <figure>
                        <img src={Customer2} alt='Illustration' />
                    </figure>
                </div>

                <div className='vision-content' data-aos='fade-left'>
                    <figure>
                        <img src={Customer} alt='Illustration' />
                    </figure>
                    
                    <div>
                        <h2><span>Visi kami</span></h2>
                        <p>Visi kami adalah memberikan layanan terbaik kepada pelanggan kami: Nyaman, Cepat, Terjangkau, Dapat Diakses, Efisien, dan Canggih, serta membantu pelanggan memanfaatkan waktu mereka dengan lebih baik.</p>
                    </div>
                </div>
            </div>

            <footer>
                <div className='footer-navigation'>
                    <div>
                        <h2><span>Tokopedei</span> <span><IoPowerSharp className='power-icon' />nline</span></h2><br></br>

                        {/* embed api google map */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.642780692037!2d110.41388641420933!3d-7.721421678647422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7eee3863bf7%3A0xd90caf195ae00b27!2sPeace%20Village!5e0!3m2!1sid!2sid!4v1670953110531!5m2!1sid!2sid" style={{width: 550, height: 220}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div>
                    <h2><span>KONTAK KAMI</span></h2><br></br>
                        <ul>
                            <li>
                                <p>Tokopedei Taraman Lima</p>
                                <p>Jl. Taraman Lima, Sinduharjo, Ngaglik</p>
                                <p>Sleman, Yogyakarta, 55581</p>
                            </li>
                            <br></br>
                            <li>
                                <p>Customer Service</p>
                                <p>(0274) 55667788</p>
                            </li>
                            <br></br>
                            <li>
                                <p>Email</p>
                                <p>tokopedei.taraman5@gmail.com</p>
                            </li>
                            {/* <li>
                                <button>Blog</button>
                            </li> */}
                        </ul>
                    </div>

                    {/* <div>
                        <ul>
                            <li>
                                <button>Kontak Kami</button>
                            </li>
                            <li>
                                <button>Terms</button>
                            </li> 
                            <li>
                                <button>Privacy</button>
                    </li>
                        </ul> 
                    </div> */}

                    <div>
                    <div>
                        {/* <ul>
                            <li>
                                <button>MEDIA SOSIAL</button>
                            </li> */}
                            {/* <li>
                                <button>Terms</button>
                            </li> 
                            <li>
                                <button>Privacy</button>
                    </li> */}
                        {/* </ul> 
                        <br></br> */}
                        <h2><span>MEDIA SOSIAL</span></h2><br></br>
                    </div>
                        <ul className='social-nav'>
                            <li>
                                <button><a href='https://web.facebook.com/tokopedeitaramanlima/'><IoLogoFacebook /></a></button>
                            </li>
                            <li>
                                <button><a href='https://twitter.com/PedeiToko'><IoLogoTwitter /></a></button>
                            </li>
                            <li>
                                <button><a href='https://www.instagram.com/tokopedei8/'><IoLogoInstagram /></a></button>
                            </li>
                        </ul>
                    
                    </div>
                </div>
                <div className='copyright-box'>
                                <p>&#169; <a  target='_blank'>Tim Tokopedei Online </a></p>
                            </div>
            </footer>
        </div>
    );
}

export default LandingPage;