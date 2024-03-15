import { useState } from 'react';

const TableRow = ({ traindata, handleClick }) => {
  const [hovered, setHovered] = useState(false);

  var trainNumber = traindata["trainNumber"];
  var trainName = traindata["trainName"];
  var arrival = traindata["arrival"];
  var departure = traindata["departure"];
  return <tr role='button' className={`displaytable-row ${hovered ? 'table-primary' : ''}`} onClick={handleClick} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
    <th scope="row">{trainNumber}</th>
    <td>{trainName}</td>
    <td>{arrival}</td>
    <td>{departure}</td>
  </tr>
}

export default TableRow;