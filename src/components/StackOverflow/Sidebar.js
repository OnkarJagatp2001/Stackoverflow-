import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import { Star, Work } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./css/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link>Home</Link>
          </div>
          <div className="sidebar-option">
            <Link>PUBLIC</Link>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <Link>Ouestion</Link>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Star />
                <Link>Explore Collectives</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
              <div className="link-tag">
                <Link>Ouestion</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
             <p>TEAMS</p>
             <div className="link-tag">
                <Work/>
                <Link>Compaines</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
