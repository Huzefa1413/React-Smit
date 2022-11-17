import './DarkLightMode.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function DarkLightMode() {
    const [lit, setLit] = useState(true);
    const [value, setValue] = useState(0);
    return (
        <div className={`room ${(lit) ? 'lit' : 'dark'}`}>
            <h1>Value: {value}</h1>
            <div>
                <button className="counter" onClick={() => { setValue(value + 1) }}>+</button>
                <button className="counter" onClick={() => { setValue(value - 1) }}>-</button>
            </div>
            <button className="toggle" onClick={() => { setLit(!lit) }}>{(lit) ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
        </div>
    );
}

export default DarkLightMode;
