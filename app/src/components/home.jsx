import '../styles/home.css';
import afterpay from '../assets/afterpay.png';
import basecamp from '../assets/basecamp.png';
import maze from '../assets/maze.png';
import grow from '../assets/grow.png';

function Home(){
    return(
    <div className='container'>
        <div className="home-container">
            <div className="sub-container-one">
                <h2>
                    Stay ahead of the curve with our forward-thinking
                </h2>
                <p>
                    An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
                </p>
                <div className='schedule-container'>
                    <div id='schedule-btn'>
                        <button type="button">Schedule Call <span id="arrow-icon"> -></span></button>
                    </div>
                    <div>
                        <a id='viewCaseStudy-link' href="#">View Case Study</a>
                    </div>
                </div>
                <div className='brand-container'>
                    <h6>Trusted by the wordl's biggest brands</h6>
                    <div className='brandImages'>
                        {[afterpay, basecamp, maze].map((item, index) => (
                                <img  key={index} src={item} alt={`${item}-image`} />  
                        ))}
                    </div>
                </div>
            </div>

            <div className="sub-container-two">
                <div className='company-work-growth'>
                    <div id='computerImage'>
                        <div id='grow-stat-black'>
                            <div id='grow-stat-green'>
                                <img src={grow} alt="grow" />
                            </div>
                        </div>
                    </div> 
                    <div className='company-growth-data'>
                        <h1>230+</h1>
                        <p>some big companies that we work with, and trust us very much</p>
                        <div id='bar-stat-conatiner'>
                            <div id='bar-stat-rate'></div>
                        </div>
                    </div>
                </div>
                <div className='company-sales-stat'>
                    <div className="company-sales-data-stat">
                        <div id='company-mission-text'>
                            <div id="company-mission-text-line-data">
                                <div id='line'></div>
                                <p>Drive More Traffic and Sales</p>
                            </div>
                            <h2>Drive more traffic and product sales</h2>
                        </div>
                        <div className='company-sales-rates'>
                        </div>
                        <div id='company-sales-rates-bar'>
                            <div id='statlightgreen'></div>
                            <div id='statgreen'></div>
                            <div id='statdarkgreen'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;