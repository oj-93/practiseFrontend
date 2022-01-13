import { useState } from "react";

const CreateGuide = ({ facade, setErrorMessage }) => {
  const init = { name: "", gender: "", birthYear: "", profile: "", imageURL: "" };
  const [guide, setGuide] = useState(init);
  const dataInput = (event) => {
    setGuide({ ...guide, [event.target.id]: event.target.value })
    console.log(guide)
  }
  const result = (data) => {
    console.log(data)
  }
  const dataSubmit = (event) => {
    event.preventDefault();
    facade.createTrip("guides/createGuide", result, setErrorMessage, guide)

  }


  return (
    <div>
      <form onChange={dataInput} >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label for="gender">Gender:</label>
        <input type="text" id="gender" name="gender" />
        <label for="birthYear">BirthYear:</label>
        <input type="text" id="birthYear" name="birthYear" />
        <label for="profile">Profile:</label>
        <input type="text" id="profile" name="profile" />
        <label for="imageURL">ImageURL:</label>
        <input type="text" id="imageURL" name="imageURL" />
        <button onClick={dataSubmit}>Submit guide</button>
      </form>
    </div>
  );
}
export default CreateGuide