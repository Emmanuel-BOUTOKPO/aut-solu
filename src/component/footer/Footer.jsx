import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className="uren-footer_area">
  <div className="footer-top_area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="newsletter-area">
            <h3 className="title">Join Our Newsletter Now</h3>
            <p className="short-desc">Get E-mail updates about our latest shop and special offers.</p>
            <div className="newsletter-form_wrap">
              <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="newsletters-form validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div id="mc-form" className="mc-form subscribe-form">
                    <input id="mc-email" className="newsletter-input" type="email" autoComplete="off" placeholder="Enter your email" />
                    <button className="newsletter-btn" id="mc-submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-middle_area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-widgets_info">
            <div className="footer-widgets_logo">
              <Link to="/">
                Auto-Solu
              </Link>
            </div>
            <div className="widgets-essential_stuff">
              <ul>
                <li className="uren-address"><span>Address:</span> The Barn,
                  Ullenhall, Henley
                  in
                  Arden B578 5CC, England</li>
                <li className="uren-phone"><span>Call
                    Us:</span> <a href="tel://+123123321345">+123 321 345</a>
                </li>
                <li className="uren-email"><span>Email:</span> <a href="mailto://info@yourdomain.com">info@yourdomain.com</a></li>
              </ul>
            </div>
            <div className="uren-social_link">
              <ul>
                <li className="facebook">
                  <a href="https://www.facebook.com/" data-toggle="tooltip" rel="noreferrer" target="_blank" title="Facebook">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com/" data-toggle="tooltip"  rel="noreferrer"target="_blank" title="Twitter">
                    <i className="fab fa-twitter-square" />
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
        <div className="col-lg-8">
          <div className="footer-widgets_area">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widgets_title">
                  <h3>Information</h3>
                </div>
                <div className="footer-widgets">
                  <ul>

                    <li><Link>About Us</Link></li>
                    <li><Link>Delivery Information</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Terms &amp; Conditions</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widgets_title">
                  <h3>Customer Service</h3>
                </div>
                <div className="footer-widgets">
                  <ul>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>Returns</Link></li>
                    <li><Link>Site Map</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widgets_title">
                  <h3>Extras</h3>
                </div>
                <div className="footer-widgets">
                  <ul>
                    <li><Link>About Us</Link></li>
                    <li><Link>Delivery Information</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Terms &amp; Conditions</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widgets_title">
                  <h3>My Account</h3>
                </div>
                <div className="footer-widgets">
                  <ul>
                    <li><Link>My Account</Link></li>
                    <li><Link>Order History</Link></li>
                    <li><Link>Wish List</Link></li>
                    <li><Link>Newsletter</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
