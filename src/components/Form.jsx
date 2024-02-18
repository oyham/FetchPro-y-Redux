import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", formData.name);
    console.log("Nombre de usuario:", formData.username);
    console.log("Email:", formData.email);
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
