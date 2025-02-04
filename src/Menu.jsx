import {useSelector} from "react-redux";

function Menu() {
  const menu = useSelector((state) => state);

  return (
    <ul className="menu">
      <li>
        <a href="#">{menu.nav1}</a>
      </li>
      <li>
        <a href="#">{menu.nav2}</a>
      </li>
      <li>
        <a href="#">{menu.nav3}</a>
      </li>
    </ul>
  );
}

export default Menu;
