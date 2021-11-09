import { Link } from 'react-router-dom'
import './Sidebar.css'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="one"><div>菜单1</div></Link>
      <Link to="two"><div>菜单2</div></Link>
      <Link to="three"><div>菜单3</div></Link>
      <Link to="four"><div>菜单4</div></Link>
      <Link to="five"><div>菜单5</div></Link>
      <Link to="six"><div>菜单6</div></Link>
    </div>
  );
}