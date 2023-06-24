
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className="navigation_container">
                <nav className="navigation">
                    <Link to='/home' className="navigation_link">Home</Link>
                    <Link to='/productos' className="navigation_link">Nuestro Equipo</Link>
                    <Link to='/productos' className="navigation_link">Test psicológicos</Link>
                </nav>
                
                <div className="login_button_container">
                    <Link to='/login' className="login_button" >Iniciar Sesion</Link>    
                </div>

            </div>
        </>
    );
}
 
export default Navigation;