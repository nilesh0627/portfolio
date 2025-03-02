import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Box container className="footer">
      <Grid md="4" className="footer-copywright">
        <h3>Copyright © {year} NM</h3>
      </Grid>
      <Grid md="4" className="footer-copywright">
        <h3>Designed and Developed by Nilesh Mishra</h3>
      </Grid>
      <Grid md="4" className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/nilesh0627"
              style={{ Gridor: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/nilesh0627/"
              style={{ Gridor: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Grid>
    </Box>
  );
}

export default Footer;
