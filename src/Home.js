import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTicketAlt,faBus,faTshirt,faCheese,faMobile,faBolt} from '@fortawesome/free-solid-svg-icons';
import './styles/home.css'

import grabon from './images/grabon.png'
import ad1 from './images/ad1.png'
import ad2 from './images/ad4.jpg'
import ad3 from './images/ad5.jpg'
import card1 from './images/card1.png'
import logo from './images/logo.jpg'

const Home = (props) => {

    const history = useHistory();
    //Logout handler
    const handleClick=() => { 
        props.clearStore({login: false});
        history.push('/')
}
if(!props.login){
    history.push('/')
}
    return ( 
        
        <div className="home"> 
        
            <div className="holder">
                <div className="headcontainer">
                    <div className="header">  
                    <img src={grabon}></img>
                    <input type="text" placeholder="Search.."/>
                    <button className="btn" onClick={()=>{handleClick()}}>LOGOUT</button>
                    </div>
                </div>
                <div className="navcontainer">
                    <div className="topnav">
                        <a href="#">Stores</a>
                        <a href="#">Categories</a>
                        <a href="#">Indulge</a>
                        <a href="#" className="right">Deals of the day</a>    
                    </div>
                </div>
            </div>
            <div className="grid1">
                <div id="slider">
                    <img src={ad1} alt=""/>
                </div>
                <div className="ad"> 
                    <div className="card1">
                        <div><img src={logo} alt=""/><br/></div>
                        <div><img src={card1} alt=""/></div>
                        <div>Up To 50% OFF + Flat 5% Off<br/> On Croma Products (All Users)</div><br/>
                        <div className="buttons"><butoon className="grab">GRAB NOW</butoon>
                        <button className="next"> &#62;</button></div>
                    </div>       
                </div>
            </div>
            <div className="separator"> 
                <button ><h3>India's Leading Coupons and Deals Marketplace</h3></button>
            </div>
            <div className="container1">
                <div className="offers">
                    <h2><span id="green">Popular</span> Offers of the day</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div id="cardImage1">
                            
                        </div>
                        <div class="cardInfo">
                            <b className="left"><span>25%<small> OFF</small></span></b>
                            <button className="cardButton">EXCLUSIVE</button>
                        </div>
                        <div class="cardText">
                            <span>Flat 25% OFF On All Medicines(All Users)</span>
                        </div>
                    </div>
                    <div className="card">
                        <div id="cardImage2">
                            
                        </div>
                        <div class="cardInfo">
                            <b className="left"><span>Rs.100<small>OFF</small></span></b>
                            <button className="cardButton">EXCLUSIVE</button>
                        </div>
                        <div class="cardText">
                            <span>Special Offer - ₹100 Off + ₹200 Cashback Offer | New Users</span>
                        </div>
                    </div>
                    <div className="card">
                        <div id="cardImage3">
                            
                        </div>
                        <div class="cardInfo">
                            <b className="left"><span>45%<small> OFF</small></span></b>
                            <button className="cardButton">EXCLUSIVE</button>
                        </div>
                        <div class="cardText">
                            <span>Smart Sleep Days Sale: Upto 40% OFF on SmartGRID Mattress + Extra 5% OFF with Coupon</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="offers">
                    <h2><span id="green">Popular</span> Stores</h2>
                </div>
                <div className="store">
                    <div className="sidecard">
                        <div id="title"><span>Featured Store of the Month</span></div>
                        <div className="featureImage"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg"/></div>
                        <div><button>55 coupons | 15 Offers Available</button></div>
                    </div>
                    <div className="mainbar">
                        <div className="maincard" id="1"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg"/></div>
                        <div className="maincard" id="2"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620734681345/dominos-logo.jpg"/></div>
                        <div className="maincard" id="3"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620734603795/amazon-logo.jpg"/></div>
                        <div className="maincard" id="4"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620803855189/myntra-logo.jpg"/></div>
                        <div className="maincard" id="5"><img src="https://cdn.grabon.in/gograbon/images/merchant/1622185577430/paytm-logo.jpg"/></div>
                        <div className="maincard" id="6"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620734755086/oyo-rooms-logo.jpg"/></div>
                        <div className="maincard" id="7"><img src="https://cdn.grabon.in/gograbon/images/merchant/1619431922155/uber-logo.jpg"/></div>
                        <div className="maincard" id="8"><img src="https://cdn.grabon.in/gograbon/images/merchant/1619614081347/booking-logo.jpg"/></div>
                        <div className="maincard" id="9"><img src="https://cdn.grabon.in/gograbon/images/merchant/1619759849945/flipkart-logo.jpg"/></div>
                        <div className="maincard" id="10"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620735979728/tata-cliq-logo.jpg"/></div>
                        <div className="maincard" id="11"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620651569701/pharmeasy-logo.jpg"/></div>
                        <div className="maincard" id="12"><img src="https://cdn.grabon.in/gograbon/images/merchant/1620654978987/rapido-logo.jpg"/></div>

                    </div>
                </div>
            </div>
            <div className="container3">
                <div className="offers">
                    <h2><span id="green">Today's</span> Top Coupons and Offers</h2>
                </div>
                <div className="today">
                    <div className="sidecard">
                            <div><FontAwesomeIcon icon={faTicketAlt} className="cir"/><span>Most Used</span></div>
                            <div><FontAwesomeIcon icon={faBus} className="cir"/><span>Travel</span></div>
                            <div><FontAwesomeIcon icon={faTshirt} className="cir"/><span>Fashion</span></div>
                            <div><FontAwesomeIcon icon={faCheese} className="cir"/><span>Food</span></div>
                            <div><FontAwesomeIcon icon={faMobile} className="cir"/><span>Electronics</span></div>
                            <div><FontAwesomeIcon icon={faBolt} className="cir"/><span>Recharge</span></div>             
                    </div>
                    <div className="todaycards">
                        <div className="todaycard">
                            <div className="toprow">
                                <div>Rs.200<span><small>OFF</small></span></div>
                                <div><img src="https://cdn.grabon.in/gograbon/images/merchant/1622184129833/akbar-travels-logo.jpg"/></div>
                            </div>
                            <p>Flat Rs 200 OFF On Flights + Zero Convenience Fee (New Users)</p>
                            <p className="blue">See all Akbar Travels Offers</p>
                        </div>


                        <div className="todaycard">
                            <div className="toprow">
                                <div>50%<span><small>OFF</small></span></div>
                                <div><img src="https://cdn.grabon.in/gograbon/images/merchant/1620734755086/oyo-rooms-logo.jpg"/></div>
                            </div>
                            <p>Grab 50% Off + 30% Cashback on Select Hotels (Coupon - OYOGRABS)</p>
                            <p className="blue">See all OYO Rooms Offers</p>
                        </div>


                        <div className="todaycard">
                        <div className="toprow">
                                <div>Rs.650<span><small>OFF</small></span></div>
                                <div><img src="https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg"/></div>
                            </div>
                            <p>Up To Rs 650 OFF on Domestic Flights</p>
                            <p className="blue">See all MakeMyTrip Offers</p>
                        </div>


                        <div className="todaycard">
                            <div className="toprow">
                                <div>Rs.1000<span><small>OFF</small></span></div>
                                <div><img src="https://cdn.grabon.in/gograbon/images/merchant/1620803829927/makemytrip-logo.jpg"/></div>
                            </div>
                            <p>Domestic Flight Tickets - Get Up To Rs 1000 OFF</p>
                            <p className="blue">See all MakeMyTrip Offers</p>
                        </div>


                        <div className="todaycard">
                            <div className="toprow">
                                <div>50%<span><small>OFF</small></span></div>
                                <div><img src="https://cdn.grabon.in/gograbon/images/merchant/1619614081347/booking-logo.jpg"/></div>
                            </div>
                            <p>Get Up To 50% OFF On Hotels Worldwide</p>
                            <p className="blue">See all Booking Offers</p>
                        </div>


                        <div className="todaycard">
                            <div className="toprow">
                                <div>HOT DEAL</div>
                                <div><img src="https://cdn.grabon.in/gograbon/images/merchant/1618222725316/travolook-logo.jpg"/></div>
                            </div>
                            <p> Flat Rs 750 Off On Flight Booking + 450 Cashback + Rs 50 Off In Next Booking</p>
                            <p className="blue">See all Travolook Offers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container4">
                <div className="form">
                    <div className="t1"><p>Get The Latest  &amp; Best Coupon/Offer Alerts</p></div>
                    <div className="t2"><p>35,00,000+ Subscriptions Across India! &amp; Counting! Subscribe to have new coupon lists delivered directly to your inbox</p></div>
                    <div className="form1">
                        <div className="email">
                            <input type="text" placeholder="Enter Email Address" className="in"/>
                        </div>
                        <div className="subscribe">
                            <button className="sub-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <img src="https://cdn.grabon.in/gograbon/v7/img/subscribe-img.png"/>
                </div>
            </div>
            <div className="container5">
                <div className="offers">
                    <h2><span id="green">Deals Of</span> The Day</h2>
                </div>
                <div className="deals">
                    <div className="deal1">
                        <div className="top"><button className="badge">80% OFF</button>
                        <img src="https://cdn.grabon.in/gograbon/images/deal/1638854860731/wowfas-italian-style-men-shoes-synthetic-leather-tpr-shole-black.JPG"/></div>
                        <div className="grey">Wowfas</div>
                        <div className="desc">Italian Style Men Shoes Synthetic Leather TPR shole Black</div>
                        <div className="price"><p>Rs. 599<br/><del>Rs. 2999</del></p></div>
                    </div>
                    <div className="deal1">
                    <div className="top"><button className="badge">65% OFF</button>
                        <img src="https://cdn.grabon.in/gograbon/images/deal/1639032463478/tata-cliq-puma-black-running-shoes.JPG"/></div>
                        <div className="grey">Tata CLiQ</div>
                        <div className="desc">Puma Black Running Shoes</div>
                        <div className="price"><p>Rs. 1569<br/><del>Rs. 4499</del></p></div>
                    </div>
                    <div className="deal1">
                    <div className="top"><button className="badge">40% OFF</button>
                        <img src="https://cdn.grabon.in/gograbon/images/deal/1639043953090/mother-sparsh-onion-hair-kit-with-pure-onion-rasa-for-regrowth-hair-fall-control.JPG"/></div>
                        <div className="grey">Mother Sparsh</div>
                        <div className="desc">Onion Hair Kit With Pure Onion Rasa For Regrowth &amp; Hair Fall Control</div>
                        <div className="price"><p>Rs. 1363<br/><del>Rs. 2272</del></p></div>
                    </div>
                    <div className="deal1">
                    <div className="top"><button className="badge">Rs. 3100 OFF</button>
                        <img src="https://cdn.grabon.in/gograbon/images/deal/1638787979027/myntra-ptron-evo-true-wireless-m-black-and-red-in-ear-bluetooth-bassbuds.JPG"/></div>
                        <div className="grey">Myntra</div>
                        <div className="desc">pTron Evo True Wireless M Black And Red In-Ear Bluetooth Bassbuds</div>
                        <div className="price"><p>Rs. 699<br/><del>Rs. 3799</del></p></div>
                    </div>
                </div>
            </div>
            <div className="container6">
                <div className="offers">
                    <h2><span id="green">GrabOn</span> Collections</h2>
                </div>
                <div className="collections">
                    <div className="collection1">
                        <div><span>Groceries Offers</span>
                        <img src="https://cdn.grabon.in/gograbon/images/banners/banner-1630667939877.jpg"/></div>
                    </div>
                    <div className="collection1">
                        <div><span>Rapido Offers</span>
                        <img src="https://cdn.grabon.in/gograbon/images/banners/banner-1617428441691.jpg"/></div>
                    </div>
                    <div className="collection1">
                        <div><span>Mfine Offers</span>
                        <img src="https://cdn.grabon.in/gograbon/images/banners/banner-1633938330760.jpg"/></div>
                    </div>
                    <div className="collection1">
                        <div><span>Fashion Offers</span>
                        <img src="https://cdn.grabon.in/gograbon/images/banners/banner-1593025951848.jpeg"/></div>
                    </div>
                </div>
            </div>
            <div className="container7">
                <div className="offers">
                    <h2><span id="green">Popular</span> Categories</h2>
                </div>
                <div className="categories">
                    <div className="category1">
                        <div>Flight</div>
                        <div>Medicines</div>
                        <div>OTT</div>
                        <div>Food</div>
                        <div>Recharge</div>
                        <div>Lab Tests</div>
                    </div>
                    <div className="category1">
                        <div>Fashion</div>
                        <div>Bus</div>
                        <div>Hosting</div>
                        <div>Lingeri</div>
                        <div>Utility Bill Payments</div>
                        <div>Eyewear</div>
                    </div>
                    <div className="category1">
                        <div>Electronics</div>
                        <div>Education</div>
                        <div>Pizza</div>
                        <div>Entertainment</div>
                        <div>Gifts and Flowers</div>
                        <div>Kids Lifestyle</div>
                    </div>
                    <div className="category1">
                        <div>Groceries</div>
                        <div>Hotel</div>
                        <div>DTH Recharge</div>
                        <div>Services</div>
                        <div>Bike Rentals</div>
                        <div>Jewellery</div>
                    </div>
                    <div className="category1">
                        <div>Beauty</div>
                        <div>Travel</div>
                        <div>Kitchen Appliances</div>
                        <div>Footwear</div>
                        <div>Furniture</div>
                        <div>Face Masks and Sanitizers</div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container8">
                    <div className="footer1" id="footer1">
                        <p className="head">Grab<span id="on">On</span><br/>
                        <small>SAVE ON EVERYTHING</small></p>
                        <p>Striving to make the worls a better place to shop with great savings!</p>
                        <div>
                            <img src="https://cdn.grabon.in/gograbon/v5.5/images/g-play.png"/>
                        </div>
                        <div className="apple">
                            <img src="https://cdn.grabon.in/gograbon/v5.5/images/app-store.png"/>
                        </div>
                    </div>
                    <div className="footer2">
                        <div className="heading">COMPANY</div>
                        <div>About Us</div>
                        <div>Privacy Policy</div>
                        <div>Terms of Use</div>
                        <div>Blog</div>
                        <div>Branding</div>
                        <div>Careers</div>
                    </div>
                    <div className="footer2">
                        <div className="heading">GENERAL</div>
                        <div>Partner With Us</div>
                        <div>Write to Us</div>
                        <div>Mobile Apps</div>
                        <div>Sitemaps</div>
                    </div>
                    <div className="footer2">
                        <div className="heading">SPECIALITY PAGES AND MORE...</div>
                        <div className="cols">
                            <div className="col1">
                                <div>Surge 2020</div>
                                <div>Amazon Pay Offers</div>
                                <div>Google Pay Offers</div>
                                <div>PayPal Offers</div>
                                <div>PhonePe Offers</div>
                                <div>Festival Offers</div>
                                <div>Bank Offers</div>
                            </div>
                            <div className="col2">
                                <div>City Offers</div>
                                <div>Brand Offers</div>
                                <div>Product Offers</div>
                                <div>Indian Internet Mobile Stats</div>
                                <div>Charities</div>
                                <div>Gift Cards</div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            
            
                
        
        </div>
    
     );
}
const mapStateToProps=(state) => {
    return {
    login: state.login,
    token: state.token
    }
}

//Map the dispatch function to component props
const mapDispatchToProps = (dispatch)=>{
    return{
    clearStore: (payload) =>{dispatch({type:'CLEAR_STORE',payload:payload})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)