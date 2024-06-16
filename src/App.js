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
import Protected from "./components/Protected";
import Login from "./components/Login";
import Api from "./components/Api";

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
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/api">API</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/*" element={<Protected cmp={Page404} />} />
          <Route path="/" element={<Protected cmp={Home} />} />
          <Route path="/about" element={<Protected cmp={About} />} />
          <Route path="/jobs" element={<Protected cmp={Jobs} />} />
          <Route path="/jobs/:jobtype" element={<Protected cmp={JobsTypes} />} />
          <Route path="/filter" element={<Protected cmp={Filter} />} />
          <Route path="/contactus/" element={<Protected cmp={ContactUs} />}>
            <Route path="ceo" element={<Protected cmp={Ceo} />} />
            <Route path="manager" element={<Protected cmp={Manager} />} />
            <Route path="staff" element={<Protected cmp={Staff} />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/api" element={<Api/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
