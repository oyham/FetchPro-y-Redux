/* import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice"; */
// import { GetRandomUserId } from "../hooks/GetRandomUser";

const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export function fetchData(url) {
  // const dispatch = useDispatch();
  const promise = fetch(url)
    .then((response) => response.json())
    .then((json) => json);
  /* .then((data) => {
      dispatch(addUser(data));
      return data;
    }) */
  /* .catch((err) => {
      console.log(err);
      throw err;
    }); */
  return getSuspender(promise);
}
