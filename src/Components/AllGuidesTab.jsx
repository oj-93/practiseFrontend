import AllGuides from "./AllGuides";
function allGuidesTab({ logout, facade, setErrorMessage }) {
  return (
    <div>
      <div>
        <p>
          <button onClick={logout}>Logout</button>
        </p>

        <AllGuides facade={facade} setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
}
export default allGuidesTab;