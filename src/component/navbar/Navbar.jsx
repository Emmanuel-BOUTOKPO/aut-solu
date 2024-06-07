import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCat } from '../../redux/features/cat/catSlice';
import { remove } from '../../redux/features/navbar/navbarSlice';
import { FaCarCrash } from "react-icons/fa";
import "./nab.css"

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [toggl, setToggl] = useState(false);
  const [togg, setTogg] = useState(false);
  const [toggls, setToggls] = useState(false);
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = useState([]);
  const cats = useSelector((state) => state.cat.categorie);

  const productsInShoppingCart = useSelector((state) => state.nav.value);

  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity; // Her ürünü adedi ile çarparak toplam fiyatı hesaplama
    }
    return totalPrice;
  }
  const products = useSelector(state => state.nav.value);
  // const users = JSON.parse(localStorage.getItem("user"));

  const numberOfProducts = () => {
    let number = 0;
    for (let i = 0; i < products.length; i++) {
      number += products[i].quantity;
    }
    return number;
  }

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

  return (
    <header className="header-main_area header-main_area-2 header-main_area-3">

      <div className="header-middle_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5">
              <div className="header-logo_area">
                <Link to="/">
                  <div><FaCarCrash className='cars' /></div>
                  <div className='titled'>Auto-Solu.</div>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 d-none d-lg-block">
              <div className="hm-form_area">
                <form action="#" className="hm-searchbox">
                  <div className="nice-select select-search-category" tabIndex={0}>
                    <span className="current">All Categories</span>
                    <ul className="list">
                      <li data-value={0} className="option selected focus">All Categories</li>
                      {allPosts.length > 0 && allPosts.map((category) => (
                        <li data-value={category.id} className="option" key={category.id}>{category.category}</li>
                      ))}
                    </ul>
                  </div>
                  <input type="text" placeholder="Enter your search key ..." />
                  <button className="header-search_btn" type="submit"><i className="ion-ios-search-strong"><span>Search</span></i></button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-9 col-sm-7">
              <div className="header-right_area">
                <ul>
                  <li className="mobile-menu_wrap d-flex d-lg-none">
                    <Link onClick={() => setToggle(true)} className="mobile-menu_btn toolbar-btn color--white">
                      <i className="ion-navicon" />
                    </Link>
                  </li>
                  <li className="minicart-wrap">
                    <Link onClick={() => setToggl(true)} className="minicart-btn toolbar-btn">
                      <div className="minicart-count_area">
                        <span className="item-count">{numberOfProducts()}</span>
                        <i className="ion-bag" />
                      </div>
                    </Link>
                  </li>
                  <li className="contact-us_wrap">
                    <a href="tel://+123123321345"><i className="ion-android-call" />+123 321 345</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="header-top_area bg--primary">
        <div className="container-fluid">
          <div className="row">
            <div className="custom-menu_col col-12 d-none d-lg-block">
              <div className="main-menu_area position-relative">
                <nav className="main-nav">
                  <ul>
                    <li className="dropdown-holder active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="megamenu-holder ">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="custom-setting_col col-12 d-none d-lg-block">
              <div className="ht-right_area">
                <div className="ht-menu">
                  <ul>

                    <li><Link><span><img src="/assets/images/menu/icon/1.jpg" alt="language" /></span> <span>Language</span> <i className="fa fa-chevron-down" /></Link>
                      <ul className="ht-dropdown">
                        <li className="active"><Link><img src="assets/images/menu/icon/1.jpg" alt="JB's Language Icon" />English</Link></li>
                        <li><Link><img src="assets/images/menu/icon/2.jpg" alt="JB's Language Icon" />Français</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="custom-search_col col-12 d-none d-md-block d-lg-none">
              <div className="hm-form_area">
                <form action="#" className="hm-searchbox">
                  <select
                    name="category"

                    className="nice-select select-search-category" style={{ display: 'none' }}
                  >
                    <option value={0}>All Categories</option>
                    {allPosts.length > 0 && allPosts.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </select>

                  <input type="text" placeholder="Enter your search key ..." />
                  <button className="header-search_btn" type="submit"><i className="ion-ios-search-strong"><span>Search</span></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="header-top_area header-sticky bg--primary">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-7 d-lg-block d-none">
              <div className="main-menu_area position-relative">
                <nav className="main-nav">
                  <ul>
                    <li className="dropdown-holder active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="megamenu-holder ">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-3 d-block d-lg-none">
              <div className="header-logo_area header-sticky_logo">
                <Link to="/">
                  <div><FaCarCrash className="cars" /></div>
                  <div className='titled'>Auto-Solu.</div>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-sm-9">
              <div className="header-right_area">
                <ul>
                  <li className="mobile-menu_wrap d-flex d-lg-none">
                    <Link onClick={() => setToggle(true)} className="mobile-menu_btn toolbar-btn color--white">
                      <i className="ion-navicon" />
                    </Link>
                  </li>
                  <li className="minicart-wrap" onClick={() => setToggl(true)} >
                    <Link className="minicart-btn toolbar-btn">
                      <div className="minicart-count_area">
                        <span className="item-count">{numberOfProducts()}</span>
                        <i className="ion-bag" />
                      </div>
                    </Link>
                  </li>
                  <li className="contact-us_wrap">
                    <a href="tel://+123123321345"><i className="ion-android-call" />+123 321 345</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {toggl && <div className="offcanvas-minicart_wrapper open" id="miniCart">
        <div className="offcanvas-menu-inner">
          <Link className="btn-close"><i onClick={() => setToggl(false)} className="ion-android-close" /></Link>
          <div className="minicart-content">
            <div className="minicart-heading">
              <h4>Shopping Cart</h4>
            </div>
            <ul className="minicart-list">
              {
                productsInShoppingCart.map((eachProduct, id) => (
                  <li className="minicart-product" key={id}>
                    <Link className="product-item_remove" onClick={() => dispatch(remove(eachProduct.id))} ><i className="ion-android-close" /></Link>
                    <div className="product-item_img">
                      <img src={eachProduct.imgprod} alt="Uren" />
                    </div>
                    <div className="product-item_content">
                      <Link className="product-item_title" to="/shop">Autem ipsa ad</Link>
                      <span className="product-item_quantity">{eachProduct.quantity + "x" + eachProduct.price}</span>
                    </div>
                  </li>
                ))

              }
            </ul>
          </div>
          <div className="minicart-item_total">
            <span>Subtotal</span>
            <span className="ammount">{calculateTotalPrice()}</span>
          </div>
          <div className="minicart-btn_area">
            <Link to="/cart" className="uren-btn uren-btn_dark uren-btn_fullwidth">Minicart</Link>
          </div>
          <div className="minicart-btn_area">
            <Link to="/checkout" className="uren-btn uren-btn_dark uren-btn_fullwidth">Checkout</Link>
          </div>
        </div>
      </div>}


      {toggle && <div className="mobile-menu_wrapper open" id="mobileMenu">
        <div className="offcanvas-menu-inner">
          <div className="container">
            <Link onClick={() => setToggle(false)} className="btn-close"><i className="ion-android-close" /></Link>
            <div className="offcanvas-inner_search">
              <form action="#" className="inner-searchbox">
                <input type="text" placeholder="Search for item..." />
                <button className="search_btn" type="submit"><i className="ion-ios-search-strong" /></button>
              </form>
            </div>
            <nav className="offcanvas-navigation">
              <ul className="mobile-menu">
                <li className="menu-item-has-children active">
                  <Link to="/"><span className="mm-text">Home</span></Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/shop">
                    <span className="mm-text">Shop</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="offcanvas-navigation user-setting_area">
              <ul className="mobile-menu">
                <li className="menu-item-has-children" onClick={() => setTogg(true)}><span className="menu-expand"><i className="ion-chevron-right" /></span>
                  <Link to="/">
                    <span className="mm-text">Pages</span>
                  </Link>
                  {togg && <ul className="sub-menu">
                    <li onClick={() => setTogg(false)}>
                      <Link to="/cart">
                        <span className="mm-text">Cart</span>
                      </Link>
                    </li>
                    <li onClick={() => setTogg(false)}>
                      <Link to="/checkout">
                        <span className="mm-text">Checkout</span>
                      </Link>
                    </li>
                  </ul>}
                </li>

                <li className="menu-item-has-children" onClick={() => setToggls(true)}><span className="menu-expand"><i className="ion-chevron-right" /></span><Link><span className="mm-text">Language</span></Link>
                  {toggls && <ul className="sub-menu">
                    <li>
                      <Link>
                        <span className="mm-text" onClick={() => setToggls(false)}>English</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span className="mm-text" onClick={() => setToggls(false)}>Français</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span className="mm-text" onClick={() => setToggls(false)}>Romanian</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span className="mm-text" onClick={() => setToggls(false)}>Japanese</span>
                      </Link>
                    </li>
                  </ul>}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>}
    </header>

  )
}

export default Navbar
