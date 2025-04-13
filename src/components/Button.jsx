import { useTheme } from "../../themes/ThemeContext";

const Button = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default Button;
