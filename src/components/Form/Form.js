import React, { useRef } from 'react';
import Table from '../Table/Table';
import "./Form.css";

const Form = () => {
    const arr = [];
    const dateRef = useRef('');
    const amountRef = useRef('');
    const paymentRef = useRef('');
    const remarkRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const date = dateRef.current.value;
        const amount = amountRef.current.value;
        const payment = paymentRef.current.value;
        const remark = remarkRef.current.value;

        const data = {
            date : date, 
            amount : amount,
            payment : payment,
            remark : remark
        }
        console.log(data);
        arr.push(data);
        console.log(arr);

        event.target.reset();
      }
  return (
    <div>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Receipts Details</h1>
        <div className="row">
          <div className="col-25">
            <label htmlFor="date">Date</label>
          </div>
          <div className="col-75">
            <input type="date" id="date" name="date" ref={dateRef} placeholder="Enter Date" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="col-75">
            <input type="text" id="amount" name="amount" ref={amountRef} placeholder="Enter Amount (in INR)" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="payment">Payment Mode</label>
          </div>
          <div className="col-75">
            <select id="payment" name="payment" ref={paymentRef}>
              <option value="cash">Cash</option>
              <option value="paypal">PayPal</option>
              <option value="card">Card</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="remark">Remark</label>
          </div>
          <div className="col-75">
            <input type="text" id="remark" name="remark" ref={remarkRef} placeholder="Enter Remark" />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
          <input type="reset" value="Cancel" />
        </div>
      </form>
    </div>
    <Table arr={arr} />
    </div>
  )
}

export default Form
