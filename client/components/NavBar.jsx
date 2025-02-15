import React, { useState }from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading.jsx";
import Reviews from "./Reviews.jsx";
import Complete from "./Complete.jsx";
import Profile from "./Profile.jsx";
import Search from "./Search.jsx";
import Main from "./Main.jsx";
import ToBeRead from "./ToBeRead.jsx";


// Displays the profile element and links to other components
// Main is what will display upon initial render
export default function NavBar() {

  const [openMenu, setOpenMenu] = useState(false);

  const setClassNames = num => {
    const classArr = ['m-item'];
    if (openMenu) classArr.push(`open-${num}`);
    return classArr.join(' ');
  }
  
  return (
    <Router>
      <div className="Menu">
        <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>Menu</div>
        <div className={setClassNames(1)}>
          <Link className="navLinks" onClick={() => setOpenMenu(false)}  to="/home">Home</Link>
        </div>
        <div className={setClassNames(2)}>
          <Link className="navLinks" onClick={() => setOpenMenu(false)}  to="/CurrentlyReading">Reading</Link>
        </div>
        <div className={setClassNames(3)}>
          <Link className="navLinks" onClick={() => setOpenMenu(false)}   to="/ToBeRead">To Be Read</Link>
        </div>
        <div className={setClassNames(4)}>
          <Link className="navLinks" onClick={() => setOpenMenu(false)}   to="/Complete">Complete</Link>
        </div>
        <div className={setClassNames(5)}>
          <Link className="navLinks" onClick={() => setOpenMenu(false)}  to="/Reviews">My Reviews</Link>
        </div>
        <div className={setClassNames(6)}>
          <Link className="navLinks" onClick={() => setOpenMenu(false)}  to="/Search">Search</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/home" component={Main} />
        <Route path="/CurrentlyReading" component={CurrentlyReading} />
        <Route path="/ToBeRead" component={ToBeRead} />
        <Route path="/Complete" component={Complete} />
        <Route path="/Reviews" component={Reviews} />
        <Route path="/Search" component={Search} />
      </Switch>
    </Router>
  );
}
