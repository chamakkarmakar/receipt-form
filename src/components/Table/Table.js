import React from 'react';
import "./Table.css";

const Table = ({date,amount,payment,remark}) => {
  return (
    <div className="table-wrapper">
    <table className="fl-table">
        <thead>
        <tr>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>PAYMENT MODE</th>
            <th>REMARK</th>
        </tr>
        </thead>
        <tbody>
           
        <tr>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{payment}</td>
            <td>{remark}</td>
        </tr>
        
        </tbody>
    </table>
</div>
  )
}

export default Table
