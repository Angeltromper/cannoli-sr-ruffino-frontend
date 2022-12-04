import {useCannoliContext} from "../../../context/CannoliContext;
import './NavPageTitle.css';

function NavPageTitle() {
    const {pageTitle} = useCannoliContext();
    return (
        <h1 className="mobile-title">{pageTitle}</h1>
    )
}

export default NavPageTitle;