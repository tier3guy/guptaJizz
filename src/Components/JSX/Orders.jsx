import React, { useState } from 'react';
import '../CSS/Order.css';
import Modal from './Modal';
import StateWiseDrop from './StateWiseDrop';
import axios from 'axios';

const Orders = () => {

  // message dialog
  const [message, setMessage] = useState("Processing your request please wait ....");
  
  // User data
  const [order, setOrder] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    date: "",
    orderAddress: "",
    orderCity: "",
    orderState: "",
    orderPincode: "",
    numberOfDays: "",
    email: ""
  });

  let name, value;
  const getVal = (e) => {
    name = e.target.name;
    value = e.target.value;

    setOrder({...order, [name]: value});
  }

  const submit = async (e) => {
    e.preventDefault();
    setMessage("Processing your request please wait ....");
    
    const {name, address, city, state, pincode, phone, date, orderAddress, orderCity, orderState, orderPincode, numberOfDays, email } = order;

    try {
      
      let res = await axios.post('https://shrouded-falls-78930.herokuapp.com/postOrder',{name, address, city, state, pincode, phone, date, orderAddress, orderCity, orderState, orderPincode, numberOfDays, email });

      if(res.status === 200){
        setMessage('Your order has been registered successfully, we will contact you within 24 hours');
      }
      else{
        setMessage('Some Error has been occured ! we apologize for that.');
        
      }
      
    } 
    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className = "orders-container">
      <Modal message = {message}/>
      <p>All <span>*</span> marked are necessary fields</p>
      <h3 className = "mb-4">Personal Info</h3>
      <form method='POST'>

        <div className = {`form-group mt-4`}>
          <label htmlFor="name">Name *</label>
          <input 
            type="text" 
            name="name"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="Avinash Gupta"
            value={order.name}
            onChange = {getVal}/>
        </div>
        
        <div className = {`form-group mt-4`}>
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            name="address"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="123, ABC Colony, Saltlake City"
            value={order.address}
            onChange = {getVal}/>
        </div>
        
        <div className = "g3">
          
          <div className = {`form-group mt-4`}>
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              name="city"
              className = "form-control shadow-none" 
              id="inputAddress" 
              placeholder="Kolkata"
              value={order.city}
              onChange = {getVal}/>
          </div>

          <StateWiseDrop name = "State" className = "mt-4"/>

          <div className = {`form-group mt-4`}>
            <label htmlFor="pincode">Pincode</label>
            <input 
              type="text" 
              name="pincode"
              className = "form-control shadow-none" 
              id="inputAddress" 
              placeholder="700005"
              value={order.pincode}
              onChange = {getVal}/>
          </div>
          
        </div>

        <div className = {`form-group mt-4`}>
          <label htmlFor="phone">Contact Number *</label>
          <input 
            type="text" 
            name="phone"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="987654321"
            value={order.phone}
            onChange = {getVal}/>
        </div>

      </form>

      <h3 className = "mb-4 mt-5">About Orders</h3>
      <form method='POST'>

        <div className = {`form-group mt-4`}>
          <label htmlFor="date">Date of the work *</label>
          <input 
            type="text" 
            name="date"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="15th August 2022"
            value={order.date}
            onChange = {getVal}/>
        </div>

        
        <div className = {`form-group mt-4`}>
          <label htmlFor="orderAddress">Address of the work place</label>
          <input 
            type="text" 
            name="orderAddress"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="123, ABC Colony, Saltlake City"
            value={order.orderAddress}
            onChange = {getVal}/>
        </div>
        
        <div className = "g3">

          <div className = {`form-group mt-4`}>
            <label htmlFor="orderCity">City of the work place *</label>
            <input 
              type="text" 
              name="orderCity"
              className = "form-control shadow-none" 
              id="inputAddress" 
              placeholder="Ahemdabad"
              value={order.orderCity}
              onChange = {getVal}/>
          </div>

          <StateWiseDrop name = "State *" className = "mt-4"/>

          <div className = {`form-group mt-4`}>
            <label htmlFor="orderPincode">Pincode of that city</label>
            <input 
              type="text" 
              name="orderPincode"
              className = "form-control shadow-none" 
              id="inputAddress" 
              placeholder="123456"
              value={order.orderPincode}
              onChange = {getVal}/>
          </div>

        </div>

        <div className = {`form-group mt-4`}>
          <label htmlFor="numberOfDays">Number of working days *</label>
          <input 
            type="text" 
            name="numberOfDays"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="4"
            value={order.numberOfDays}
            onChange = {getVal}/>
        </div>
        
        <div className = {`form-group mt-4`}>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email"
            className = "form-control shadow-none" 
            id="inputAddress" 
            placeholder="someone@example.com"
            value={order.email}
            onChange = {getVal}/>
        </div>
        
        <p>We promise, we won't span your email.</p>
                
      </form>

      <button type="submit" className = "btn primary w-100 m-auto mt-4 shadow-none" onClick={submit} data-bs-toggle="modal" data-bs-target="#Modal">Book Order</button>
    </div>

  )
}
 
export default Orders