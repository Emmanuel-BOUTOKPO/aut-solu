import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllePosts, getFiltre } from '../../redux/features/post/postSlice';
import { getCat } from '../../redux/features/cat/catSlice';
import ZeroProduct from '../../component/notFound/ZeroProduct';
import { add } from '../../redux/features/navbar/navbarSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = useState([]);
  const cats = useSelector((state) => state.cat.categorie);
  const products = useSelector((state) => state.product.filters);
  const productsAll = useSelector((state) => state.product.postes);
  const [postsAll, setPostsAll] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 15;

  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setCurrentPage(0); // Reset to the first page when filters are applied
    dispatch(getFiltre({ ...filters, page: 1, limit: productsPerPage }));
  };

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filters.category
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : postsAll.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    dispatch(getCat());
  }, [dispatch]);

  useEffect(() => {
    if (cats) {
      setAllPosts(cats);
    } else {
      setAllPosts([]);
    }
  }, [cats]);

  useEffect(() => {
    dispatch(getAllePosts());
  }, [dispatch]);

  useEffect(() => {
    if (productsAll) {
      setPostsAll(productsAll);
    } else {
      setPostsAll([]);
    }
  }, [productsAll]);

  return (
    <>
      <Navbar />

      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Shop</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="active">Shop Left Sidebar</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shop-content_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-5 order-2 order-lg-1 order-md-1">
              <div className="uren-sidebar-catagories_area">
                <div className="category-module uren-sidebar_categories">
                  <div className="category-module_heading">
                    <h5>Categories</h5>
                  </div>
                  <div className="module-body">
                    <ul className="module-list_item">
                      {allPosts.length > 0 && allPosts.map((item, id) => (
                        <li key={id}>
                          <Link to="#" onClick={() => setFilters({ ...filters, category: item.id })}>
                            {item.category}  <span>({allPosts.length})</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="uren-sidebar_categories">
                  <div className="uren-categories_title">
                    <h5>Price</h5>
                  </div>
                  <div className="price-filter">
                    <div id="slider-range" />
                    <div className="price-slider-amount">
                      <div className="label-input">
                        <label>Price:</label>
                        <input
                          type="text"
                          id="minPrice"
                          name="minPrice"
                          value={filters.minPrice}
                          onChange={handleFilterChange}
                          placeholder="Min"
                        />
                        <input
                          type="text"
                          id="maxPrice"
                          name="maxPrice"
                          value={filters.maxPrice}
                          onChange={handleFilterChange}
                          placeholder="Max"
                        />
                      </div>
                      <button type="button" onClick={handleSubmit}>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-banner_area">
                <div className="banner-item img-hover_effect">
                  <Link to="#">
                    <img src="assets/images/shop/1.jpg" alt="Uren" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7 order-1 order-lg-2 order-md-2">
              <div className="shop-toolbar">
                <div className="product-view-mode">
                  <Link className="grid-1" data-target="gridview-1" data-toggle="tooltip" data-placement="top" title={1}>1</Link>
                  <Link className="grid-2" data-target="gridview-2" data-toggle="tooltip" data-placement="top" title={2}>2</Link>
                  <Link className="active grid-3" data-target="gridview-3" data-toggle="tooltip" data-placement="top" title={3}>3</Link>
                  <Link className="grid-4" data-target="gridview-4" data-toggle="tooltip" data-placement="top" title={4}>4</Link>
                  <Link className="grid-5" data-target="gridview-5" data-toggle="tooltip" data-placement="top" title={5}>5</Link>
                  <Link className="list" data-target="listview" data-toggle="tooltip" data-placement="top" title="List"><i className="fa fa-th-list" /></Link>
                </div>
                <div className="product-item-selection_area">
                  <div className="product-short">
                    <label className="select-label">Short By:</label>
                    <select className="myniceselect nice-select">
                      <option value={1}>Default</option>
                      <option value={2}>Name, A to Z</option>
                      <option value={3}>Name, Z to A</option>
                      <option value={4}>Price, low to high</option>
                      <option value={5}>Price, high to low</option>
                      <option value={5}>Rating (Highest)</option>
                      <option value={5}>Rating (Lowest)</option>
                      <option value={5}>Model (A - Z)</option>
                      <option value={5}>Model (Z - A)</option>
                    </select>
                  </div>
                  <div className="product-showing">
                    <label className="select-label">Show:</label>
                    <select className="myniceselect short-select nice-select">
                      <option value={15}>15</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="shop-product-wrap grid gridview-3 img-hover-effect_area row">
                {currentProducts.length > 0 ? currentProducts.map((post, id) => (
                  <div className="col-lg-4" key={id}>
                    <div className="product-slide_item">
                      <div className="inner-slide">
                        <div className="single-product">
                          <div className="product-img">
                            <Link to={`/detail/${post.id}`}>
                              <img className="primary-img" src={post.imgprod} alt="Uren" />
                              <img className="secondary-img" src={post.prodimgs[0]} alt="Ure" />
                            </Link>
                            <div className="sticker">
                              {post.availability > 0 && <span className="sticker">New</span>}
                            </div>
                            <div className="add-actions">
                              <ul>
                                <li>
                                  <Link className="uren-add_cart" onClick={() => dispatch(add(post))}>
                                    <i className="ion-bag" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-desc_info">
                              <div className="rating-box">
                                <ul>
                                  <li><i className="ion-android-star" /></li>
                                  <li><i className="ion-android-star" /></li>
                                  <li><i className="ion-android-star" /></li>
                                  <li className="silver-color"><i className="ion-android-star" /></li>
                                  <li className="silver-color"><i className="ion-android-star" /></li>
                                </ul>
                              </div>
                              <h6><Link className="product-name" to={`/detail/${post.id}`}>{post.title}</Link></h6>
                              <div className="price-box">
                                <span className="new-price">${post.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : <ZeroProduct />}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="uren-paginatoin-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <ReactPaginate
                          previousLabel={'<'}
                          nextLabel={'>'}
                          breakLabel={'...'}
                          pageCount={Math.ceil((filters.category ? products.length : postsAll.length) / productsPerPage)}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={handlePageClick}
                          containerClassName={'uren-pagination-box primary-color'}
                          activeClassName={'active'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
