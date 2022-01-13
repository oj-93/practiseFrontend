import { useState } from "react";

const CreateTrip = ({ facade, setErrorMessage }) => {
  const init = { name: "", date: "", location: "", duration: "", packingList: "" };
  const [trip, settrip] = useState(init);
  const dataInput = (event) => {
    settrip({ ...trip, [event.target.id]: event.target.value })
    console.log(trip)
  }
  const result = (data) => {
    console.log(data)
  }
  const dataSubmit = (event) => {
    event.preventDefault();
    facade.createTrip("trips/createTrip", result, setErrorMessage, trip)

  }


  return (
    <div>
      <form onChange={dataInput} >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label for="date">date:</label>
        <input type="text" id="date" name="date" />
        <label for="time">time:</label>
        <input type="text" id="time" name="time" />
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label for="duration">Duration:</label>
        <input type="text" id="duration" name="duration" />
        <label for="packingList">Packing list:</label>
        <input type="text" id="packingList" name="packingList" />
        <button onClick={dataSubmit}>Submit trip</button>
      </form>
    </div>
  );
}
export default CreateTrip