import React, { useRef, useState } from 'react';
import Table from '../Table/Table';
import "./Form.css";

const Form = () => {
  const lists = [];

  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [payment, setPayment] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setDate(event.target.date.value);
    setAmount(event.target.amount.value);
    setPayment(event.target.payment.value);
    setRemark(event.target.remark.value);


    const data = {
      date: date,
      amount: amount,
      payment: payment,
      remark: remark
    }
    lists.push(data);
    console.log(lists);
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
              <input type="date" id="date" name="date" placeholder="Enter Date" required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="amount">Amount</label>
            </div>
            <div className="col-75">
              <input type="text" id="amount" name="amount" placeholder="Enter Amount (in INR)" required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="payment">Payment Mode</label>
            </div>
            <div className="col-75">
              <select id="payment" name="payment" required>
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
            <input type="reset" value="Cancel" />
          </div>
        </form>
      </div>

      <Table 
      date={date}
      amount={amount}
      payment={payment}
      remark={remark}></Table>

    </div>
  )
}

export default Form
