import { NavLink } from "react-router-dom";

function NavItem({ to, children, socra }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : "")}
      to={to}
      socra={socra}
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
