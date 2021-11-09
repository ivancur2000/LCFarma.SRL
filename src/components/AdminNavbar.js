import React from "react";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import { FaBars, FaUser } from "react-icons/fa";
import { useSession } from "../hooks/useSession";
import "../public/css/slidebar.css";

export const AdminNavbar = () => {
  const [userSession, handleCloseSession] = useSession();

  const { user, email } = userSession;

  return (
    <>
      <nav className="navbar slidebar navbar-expand-lg navbar-dark">
        <div className="w-100">
          <ul className="navbar-nav row-md justify-content-between">
            <a
              className="nav-item bars p-2 m-2 col-1"
              role="button"
              data-bs-toggle="offcanvas"
              aria-controls="slidebar"
              href="/#slidebar"
            >
              <FaBars className="text-light fs-4" />
            </a>
            <li className="nav-item dropdown col-2">
              <a
                role="button"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="menuDrop"
                href="/#"
              >
                <FaUser className="fs-4 m-2" />
                {user ? user : email}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="menuDrop"
              >
                <li>
                  <Link to="/perfil" className="dropdown-item">
                    Perfil
                  </Link>
                </li>
                <hr />
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={handleCloseSession}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <SideBar />
    </>
  );
};
