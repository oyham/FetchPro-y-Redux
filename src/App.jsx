import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { GetRandomUserId } from "./hooks/GetRandomUser";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import { Form } from "./components/Form";
import { fetchData } from "./services/fetchData";

import "./App.css";

const apiData = fetchData(`https://jsonplaceholder.typicode.com/users/1`);

function App() {
  const dispatch = useDispatch();
  const data = apiData.read();

  const fetchData = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const initialUserId = 1;
    fetchData(initialUserId);
  }, []);

  const handleUser = () => {
    const randomUserId = GetRandomUserId();
    fetchData(randomUserId);
  };

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          <li>{data?.name}</li>
          <li>{data?.username}</li>
          <li>{data?.email}</li>
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
