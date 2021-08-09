import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a> Hello, {name}! you are{" "}
      {loggedIn ? "Logged in!" : "Anonymouse!"}
    </header>
  );
};

export default Header;
