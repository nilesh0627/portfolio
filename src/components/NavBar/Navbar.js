import { useState } from "react";
import Button from '@mui/material/Button';
import { CgGitFork } from "react-icons/cg";
import { NAVBAR_ITEMS } from "../../utils/constants"
import {
  AiFillStar
} from "react-icons/ai";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={navColour ? "sticky" : "navbar"}
    >
      <Link className="logo primary" to="/">{"</NM>"}</Link>
      <section className="navbar-menu-items">
        {
          NAVBAR_ITEMS.map(({ Icon, name, to }) => <NavItem key={name} Icon={Icon} name={name} to={to} />)
        }
        <div className="fork-btn">
          <Button
            href="https://github.com/nilesh0627/portfolio"
            target="_blank"
            className="fork-btn-inner"
          >
            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
            <AiFillStar style={{ fontSize: "1.1em" }} />
          </Button>
        </div>
      </section>
    </nav >
  );
}

export default NavBar;
