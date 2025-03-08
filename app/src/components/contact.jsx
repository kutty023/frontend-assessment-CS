import '../styles/contact.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png'


function Contact(){
    const socialMedia = [facebook, twitter, linkedin, instagram]
    return(
        <div className="container">
            <section className="signup-container">
                <h1>Ready to work with us?</h1>
                <button type="button">Get Started &rarr;</button>
            </section>
            <section className='contact-container'>
                <div className='logo-and-contents'>
                    <div className="logoBrandname">
                        <div className="logo">
                            <div className="logo-green">
                                <div className="logo-black"></div>
                            </div>
                        </div>
                        <div className="brandName">boostim</div>
                    </div>
                    <p>We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
                    <div className="socilamedia">
                        {socialMedia.map((item, index) => (
                            <img key={index} src={item} alt={`${socialMedia[index]} icon`} />
                        ))}
                    </div>
                </div>
                <div className='navigation-container'>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Service</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Agency</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Case Study</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Resource</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Contact</a></li>
                    </ul>
                </div>
                <div className='licence-container'>
                    <h3>Licence</h3>
                    <ul>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Copyright</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Email Address</a></li>
                    </ul>
                </div>
                <div className='contact-info'>
                    <h3>Contact</h3>
                    <div className="contact-data">
                        <div className='phone-number'>
                            <img src={phone} alt="phone-number" />
                            <p>(406) 555-0-20</p>
                        </div>
                        <div className='email'>
                            <img src={mail} alt="email" />
                            <p>Hey@boostim.com</p>
                        </div>
                        <div className='address'>
                            <img src={location} alt="address" />
                            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Contact