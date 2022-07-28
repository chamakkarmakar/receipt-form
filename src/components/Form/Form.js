import React from 'react';
import "./Form.css";

const Form = () => {
    const handleSubmit = event => {
        event.reset();
      }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Receipts Details</h1>
        <div className="row">
          <div className="col-25">
            <label htmlFor="date">Date</label>
          </div>
          <div className="col-75">
            <input type="date" id="date" name="date" placeholder="Enter Date" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="col-75">
            <input type="text" id="amount" name="amount" placeholder="Enter Amount (in INR)" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="payment">Payment Mode</label>
          </div>
          <div className="col-75">
            <select id="payment" name="payment">
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
            <input type="text" id="remark" name="remark" placeholder="Enter Remark" />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Form
