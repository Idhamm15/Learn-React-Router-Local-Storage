import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import './Nav.css';

function Nav({title}) {
  const navigate = useNavigate();

  function handlerAction(type) {
    switch (type) {
      case 'login':
        navigate('/login')
      break;
      case 'logout':
        localStorage.removeItem('token')
        navigate('/login')
      break;  
    }
  }
  return (
    <div id="nav">
      <div id="leftNav">
        <h2>{title}</h2>
      </div>
      <ul id="rightNav">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/animals">Binatang</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        {
          localStorage.getItem('token') == 'adaTokenNih' ? (
            <li>
              <a onClick={(e) => handlerAction('logout')}>Logout</a>
            </li>
          ) : (
            <li>
              <a onClick={(e) => handlerAction('login')}>Login</a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Nav