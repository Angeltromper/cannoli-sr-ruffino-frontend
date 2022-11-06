import {useCannoliContext} from "../../../../context/CannoliContext";
import {getPreviousLetter} from '../NextBackButtonLogic';
import backIcon from '../../../../assets/icons/navIcons/back.png';
import '../NextBackButton-module.css';

function BackButton() {

    const {letter, setLetter} = useCannoliContext();

    return (
        <button className="nextbackbutton" onClick={() => setLetter(getPreviousLetter(letter))}
                disabled={letter === "A"}>
            <img src={backIcon} alt="Back button"/>
        </button>
    )
}

export default BackButton;