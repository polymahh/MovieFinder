import {Link} from "react-router-dom"
import './Header.css'


function Header() {
    return (
      <>
      <div id="navigation" className="Navigation">
        <h1>MovieFinder</h1>
      <nav>
        <ul>
            <Link to="/moviefinder">
                <li>Home</li>
            </Link>
            <Link to="/moviefinder/about">
                <li>About</li>
            </Link>
            
        </ul>
        
      </nav>
      </div>
      
      </>
      
    );
  }
  
  export default Header;