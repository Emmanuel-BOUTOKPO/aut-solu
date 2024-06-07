import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import Banner from '../../component/banner/Banner'
import './home.css'
import Cat from '../../component/cat/Cat'
import News from '../../component/new/New'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <div className="uren-banner_area uren-banner_area-4">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="banner-item img-hover_effect">
          <Link to="/shop">
            <img className="img-full" src="assets/images/banner/3-1.jpg" alt="Uren" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-item img-hover_effect">
           <Link to="/shop">
            <img className="img-full" src="assets/images/banner/3-2.jpg" alt="Uren" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-item img-hover_effect">
             <Link to="/shop">
            <img className="img-full" src="assets/images/banner/3-3.jpg" alt="Uren" />
            </Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="uren-shipping_area">
  <div className="container-fluid">
    <div className="shipping-nav">
      <div className="row no-gutters">
        <div className="shipping-grid">
          <div className="shipping-item">
            <div className="shipping-icon">
              <i className="ion-ios-paperplane-outline" />
            </div>
            <div className="shipping-content">
              <h6>Free Shipping</h6>
              <p>Free shipping on all US order</p>
            </div>
          </div>
        </div>
        <div className="shipping-grid">
          <div className="shipping-item">
            <div className="shipping-icon">
              <i className="ion-ios-help-outline" />
            </div>
            <div className="shipping-content">
              <h6>Support 24/7</h6>
              <p>Contact us 24 hours a day</p>
            </div>
          </div>
        </div>
        <div className="shipping-grid">
          <div className="shipping-item">
            <div className="shipping-icon">
              <i className="ion-ios-refresh-empty" />
            </div>
            <div className="shipping-content">
              <h6>100% Money Back</h6>
              <p>You have 30 days to Return</p>
            </div>
          </div>
        </div>
        <div className="shipping-grid">
          <div className="shipping-item">
            <div className="shipping-icon">
              <i className="ion-ios-undo-outline" />
            </div>
            <div className="shipping-content">
              <h6>90 Days Return</h6>
              <p>If goods have problems</p>
            </div>
          </div>
        </div>
        <div className="shipping-grid">
          <div className="shipping-item">
            <div className="shipping-icon">
              <i className="ion-ios-locked-outline" />
            </div>
            <div className="shipping-content last-child">
              <h6>Payment Secure</h6>
              <p>We ensure secure payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
<Cat/>
<div className="uren-banner_area bg--white_smoke">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <div className="banner-item img-hover_effect">
          <div className="banner-img-1" />
          <div className="banner-content">
            <span className="offer">Get 20% off your order</span>
            <h4>Car and Truck</h4>
            <h3>Mercedes Benz</h3>
            <p>Explore and immerse in exciting 360 content with
              Fulldive’s all-in-one virtual reality platform</p>
            <div className="uren-btn-ps_left">
            <Link to="/shop" className="uren-btn">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="banner-item img-hover_effect">
          <div className="banner-img-1 banner-img-2"> </div>
          <div className="banner-content">
            <span className="offer">Save $120 when you buy</span>
            <h4>Rotiform SFO </h4>
            <h3>Custom Forged</h3>
            <p>Explore and immerse in exciting 360 content with
              Fulldive’s all-in-one virtual reality platform</p>
            <div className="uren-btn-ps_left">
              <Link to="/shop" className="uren-btn">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<News/>
{/* <Brand/> */}
 
     <Footer/>
    </>
  )
}

export default Home
