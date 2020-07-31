import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import { Link } from 'react-router-dom';
// import ButtonLink from '../ButtonLink';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>        
    );
}

export default Menu