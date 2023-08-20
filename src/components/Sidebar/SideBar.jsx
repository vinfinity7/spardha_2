import React from "react";
import "../../App.css"
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaFootballBall, FaFutbol, FaTableTennis, FaVolleyballBall, FaBasketballBall ,  } from "react-icons/fa";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/football",
    name: "Football",
    icon: <FaFutbol />,
  },
  {
    path: "/rugby",
    name: "Rugby",
    icon: <FaFootballBall />,
  },
  {
    path: "/ttenis",
    name: "Table Tennis",
    icon: <FaTableTennis />,
  },
  {
    path: "/volleyball",
    name: "VolleyBall",
    icon: <FaVolleyballBall/>,
  },
  {
    path: "/basketball",
    name: "BasketBall",
    icon: <FaBasketballBall />,
  },
  {
    path: "/cricket",
    name: "Cricket",
    icon: <FaBasketballBall />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="main-container">
        <div

           style={{width: isOpen ? "20vw" : "5vw", }} 
          className={`sidebar `}
        >
          <div className="top_section">
            

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  
                    {isOpen && (
                      <div>
                        {route.name}
                      </div>
                    )}
                  
                </NavLink>
              );
            })}
          </section>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
