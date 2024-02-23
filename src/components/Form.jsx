import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserPro } from "../redux/userSlice";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch;

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
        value={formData.name}
        onChange={handleChange}
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
        onChange={(event) => dispatch(addUserPro(event.target.value))}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
