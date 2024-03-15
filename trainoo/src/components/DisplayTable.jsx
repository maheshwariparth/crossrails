import TableRow from "./TableRow";

const DisplayTable = () => {
    var sample = {
        "trainNumber" : 12123,
        "trainName" : "PRYJ - LTT",
        "arrival" : "14:00",
        "departure" : "14:20",
    };

    const handleRowClick = () => {
        console.log('clicked');
    }

    return <div className="display col m-4 px-auto py-3">
    <table className='display-table table'>
      <thead>
        <tr>
            <th scope='col'>Train No</th>
            <th scope='col'>Train Name</th>
            <th scope='col'>Arrival</th>
            <th scope='col'>Departure</th>
        </tr>
      </thead>
      <tbody>
        <TableRow traindata={sample} handleClick={handleRowClick}/>
        <TableRow traindata={sample} handleClick={handleRowClick}/>
        <TableRow traindata={sample} handleClick={handleRowClick}/>
        <TableRow traindata={sample} handleClick={handleRowClick}/>
      </tbody>
    </table>
  </div>
}

export default DisplayTable;