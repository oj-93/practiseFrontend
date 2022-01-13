import AllTrips from "./AllTrips";
function TripsTab({ logout, facade, setErrorMessage }) {
  return (
    <div>
      <div>
        <p>
          <button onClick={logout}>Logout</button>
        </p>

        <AllTrips facade={facade} setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
export default TripsTab;