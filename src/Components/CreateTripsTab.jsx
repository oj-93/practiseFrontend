import CreateTrip from "./CreateTrip";
import CreateGuide from "./CreateGuide";
function CreateTripsTab({ logout, facade, setErrorMessage }) {
    return (
        <div>
            <div>
                <p>
                    <button onClick={logout}>Logout</button>
                </p>

                <p>Create trip <CreateTrip facade={facade} setErrorMessage={setErrorMessage} /></p>
                <p>Create Guide <CreateGuide facade={facade} setErrorMessage={setErrorMessage} /></p>
            </div>
        </div>
    );
}
export default CreateTripsTab;