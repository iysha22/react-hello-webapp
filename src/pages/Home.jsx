import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		 <div style={{ padding: 20 }}>
    <h1>Welcome to the Contact App</h1>
    <p>This app lets you manage your contacts with CRUD operations and API sync.</p>
    <Link to="/contacts"><button>Go to Contacts</button></Link>
  </div>
	)
}; 