import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "./new.css"
import { useDispatch, useSelector } from 'react-redux';
import { getNew } from '../../redux/features/post/postSlice';
import { Link } from 'react-router-dom';
import ZeroProduct from '../notFound/ZeroProduct';
import { add } from '../../redux/features/navbar/navbarSlice';

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
const News = () => {
  const newpro = useSelector(state => state.product.newPost);
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getNew());
  }, [dispatch])

  useEffect(() => {
    if (newpro) {
      setAllPosts(newpro)
    } else {
      setAllPosts([])
    }
  }, [newpro]);

  return (
    <div className="featured-categories_area featured-categories_area-2">
      <div className="container-fluid">
        <div className="section-title_area titl">
          <span>Top Featured Collections</span>
          <h3>Featured New arrival</h3>
        </div>
        <Carousel responsive={responsive}>
        {   allPosts.length > 0 ? allPosts.slice(0, 4).map((post, id) => (
          <div className="single-product" key={id}>
            <div className="product-img">
              <Link to={`/detail/${post.id}`}>
                <img className="primary-img" src={post.imgprod} alt="Uren" />
              </Link>
              <div className="sticker">
              {post.availability > 0  && <span className="sticker">New</span> } 
              </div>
            </div>
            <div className="product-content">
              <div className="product-desc_info">
                <h6><Link className="product-name" to={`/detail/${post.id}`}>{post.title} </Link></h6>
                <div className="price-box">
                  <span className="new-price">${post.price}</span>
                  <Link className="uren-add_cart" onClick={() => dispatch(add(post))}><i className="ion-bag" /></Link>
                </div>
              </div>
            </div>
          </div>)) : <ZeroProduct />
        }
        </Carousel>
      </div>
    </div>

  )
}

export default News
