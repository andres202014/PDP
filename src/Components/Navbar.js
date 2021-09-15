import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to= "/" 
                        activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/login"
                        activeClassName="active">login</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/Acerca-del-juego"
                        activeClassName="active">Info juego</NavLink>
                    </li>
                    <li>
                        <NavLink to= "/Jugar"
                        activeClassName="active">Jugar</NavLink>
                    </li>
                    
                </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;