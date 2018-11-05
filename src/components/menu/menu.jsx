import React, {Component} from 'react';
import { Link } from 'react-scroll';
import './menu.css';

class MenuComponent extends Component{
    render() {
        return ( 
        //menu da pagina
        <div className="menu">
            <div className="menu-menu-items">
                <div className="menu-item">
                    <Link
                    activeClass="active-about"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    About
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    activeClass="active-profile"
                    to="profile"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    Profile
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    activeClass="active-skills"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    Skills
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    activeClass="active-blog"
                    to="blog"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    Blog
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    activeClass="active-portfolio"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    Portfolio
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    activeClass="active-info"
                    to="agile-quote"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    Info
                    </Link>
                </div>
                <div className="menu-item">
                    <Link
                    activeClass="active-contact"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    Contact
                    </Link>
                </div>
            </div>
        </div>
        );
    }
}

export default MenuComponent;

