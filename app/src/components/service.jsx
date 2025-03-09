import '../styles/service.css';
import person from '../assets/person.jpg'
import playBlackicon from '../assets/play.png'

function Service(){
    return(
        <div className="container">
            <section className='service-container'>
                <div className='service-data-container'>
                    <h3>Provide the best service with out of the box ideas</h3>
                    <p>we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
                </div>
                <div className='projects-service-container'>
                    <div className='project-data-container-main'>
                        <div className="project-data-container">
                            <div className='project-count'>
                                <h1>920 <span>+</span></h1>
                                <p>Project finish with superbly</p>
                            </div>
                            <div className='people'>
                                <img src={person} alt={`${person}-1`} />
                                <img src={person} alt={`${person}-2`} />
                                <img src={person} alt={`${person}-3`} />
                                <img src={person} alt={`${person}-4`} />
                                <span id="more-people">+</span>
                            </div>
                        </div>
                    </div>
                    <div className='group-discussion'>
                        <h1>HOW WE WORK</h1>
                        <div className='play-btn'>
                            <div className="play-btn-green">
                                <div className='play-btn-black'>
                                    <img src={playBlackicon} alt={`${playBlackicon}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service;