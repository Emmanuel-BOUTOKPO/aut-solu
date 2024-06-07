import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "./cat.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/features/post/postSlice';
import ZeroProduct from '../notFound/ZeroProduct';

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
const Cat = () => {
  const cats = useSelector(state => state.product.post);
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch])

  useEffect(() => {
    if (cats) {
      setAllPosts(cats)
    } else {
      setAllPosts([])
    }
  }, [cats]);

  return (
    <div className="featured-categories_area featured-categories_area-2">
      <div className="container-fluid">
        <div className="section-title_area titl">
          <span>Top Featured Collections</span>
          <h3>Featured Categories</h3>
        </div>
        <Carousel responsive={responsive}>
        {
        allPosts.length > 0 ? Object.entries(allPosts[0]).slice(0, 1).map(([category, postes]) => (
         <div className="single-product" key={category}>
            <div className="slid">
            <Link to="/shop">
                <img src={postes[0]?.imgprod} alt="Categories" />
            </Link>
            </div>
            <div className="slide-content_area">
              <h3> <Link to="/shop">{category}</Link></h3>
              <span>({ postes.length > 1 ? postes.length + " products" :  postes.length + " product" })</span>
            </div>
          </div>
          // postes.length > 0 ? postes.slice(0, 3).map((post, id) => (
          // )) : <ZeroProduct />

        )) : <ZeroProduct />
      }
        </Carousel>
      </div>
    </div>

  )
}

export default Cat
