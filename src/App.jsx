import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { addUserPro } from "./redux/userProSlice";
import { GetRandomUserId } from "./hooks/GetRandomUser";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { Form } from "./components/Form";
import { fetchData } from "./services/fetchData";

import "./App.css";

const apiData = fetchData(
  `https://jsonplaceholder.typicode.com/users/${GetRandomUserId()}`
);
function App() {
  const dispatch = useDispatch();
  const data = apiData.read();
  dispatch(addUserPro(data));
  console.log("addUserPro", data);

  const fetchData = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data), console.log("fetchData", data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const initialUserId = GetRandomUserId();
    fetchData(initialUserId);
    console.log("useEffect");
  }, []);

  const handleUser = () => {
    const randomUserId = GetRandomUserId();
    fetchData(randomUserId);
  };

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Petición con fetchData.js</h2>
        <ul className="card" id="data-ul">
          <li className="name">{data?.name}</li>
          <li className="username">{data?.username}</li>
          <li className="email">{data?.email}</li>
        </ul>
        <Header />
        <Email />
        <br></br>
        <button onClick={handleUser} style={{ margin: "2rem" }}>
          Change user
        </button>
        <Form />
      </Suspense>
    </div>
  );
}

export default App;
