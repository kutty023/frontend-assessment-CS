import { useState } from "react";
import '../styles/casestudy.css';

function CaseStudy(){
    const infoData = [
        {
            id : 1,
            title : "Why is digital marketing important for my business?",
            desc : "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
        },
        {
            id : 2,
            title : "How can digital marketing help improve my website's visibility?",
            desc : "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
        },
        {
            id : 3,
            title : "How long does it take to see results from digital marketing efforts?",
            desc : "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
        },
        {
            id : 4,
            title : "How do you measure the success of digital marketing campaigns?",
            desc : "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
        },
    ]

    const [expandedId, setExpandedId] = useState(null);

    const toggleOverExpand = (id) =>{
        setExpandedId((prevId) => (prevId === id ? null : id))
    }

    return(
        <div className="container">
            <section className="caseStudy-container">
                <div className="caseStudy-subcontainer-one divided-section-part1">
                    <h1>Digital Marketing FAQs</h1>
                    <p>As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</p>
                    <div className="more-quest-btn">
                        <button type="button">More Questions</button>
                        <a href="" target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </div>
                </div>
                <div className="caseStudy-subcontainer-two divided-section-part2">
                    {infoData.map((item) => (
                        <div key={item.id} className="caseStudy-expandable">
                            <h3>
                                <button id="toggle-btn" onClick={() => toggleOverExpand(item.id)}>
                                    <ul>
                                        <li>{item.title}</li>
                                        <li>{expandedId === item.id ? "-" : "+"}</li>
                                    </ul>
                                </button>
                            </h3>
                            {expandedId === item.id && (
                                <div className="casestudy-content-expanded">
                                    <p>{item.desc}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CaseStudy