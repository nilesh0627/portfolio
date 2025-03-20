import { useState } from "react";
import Button from '@mui/material/Button';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { CgGitFork } from "react-icons/cg";
import { NAVBAR_ITEMS } from "../../utils/constants"
import {
  AiFillStar
} from "react-icons/ai";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          {Boolean(anchorEl) ? <IoMdClose /> : <IoMenuOutline />}
        </IconButton>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {
            NAVBAR_ITEMS.map(({ Icon, name, to }) => <MenuItem onClick={handleMenuClose}><NavItem key={name} Icon={Icon} name={name} to={to} /></MenuItem>)
          }
        </Menu>
      </section>
    </nav >
  );
}

export default NavBar;
