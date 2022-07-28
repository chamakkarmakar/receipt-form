import React from 'react';
import "./Table.css";

const Table = () => {
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
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
        </tr>
        
        </tbody>
    </table>
</div>
  )
}

export default Table
