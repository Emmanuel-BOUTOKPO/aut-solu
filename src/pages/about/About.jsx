import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
     <Navbar/>
 <div>
  {/* Begin Uren's Breadcrumb Area */}
  <div className="breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-content">
        <h2>Other</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="active">About Us</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Uren's Breadcrumb Area End Here */}
  {/* Begin Uren's About Us Area */}
  <div className="about-us-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-5">
          <div className="overview-img text-center img-hover_effect">
            <Link href="#">
              <img className="img-full" src="assets/images/about-us/1.jpg" alt="Uren" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-7 d-flex align-items-center">
          <div className="overview-content">
            <h2>Welcome To <span>Uren's</span> Store!</h2>
            <p className="short_desc">We Provide Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae nisi fuga facilis, consequuntur, maiores eveniet voluptatum, omnis possimus
              temporibus aspernatur nobis animi in exercitationem vitae nulla! Adipisci ullam illum quisquam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla veniam? Magni aliquid
              asperiores magnam. Veniam ex tenetur.</p>
            <div className="uren-about-us_btn-area">
              <Link className="about-us_btn" to="/shop">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Uren's About Us Area End Here */}
  {/* Begin Uren's Project Countdown Area */}
  <div className="project-count-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-count text-center">
            <div className="count-icon">
              <span className="ion-ios-briefcase-outline" />
            </div>
            <div className="count-title">
              <h2 className="count">2169</h2>
              <span>Project Done</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-count text-center">
            <div className="count-icon">
              <span className="ion-ios-wineglass-outline" />
            </div>
            <div className="count-title">
              <h2 className="count">869</h2>
              <span>Awards Winned</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-count text-center">
            <div className="count-icon">
              <span className="ion-ios-lightbulb-outline" />
            </div>
            <div className="count-title">
              <h2 className="count">689</h2>
              <span>Hours Worked</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-count text-center">
            <div className="count-icon">
              <span className="ion-happy-outline" />
            </div>
            <div className="count-title">
              <h2 className="count">2169</h2>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Uren's Project Countdown Area End Here */}
  {/* Begin Uren's Team Area */}
  <div className="team-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="section_title-2">
            <h3>Our Team</h3>
          </div>
        </div>
      </div> {/* section title end */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member">
            <div className="team-thumb img-hover_effect">
              <Link>
                <img src="assets/images/about-us/team/1.jpg" alt="Member" />
              </Link>
            </div>
            <div className="team-content text-center">
              <h3>Edwin Adams</h3>
              <p>IT Expert</p>
              <Link>info@example.com</Link>
              <div className="uren-social_link">
                <ul>
                  <li className="facebook">
                    <a href="https://www.facebook.com/" rel="noreferrer" data-toggle="tooltip" target="_blank" title="Facebook">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://twitter.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Twitter">
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Youtube">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="https://www.plus.google.com/discover" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Google Plus">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://rss.com/" data-toggle="tooltip" target="_blank" rel="noreferrer" title="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member">
            <div className="team-thumb img-hover_effect">
              <Link>
                <img src="assets/images/about-us/team/2.jpg" alt="Member" />
              </Link>
            </div>
            <div className="team-content text-center">
              <h3>Anny Adams</h3>
              <p>Web Designer</p>
              <Link>info@example.com</Link>
              <div className="uren-social_link">
                <ul>
                  <li className="facebook">
                    <a href="https://www.facebook.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Facebook">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://twitter.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Twitter">
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Youtube">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="https://www.plus.google.com/discover" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Google Plus">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://rss.com/" data-toggle="tooltip" target="_blank" rel="noreferrer" title="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member">
            <div className="team-thumb img-hover_effect">
              <Link>
                <img src="assets/images/about-us/team/3.jpg" alt="Oember" />
              </Link>
            </div>
            <div className="team-content text-center">
              <h3>Edvin Adams</h3>
              <p>Content Writer</p>
              <Link>info@example.com</Link>
              <div className="uren-social_link">
                <ul>
                  <li className="facebook">
                    <a href="https://www.facebook.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Facebook">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://twitter.com/" data-toggle="tooltip" rel="noreferrer"  target="_blank" title="Twitter">
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/" data-toggle="tooltip"rel="noreferrer"  target="_blank" title="Youtube">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="https://www.plus.google.com/discover" rel="noreferrer" data-toggle="tooltip" target="_blank" title="Google Plus">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://rss.com/" data-toggle="tooltip" target="_blank" rel="noreferrer" title="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="team-member">
            <div className="team-thumb img-hover_effect">
              <Link>
                <img src="assets/images/about-us/team/4.jpg" alt="Our Team Member" />
              </Link>
            </div>
            <div className="team-content text-center">
              <h3>Eddy Adams</h3>
              <p>Marketing officer</p>
              <Link>info@example.com</Link>
              <div className="uren-social_link">
                <ul>
                  <li className="facebook">
                    <a href="https://www.facebook.com/" rel="noreferrer" data-toggle="tooltip" target="_blank" title="Facebook">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://twitter.com/" data-toggle="tooltip"  rel="noreferrer"target="_blank" title="Twitter">
                      <i className="fab fa-twitter-square" />
                    </a>
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Youtube">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="https://www.plus.google.com/discover" rel="noreferrer" data-toggle="tooltip" target="_blank" title="Google Plus">
                      <i className="fab fa-google-plus" /> 
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://rss.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> {/* end single team member */}
      </div>
    </div>
  </div>
</div>

     <Footer/>
     </> 
  )
}

export default About
