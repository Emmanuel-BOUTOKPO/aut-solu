import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, removeOne } from '../../redux/features/navbar/navbarSlice';
import './cart.css'

const Cart = () => {
  const productsInShoppingCart = useSelector((state) => state.nav.value);
  const dispatch = useDispatch();

  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity; // Her ürünü adedi ile çarparak toplam fiyatı hesaplama
    }
    return totalPrice;
  }

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }
  
  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }
  
  console.log(productsInShoppingCart);
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
          <li className="active">Cart</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Uren's Breadcrumb Area End Here */}
  {/* Begin Uren's Cart Area */}
  <div className="uren-cart-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="table-content table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="uren-product-remove">remove</th>
                    <th className="uren-product-thumbnail">images</th>
                    <th className="cart-product-name">Product</th>
                    <th className="uren-product-price">Unit Price</th>
                    <th className="uren-product-quantity">Quantity</th>
                    <th className="uren-product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      productsInShoppingCart.map((eachProduct, index) => (
                  <tr key={index}>
                    <td className="uren-product-remove"><Link  onClick={() => dispatch(remove(eachProduct.id))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}><i className="fa fa-trash" title="Remove" /></Link></td>
                    <td className="uren-product-thumbnail"><Link><img src={eachProduct.imgprod} alt="Uren" className='cartImg' /></Link></td>
                    <td className="uren-product-name"><Link>{eachProduct.title}</Link></td>
                    <td className="uren-product-price"><span className="amount">{eachProduct.price}</span></td>
                    <td className="quantity">
                      <label>Quantity</label>
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" readOnly value={eachProduct.quantity} type="text" />
                        <div className="dec qtybutton" onClick={() => dispatch(removeOne(eachProduct.idproduct))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}><i className="fa fa-angle-down" /></div>
                        <div className="inc qtybutton" onClick={() => dispatch(add(eachProduct))}><i className="fa fa-angle-up" /></div>
                      </div>
                    </td>
                    <td className="product-subtotal"><span className="amount">${calculateTotalPrice()}</span></td>
                  </tr>
                   ))

                  }
                </tbody>
              </table>
            </div>
          
            <div className="row">
              <div className="col-md-5 ml-auto">
                <div className="cart-page-total">
                  <h2>Cart totals</h2>
                  <ul>
                    <li>Subtotal <span>${calculateTotalPrice()}</span></li>
                    <li>Total <span>${calculateTotalPrice()}</span></li>
                  </ul>
                  <Link to="/checkout">Proceed to checkout</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Uren's Cart Area End Here */}
</div>

     <Footer/> 
    </>
  )
}

export default Cart
