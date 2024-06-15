import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Jobs from "./components/Jobs";
import JobsTypes from "./components/JobsTypes";
import "./App.css";
import Filter from "./components/Filter";
import ContactUs from "./components/ContactUs";
import Ceo from "./components/Ceo";
import Manager from "./components/Manager";
import Staff from "./components/Staff";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/filter">Filter</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobtype" element={<JobsTypes />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contactus/" element={<ContactUs />}>
            <Route path="ceo" element={<Ceo />} />
            <Route path="manager" element={<Manager />} />
            <Route path="staff" element={<Staff />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
