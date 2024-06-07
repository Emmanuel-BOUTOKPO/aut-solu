import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { validateCreditCard } from './creditCardValidator'; // Fonction de validation de la carte de crédit

const Checkout = () => {
  const [formonSubmit={handleSubmit}>Data, setFormData] = useState({
 
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

  const handleSubmit = (e) => {
    e.preventDefault();
     
    const isCardValid = validateCreditCard(formData.cardNumber);
    if (!isCardValid) {
      toast.error('Numéro de carte de crédit invalide');
      return;
    }
    
    
    toast.success('Formulaire envoyé avec succès !');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-4">
          <div className="card p-3">
            <p className="mb-0 fw-bold h4">Payment Methods</p>
          </div>
        </div>
        <div className="col-12">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="country-select clearfix">
                    <label>Country <span className="required">*</span></label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Entrez votre pays" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>First Name <span className="required">*</span></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Last Name <span className="required">*</span></label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Address <span className="required">*</span></label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Apartment, suite, unit etc. (optional)" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Town / City <span className="required">*</span></label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Town / City" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>State / County <span className="required">*</span></label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State / County" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Postcode / Zip <span className="required">*</span></label>
                    <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode / Zip" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Email Address <span className="required">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Phone <span className="required">*</span></label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Card Number <span className="required">*</span></label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Card Expiry <span className="required">*</span></label>
                    <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} placeholder="MM / yy" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>CVV <span className="required">*</span></label>
                    <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="checkout-form-list">
                    <label>Name on the Card <span className="required">*</span></label>
                    <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="Name on the Card" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
