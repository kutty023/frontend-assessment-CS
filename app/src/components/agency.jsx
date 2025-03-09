import '../styles/agency.css';
import person from '../assets/person.jpg';

function Agency(){

    const cardContents = [
        {
            id : 1,
            comp : "UI/UX Designs, 2023",
            desc : "Mobile app design",
        },
        {
            id : 2,
            comp : "Ai Corporation. 2023",
            desc : "Ai Wave - Ai Chatbot Mobile App",
        },
        {
            id : 3,
            comp : "Lancer Corporation. 2023",
            desc : "App Lancer - Freelance M",
        }
    ]

    const techCategories = [
        {
            id : 1,
            category : "All work",
            count : 20,
        },
        {
            id : 2,
            category : "UI/UX Design",
            count : 10,
        },
        {
            id : 3,
            category : "Digital Marketting",
            count : 5,
        },
        {
            id : 4,
            category : "Branding",
            count : 5,
        },
    ]

    return(
        <>
        <section className="agency-container">
            <div className="agency-content">
                <h2>Real-world examples of how we have helped companies achieve their marketing objectives.</h2>
            </div>
            <div className="categories">
                {techCategories.map((item) => (
                    <button type="button"> {item.category} [{item.count}]</button>
                ))}
            </div>
            <div className="cards">
                {cardContents.map((item) => (
                    <div key={item.id} className='card' id={`card-${item.id}`}>
                        <div className="corporation">
                            <div className='line'></div>
                            <p>{item.comp}</p>
                        </div>
                        <p>{item.desc}</p>
                        <button type='button' className='card-btn'> See Details</button>
                    </div>
                ))}
            </div>
        </section>
        <div className="container">
            <div className="individual-info">
                <p>"They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition."</p>
                <div className="person-info">
                    <div className="person-info-data">
                        <img src={person} alt="person image" />
                        <div className='personal-info'>
                            <h4>Michael Kaizer</h4>
                            <p>CEO of Basecamp Corp</p>
                        </div>
                    </div>
                    <div className="next-and-prev-btn">
                        <button type="button">&larr;</button>
                        <p><span id="curr-person"><u>01</u></span> /05</p>
                        <button type="button"> &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Agency;