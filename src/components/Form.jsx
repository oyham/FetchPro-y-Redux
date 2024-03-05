import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeEmail } from "../redux/userProSlice";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const name = useSelector((state) => state.userPro.name);
  const email = useSelector((state) => state.userPro.email);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="nombre"
        value={name}
        onChange={(event) => dispatch(changeName(event.target.value))}
      />
      <input
        type="text"
        name="username"
        placeholder="nombre de usuario"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(event) => dispatch(changeEmail(event.target.value))}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
