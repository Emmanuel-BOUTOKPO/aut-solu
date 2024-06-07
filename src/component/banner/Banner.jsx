import React from 'react'
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (

    <Carousel fade={true} controls={false}>
      <Carousel.Item>

        <Carousel.Caption>
          <div className="slider-content">
            <span className="carlet-text_color">Save $120 when you buy</span>
            <h3>Wheels &amp; Tires</h3>
            <p className="short-desc">Explore and immerse in exciting 360 content withFulldive’s all-in-one virtual reality platform</p>
            <div className="uren-btn-ps_center slide-btn">
              <Link to="/shop" className="uren-btn">Read More </Link>
            </div>
          </div>

        </Carousel.Caption>
        <div>

        </div>
      </Carousel.Item>
      <Carousel.Item>

        <Carousel.Caption>
          <div className="slider-content slider-content-2">
            <span className="carlet-text_color">We have the part you need</span>
            <h3>20% off Auto part</h3>
            <p className="short-desc">Explore and immerse in exciting 360 content withFulldive’s all-in-one virtual reality platform</p>
            <div className="uren-btn-ps_center slide-btn">
            <Link to="/shop" className="uren-btn">Read More </Link>
            </div>
          </div>

        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>

  )
}

export default Banner  