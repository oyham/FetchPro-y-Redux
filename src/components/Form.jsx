import { useState } from "react";
import { useSelector } from "react-redux";

export function Form() {
  const userPro = useSelector((state) => state.userPro);
  const [formData, setFormData] = useState({
    name: userPro.name,
    username: userPro.username,
    email: userPro.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ul = document.getElementById("data-ul");
    ul.querySelector(".name").textContent = formData.name;
    ul.querySelector(".username").textContent = formData.username;
    ul.querySelector(".email").textContent = formData.email;
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
        value={formData.email}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
