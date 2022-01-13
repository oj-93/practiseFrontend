import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function AllGuides({ facade, setErrorMessage }) {
    const [guides, setAllGuides] = useState([]);

    const getGuides = (data) => {
        setAllGuides(data)
        console.log(data)
    }
    
    useEffect(() => {
        facade.fetchData("guides/all_guides", getGuides, setErrorMessage)
    },[facade, setErrorMessage])



  return ( 
    <div>
    <Table table="true" table-striped="true" table-bordered ="true" table-condensed = "true">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Year</th>
          <th>Profile</th>
          <th>ImageURL</th>
        </tr>
      </thead>
      <tbody>
        {guides.map((x) => (
          <tr>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.gender}</td>
            <td>{x.birthYear}</td>
            <td>{x.profile}</td>
            <td>{x.imageURL}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div> 
  )}
export default AllGuides