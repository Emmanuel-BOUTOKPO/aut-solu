import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {useDispatch, useSelector } from 'react-redux'
import './pay.css'
import { removeAll } from '../../redux/features/navbar/navbarSlice'

const Checkout = () => {
  const dispatch = useDispatch();

  const productsInShoppingCart = useSelector((state) => state.nav.value);

  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity; // Her ürünü adedi ile çarparak toplam fiyatı hesaplama
    }
    return totalPrice;
  }

  const [formData, setFormData] = useState({
 
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: '',
    cardName: ''
  });

  const validateCreditCard = (cardNumber) => {
  let sum = 0;
  let alternate = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let num = parseInt(cardNumber.charAt(i), 10);
    if (alternate) {
      num *= 2;
      if (num > 9) {
        num = (num % 10) + 1;
      }
    }
    sum += num;
    alternate = !alternate;
  }
  return sum % 10 === 0;
};
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();

  // const isCardValid = validateCreditCard(formData.cardNumber);
  // if (!isCardValid) {
  //   toast.error('Numéro de carte de crédit invalide');
  //   return;
  // }
  // else 
  if(formData.address === "" || formData.cardNumber === ''){
    toast.error('Veuillez remplir tous les champs requis !');
  }
  else{
    localStorage.setItem("order", JSON.stringify(formData));
    toast.success('');
    dispatch(removeAll())
    navigate('/thank')
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};


  return (
    <>
      <Navbar />
      <div>
        {/* Begin Uren's Breadcrumb Area */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="breadcrumb-content">
              <h2>Other</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li className="active">Checkout</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="checkout-area">
          <div className="container-fluid">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="checkbox-form">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select clearfix">
                          <label>Country <span className="required">*</span></label>
                          <input type="text" placeholder='Entrez votre pays' name="country" value={formData.country} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>First Name <span className="required">*</span></label>
                          <input placeholder='First Name' type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Last Name <span className="required">*</span></label>
                          <input placeholder='Last Name' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Address <span className="required">*</span></label>
                          <input placeholder="Street address" type="text" name="address" value={formData.address} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input placeholder="Apartment, suite, unit etc. (optional)" value={formData.city} onChange={handleChange}type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Town / City <span className="required">*</span></label>
                          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>State / County <span className="required">*</span></label>
                          <input placeholder='State or country' type="text" name="state" value={formData.state} onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Postcode / Zip <span className="required">*</span></label>
                          <input placeholder='Zip' type="text"  name="postcode" value={formData.postcode} onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Email Address <span className="required">*</span></label>
                          <input placeholder='email' type="email" name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>Phone <span className="required">*</span></label>
                          <input type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange}/>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="your-order">
                    <h3>Your order</h3>
                    <div className="your-order-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="cart-product-name">Product</th>
                            <th className="cart-product-total">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                      productsInShoppingCart.map((eachProduct, index) => (
                          <tr className="cart_item" key={index}>  
                            <td className="cart-product-name"> {eachProduct.title}<strong className="product-quantity">
                              × {eachProduct.quantity}</strong></td>
                            <td className="cart-product-total"><span className="amount">{eachProduct.price}</span></td>
                          </tr>
                           ))

                          }
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td><span className="amount">£{calculateTotalPrice()} </span></td>
                          </tr>
                          <tr className="order-total">
                            <th>Order Total</th>
                            <td><strong><span className="amount">£{calculateTotalPrice()}</span></strong></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="payment-method">
                      <div className="payment-accordion">
                        <div id="accordion">
                          <div className="card">
                            <div className="card-header" id="#payment-1">
                              <h5 className="panel-title">
                                <Link  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Direct Bank Transfer.
                                </Link>
                              </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                              <div className="card-body">
                                <div className="card-header">
                                  <div className="rib"> IBAN : LT943500010017121751</div>
                                  <div className="rib"> BIC : EVIULT2VXXX</div>
                                  <div className="rib"> Numero de commande : 12345</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="#payment-2">
                              <h5 className="panel-title">
                                <Link className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Payment Methods
                                </Link>
                              </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                              <div className="card-body">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-12 mt-4">
                                      <div className="card p-3">
                                        <p className="mb-0 fw-bold h4">Payment Methods</p>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="card p-3">
                                        <div className="card-body border p-0">
                                          <p>
                                            <a className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                                              <span className="fw-bold">PayPal</span>
                                              <span className="fab fa-cc-paypal">
                                              </span>
                                            </a>
                                          </p>
                                        </div>
                                        <div className="card-body border p-0">
                                          <p>
                                            <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                                              <span className="fw-bold">Credit Card</span>
                                              <span>
                                                <span className="fab fa-cc-amex" />
                                                <span className="fab fa-cc-mastercard" />
                                                <span className="fab fa-cc-discover" />
                                              </span>
                                            </a>
                                          </p>
                                          <div className="collapse show p-3 pt-0" id="collapseExample">
                                            <div className="row">
                                              <div className="col-lg-12">

                                                <div className="row">
                                                  <div className="col-12">
                                                    <div className="form__div">
                                                      <input type="text" className="form-control" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                                                      <label className="form__label">Card Number</label>
                                                    </div>
                                                  </div>
                                                  <div className="col-6">
                                                    <div className="form__div">
                                                      <input type="text" className="form-control" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} />
                                                      <label className="form__label">MM / yy</label>
                                                    </div>
                                                  </div>
                                                  <div className="col-6">
                                                    <div className="form__div">
                                                      <input type="password" className="form-control" name="cvv" value={formData.cvv} onChange={handleChange} />
                                                      <label className="form__label">cvv code</label>
                                                    </div>
                                                  </div>
                                                  <div className="col-12">
                                                    <div className="form__div">
                                                      <input type="text" className="form-control" name="cardName" value={formData.cardName} onChange={handleChange} />
                                                      <label className="form__label">name on the card</label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="order-button-payment">
                          <input value="Place order" type="submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Checkout
