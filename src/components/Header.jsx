import { useSelector } from "react-redux";

export function Header() {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <h2>Petición con fetch natívo ( tradicional )</h2>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    </header>
  );
}
