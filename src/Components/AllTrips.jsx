import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function AllTrips({ facade, setErrorMessage }) {
    const [trips, setAllTrips] = useState([]);

    const getTrips = (data) => {
        setAllTrips(data)
        console.log(data)
    }
    
    useEffect(() => {
        facade.fetchData("trips/all_trips", getTrips, setErrorMessage)
    },[facade, setErrorMessage])

    const handleDelete = (event) =>{
        event.preventDefault()
        facade.deleteButton("trips/" + event.target.id, setErrorMessage)
        console.log(event)
    }


  return ( 
    <div>
    <Table table="true" table-striped="true" table-bordered ="true" table-condensed = "true">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Duration</th>
          <th>Packing list</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {trips.map((x) => (
          <tr>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.date}</td>
            <td>{x.time}</td>
            <td>{x.location}</td>
            <td>{x.duration}</td>
            <td>{x.packingList}</td>
            <td><button id={x.id} onClick={handleDelete}>DELETE</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div> 
  )}
export default AllTrips