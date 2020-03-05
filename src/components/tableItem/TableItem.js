import React from 'react'


const TableItem = ({data}) => (
    <tr>
      <td>{data.type}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </tr>
);

export default TableItem;