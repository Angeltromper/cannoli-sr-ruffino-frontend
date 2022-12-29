import NavResp from "../navResp/NavResp";
import './MobileNav.module.css';

function MobileNav({open}) {

    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
            <div className="container">
                <div className="columns">
                    <div className="nav-menu">
                        <NavResp/>
                    </div>
                </div>
            </div>
        </div>
    );
}



