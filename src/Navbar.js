import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 


        <nav className="navbar">
            <ul>
                <li> <Link className="link" to="/"> Home </Link></li>
                <li> <Link className="link" to="/create"> CReate </Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;