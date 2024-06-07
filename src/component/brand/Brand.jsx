import React from 'react'
import { Carousel } from 'react-bootstrap';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Brand = () => {

    return (
        <div className="uren-brand_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title_area">
                            <span>Top Quality Partner</span>
                            <h3>Shop By Brands</h3>
                        </div>
                        <Carousel responsive={responsive}>
                            <div className="single-product">
                                <a href="javascript:void(0)">
                                    <img src="assets/images/brand/1.jpg" alt="Uren's Brand Image" />
                                </a>
                            </div>
                            <div className="single-product">
                                <a href="javascript:void(0)">
                                    <img src="assets/images/brand/2.jpg" alt="Uren's Brand Image" />
                                </a>
                            </div>
                            <div className="single-product">
                                <a href="javascript:void(0)">
                                    <img src="assets/images/brand/3.jpg" alt="Uren's Brand Image" />
                                </a>
                            </div>
                            <div className="single-product">
                                <a href="javascript:void(0)">
                                    <img src="assets/images/brand/6.jpg" alt="Uren's Brand Image" />
                                </a>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
