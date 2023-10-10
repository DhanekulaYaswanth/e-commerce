import React, { useState } from "react";
import './About.css'

function About(props){
    const {theme} = props;

    const [query,setquery] = useState(null)

    return(
        <div className="AboutContainer">
                <div className="aboutus aboutcontainer">
                    <div className="mainabt">
                        <h1>About Us</h1>
                        <p>
                            Welcome to E-Commerce Store,  where we are dedicated to bringing quality, style, and convenience right to your doorstep.
                        </p>
                    </div>
                </div>

                <div className="storydiv">
                    <label className="square">
                        <label className="storysquare"/>
                    </label>

                    <div className="aboutdiv">
                        <h1>Our Story</h1>
                        <p>
                            Founded in 2023, E-Commerce Store has been a labor of love for 
                            Dhanekula Yaswanth, Abdul Azeez, BSK Athul, and Koganti Aditya. 
                            It started as a small venture fueled by a passion for delivering 
                            high-quality products and has now blossomed into a thriving online 
                            marketplace.
                        </p>
                    </div>
                </div>

                <div className="Missiondiv">
                    <label className="square mission">
                        <label className="storysquare missionsquare"/>
                        <label className="storysquare missionsquare2"/>
                    </label>
                    <div className="aboutdiv">
                        <h1>Our Mission</h1>
                        <p>
                            At E-Commerce Store, we are committed to providing our customers with 
                            the finest products, carefully curated for their quality and craftsmanship. 
                            We aim to prioritize sustainability in all aspects of our business, ensuring 
                            that our products are sourced from eco-friendly materials and produced through 
                            ethical practices. Additionally, we support fair trade initiatives, working closely 
                            with artisans and manufacturers who receive fair wages for their exceptional skills
                            and dedication.
                        </p>
                    </div>
                </div>

                <div className="productdiv">
                    <label className="square product">
                        <label className="storysquare productsquare"/>
                        <label className="storysquare productsquare2"/>
                        <label className="storysquare productsquare3"/>
                    </label>
                    <div className="aboutdiv">
                        <h1>Our Products</h1>
                        <p>
                            Explore a diverse range of electronics, fashion, home decor, and accessories 
                            meticulously selected to cater to your needs. From cutting-edge technology 
                            to timeless classics, we ensure that every item meets our high standards of 
                            excellence.
                        </p>
                    </div>
                </div>


                <div className="customer">
                    <label className="circle">
                        <label className="circle1 circleimg"></label>
                        <label className="circle2 circleimg"></label>
                        <label className="circle3 circleimg"></label>
                        <label className="circle4 circleimg"></label>
                        <label className="circle5 circleimg"></label>
                        <label className="circle6 circleimg"></label>
                    </label>
                    <div className="aboutdiv">
                        <h1>Customer Satisfaction</h1>
                        <p>
                            We take immense pride in ensuring that our customers have a seamless and 
                            enjoyable shopping experience. Our dedicated customer support team is always 
                            ready to assist you with any inquiries or concerns you may have.
                        </p>


                        <form className="feedbackform">
                            <div className= {theme?"feedbackele darkfeedbackele":"feedbackele"}>
                                <label>Name</label>
                                <input type="text" placeholder="enter full name"/>
                            </div>
                            <div className={theme?"feedbackele darkfeedbackele":"feedbackele"}>
                                <label>Email</label>
                                <input type="email" placeholder="example@mail.com"/>
                            </div>
                            <div className={theme?"feedbackele darkfeedbackelee":"feedbackele"}>
                                <input type="checkbox" id="feedback"/>
                                <label>Type</label>
                                <div className="feedbacktype">
                                    <label htmlFor="feedback" className="feedbackpoint">{query===null?"Select type":
                                                                    query===1? 'Query' :
                                                                        query===2? 'Feeback':
                                                                            'Complaint'
                                                            }
                                    
                                    
                                    </label>
                                    <ul className={theme?"selecttype darktheme":"selecttype"}>
                                        <li>
                                            <label onClick={()=>{setquery(1)}}>Query</label>
                                        </li>
                                        <li>
                                            <label onClick={()=>{setquery(2)}}>Feedback</label>
                                        </li>
                                        <li>
                                            <label onClick={()=>{setquery(3)}}>Complaint</label>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className={theme?"feedbackele darkfeedbackele":"feedbackele"}>
                                <label>Message/Comments</label>
                                <textarea placeholder="Enter message"></textarea>
                            </div>
                            <button className="feedbtn">Submit</button>
                        </form>
                    </div>
                </div>


                <div className="touch"> 
                    <div className="aboutdiv">
                        <h1>Get in Touch</h1>
                        <p>
                            We value your feedback and are eager to hear from you. Whether you have a 
                            question about a product, need assistance with an order, or simply want to 
                            say hello, feel free to send your query trough above form by selecting the type
                            as query or Send email to <a className="mailink" href="mailto:ecommerce@gmail.com">ecommerce@gmail.com.</a>
                        </p>
                    </div>
                </div>



                <div className="thankyou">
                    <h1>Thank You</h1>
                    <p>
                        Thank you for being a part of the E-Commerce family. Your support allows us t
                        o continue doing what we love, and we look forward to serving you for many 
                        more years to come.
                    </p>
                </div>
        </div>
    )
}

export default About;