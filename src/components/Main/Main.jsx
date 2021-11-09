import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import './Main.css'
export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Content />
    </div>
  );
}