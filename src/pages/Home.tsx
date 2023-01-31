import { useAuthContext } from "../contexts/AuthContext/AuthContext";

export const Home = () => {
  const { username } = useAuthContext();
  return <h1>Welcome, {username}!</h1>;
};
