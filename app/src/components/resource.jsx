import '../styles/resource.css';

function Resource(){
    
    const resourceInfoData = [
        {
            id : 1,
            title : "How a Digital Marketing Agency Can Boost Your Business",
            desc : "We are the top digital marketing agency for branding corp. We offer a full rang engine.....",
        },
        {
            id : 2,
            title : "The Latest Trends and Strategies with a Digital Marketing Agency",
            desc : "Working with this digital marketing agency has been a true partnership. They have tak...",
        },
        {
            id : 3,
            title : "Maximizing ROI with the Expertise of a Digital Marketing Agency",
            desc : "What sets this digital marketing agency apart is their commitment to transparency a....",
        },
    ]
    return(
        <div className="container">
            <section className='resource-container'>
                <div className='resource-content'>
                    <h1>Digital Marketing & SEO Services That Grow Traffic & Increase Revenue</h1>
                    <div className="resouce-data-and-btn">
                        <p>We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.</p>
                        <button type="button">See more </button>
                    </div>
                </div>
                <div className='resource-info-qas'>
                    {resourceInfoData.map((item) =>(
                        <div key={item.id} className='res-card'>
                            <div className='resource-layer' >
                                <div className="resource-circle" id={`resource-circle${item.id}`}></div>
                                <p>5 min read</p>
                            </div>
                            <h3>{item.title}</h3>
                            <div className='resource-layer res-desc'>
                                <p>{item.desc}</p>
                                <button type="button"> &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Resource