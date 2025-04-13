import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTheme } from "../../themes/ThemeContext";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";
import Button from "../components/Button";

const RoutesApp = () => {
  const { theme } = useTheme();
  return (
    <Router>
      <section className={`App ${theme}`}>
        <div className="content">
          <header className="App-header">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/myjob">MyJob</Link>
            </nav>
            <Button />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myjob" element={<MyJob />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
};

export default RoutesApp;
