import React, { useEffect, useState} from 'react';
import './detail.css';
import { useParams, Link,  } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

import { FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa';
// import { ProductContext } from '../../context/ProductContext';
// import { CartContext } from '../../context/CartContext';

import { GrStatusGood } from "react-icons/gr";
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import Card from '../../component/det/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/features/post/postSlice';
import { add } from '../../redux/features/navbar/navbarSlice';

const Detail = () => {
  const { id } = useParams();
   // const { getProduct, deleteProduct } = useContext(ProductContext);
  // const { addToCart } = useContext(CartContext);
  const [postDetail, setPostDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const carouselImages = postDetail?.prodimgs || [];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    if (carouselImages.length > 0) {
      setSelectedImage(carouselImages[0]);
    }
  }, [carouselImages]);


  const dispatch = useDispatch();
//   const getUserId = JSON.parse(localStorage.getItem("users"));
  const productDetails = useSelector(state => state.product.singlePost);
 
  useEffect(() => {
    dispatch(getPosts(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetails) {
      setPostDetail(productDetails);
    } else {
      setPostDetail({});
    }
  }, [productDetails]);
  

  // useEffect(() => {
  //     const product = getProduct(parseInt(id));
  //     if (product) {
  //         setPostDetail(product);
  //         setSelectedImage(product.imgProd);
  //         setCarouselImages(product.imgsProd);
  //     }
  // }, [id, getProduct]);

  // const handleDelete = () => {
  //    // deleteProduct(parseInt(id));
  //     navigate('/');
  // };

  return (
    <>
      <Navbar />
      <div className="breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-content">
                    <h2>Detail product</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="active">Details</li>
                    </ul>
                </div>
            </div>
        </div>
        <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={selectedImage} alt="Product" id="product-detail" />
                            </div>
                            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    className="carousel-img"
                    src={image}
                    alt={`CarouselImage ${index}`}
                    onClick={() => handleClick(image)}
                  />
                ))}
              </Carousel>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <li className="list-inline-item">
                                        <p className="text-muted"><strong>{postDetail?.categories?.category || ''}</strong></p>
                                    </li>
                                    <h1 className="h2 upp">{postDetail?.title || ''}</h1>
                                    <div className="disp">
                                        <span className="h3 bs">${postDetail?.price || ''}</span>
                                        <span className="unv"><GrStatusGood style={{color:'green'}} /> available </span>
                                    </div>
                                    <div className="share-links social-sharing">
                                        <ul className="social-list d-flex">
                                            <li className="social-title">Follow us</li>
                                            <li className="social-item"><FaFacebookF style={{fontSize:'1.5rem'}}/>
                                            </li>
                                            <li className="social-item"><FaTwitter style={{fontSize:'1.5rem'}}/>
                                            </li>
                                            <li className="social-item"><FaPinterestP style={{fontSize:"1.5rem"}}/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="whatsapp-help-component" className="v-center">
                                        <div className="needService">
                                            <img src="https://cdn.shopify.com/s/files/1/0071/0760/8612/t/17/assets/whatsapp-icon.png?v=1691993355" alt="attention" className="m" />
                                            <p className="mr-auto mr-sm-0">Contact us<br className="d-md-none d-lg-flex" />
                                                <strong>by WhatsApp</strong>
                                            </p>
                                        <a href="https://wa.me/33756878304" rel="noreferrer" className="wslink button-secondary-outline button-small mx-auto mr-sm-0 pr-3 pl-3" target="_blank">
                                            <span>Scrivici</span>
                                        </a>
                                        </div>
                                    </div>

                                    <button className="cl" onClick={() => dispatch(add(postDetail))} >Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    < Card cat={postDetail?.categories?.category || ''} />                                                                                                                                                  
                </div>
            </section>
      <Footer/>
    </>
  )
}

export default Detail
