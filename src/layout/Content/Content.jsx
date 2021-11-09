import { useEffect } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom'
import './Content.css'

function Default () {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/one');
  })
  return ('')
}
export default function Content () {
  return (
    <div className="content">
      <Routes>
        <Route index element={<Default />}></Route>
        <Route path="one" element="内容1"></Route>
        <Route path="two" element="内容二"></Route>
        <Route path="three" element="内容三"></Route>
        <Route path="four" element="内容四"></Route>
        <Route path="five" element="内容五"></Route>
        <Route path="six" element="内容六"></Route>
      </Routes>
    </div>
  );
}