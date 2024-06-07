import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Navbar/>
  <div>
  <div className="breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Other</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="active">Contact</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Uren's Breadcrumb Area End Here */}
  {/* Begin Contact Main Page Area */}
  <div className="contact-main-page">
    <div className="container-fluid">
      <div id="google-map" />
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
          <div className="contact-page-side-content">
            <h3 className="contact-page-title">Contact Us</h3>
            <p className="contact-page-message">Claritas est etiam processus dynamicus, qui sequitur
              mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
              claram anteposuerit litterarum formas human.</p>
            <div className="single-contact-block">
              <h4><i className="fa fa-fax" /> Address</h4>
              <p>123 Main Street, Anytown, CA 12345 – USA</p>
            </div>
            <div className="single-contact-block">
              <h4><i className="fa fa-phone" /> Phone</h4>
              <p>Mobile: (08) 123 456 789</p>
              <p>Hotline: 1009 678 456</p>
            </div>
            <div className="single-contact-block last-child">
              <h4><i className="fa fa-envelope-o" /> Email</h4>
              <p>yourmail@domain.com</p>
              <p>support@hastech.company</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
          <div className="contact-form-content">
            <h3 className="contact-page-title">Tell Us Your Message</h3>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label>Your Name <span className="required">*</span></label>
                  <input type="text" name="con_name" id="con_name" />
                </div>
                <div className="form-group">
                  <label>Your Email <span className="required">*</span></label>
                  <input type="email" name="con_email" id="con_email" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="con_subject" id="con_subject" />
                </div>
                <div className="form-group form-group-2">
                  <label>Your Message</label>
                  <textarea name="con_message" id="con_message"/>
                </div>
                <div className="form-group">
                  <button type="submit" value="submit" id="submit" className="uren-contact-form_btn" name="submit">send</button>
                </div>
              </form>
            </div>
            <p className="form-messege" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <Footer/> 
    </>
  )
}

export default Contact
