import '../styles/home.css';
import afterpay from '../assets/afterpay.png';
import basecamp from '../assets/basecamp.png';
import maze from '../assets/maze.png';
import grow from '../assets/grow.png';

function Home(){
    const brandLogos = [afterpay, basecamp, maze]
    return(
    <div className='container'>
        <section className="home-container">
            <div className="sub-container-one">
                <h2>
                    Stay ahead of the curve with our forward-thinking
                </h2>
                <p>
                    An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
                </p>
                <div className='schedule-container'>
                    <div className='schedule-btn'>
                        <button type="button">Schedule Call <span id="arrow-icon"> &rarr;</span></button>
                    </div>
                    <div>
                        <a id='viewCaseStudy-link' href="" target="_blank" rel="noopener noreferrer">View Case Study</a>
                    </div>
                </div>
                <div className='brand-container'>
                    <h6>Trusted by the world's biggest brands</h6>
                    <div className='brandImages'>
                        {brandLogos.map((item, index) => (
                                <img  key={index} src={item} alt={`${brandLogos[item]} logo`} />  
                        ))}
                    </div>
                </div>
            </div>

            <div className="sub-container-two">
                <div className='company-work-growth'>
                    <div className='computerImage'>
                        <div className='grow-stat-black'>
                            <div className='grow-stat-green'>
                                <img src={grow} alt="grow" />
                            </div>
                        </div>
                    </div> 
                    <div className='company-growth-data'>
                        <h1>230+</h1>
                        <p>some big companies that we work with, and trust us very much</p>
                        <div className='bar-stat-container'>
                            <div className='bar-stat-rate'></div>
                        </div>
                    </div>
                </div>
                <div className='company-sales-stat'>
                    <div className="company-sales-data-stat">
                        <div className='company-mission-text'>
                            <div className="company-mission-text-line-data">
                                <div className='line'></div>
                                <p>Drive More Traffic and Sales</p>
                            </div>
                            <h2>Drive more traffic and product sales</h2>
                        </div>
                        <div className='company-sales-rates'>
                            <div className='company-sales-rates-bar'>
                                <div className='stat-light-green'></div>
                                <div className='stat-green'></div>
                                <div className='stat-dark-green'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Home;