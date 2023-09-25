import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { NAME, PASSWORD, PHONE_AND_EMAIL, USERNAME } from '../../../../\bconstants/regex';
import { BsCheckCircle} from "react-icons/bs";
import { ImCancelCircle} from 'react-icons/im';

function Input({ type, placeholder, name, changeAccount }) {
    const [ isEmpty, setIsEmpty ] = useState(true);
    const [ inputValue, setInputValue ] = useState("");
    const [ inputState, setInputState ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        changeAccount(e.target.name, e.target.value);
    }

    const handleInputOnblur = (e) => {
        const value = e.target.value;
        let regex = null;

        switch(e.target.name) {
            case "phoneAndEmail": regex = PHONE_AND_EMAIL; break;
            case "name": regex = NAME; break;
            case "username": regex = USERNAME; break;
            case "password": regex = PASSWORD; break;
            default: console.log();
        }
        if(!regex.test(value)) {
            console.log(`${e.target.name}, 매칭되지 않음`);
            setInputState(<><ImCancelCircle /></>);
            return;
        }
        setInputState(<><BsCheckCircle /></>);
    }

    const handleInputOnFocus = () => {
        setInputState("");
    }

    useEffect(() => {
        setIsEmpty(!inputValue);
    }, [inputValue]);

    return (
        <div css={S.SLayout}>
            <label css={S.SInput(isEmpty)}>
                <input type={type} name={name} onChange={handleInputChange} onBlur={handleInputOnblur} onFocus={handleInputOnFocus}/>    {/* onBlur : 포커스를 벗어났을때 */}
                <span>{placeholder}</span>
            </label>
            <div css={S.SStateBox}>
                {inputState}
            </div>
        </div>
    );
}

Input.defaultProps = {
    type: "text",
    placeholder: "",
    name: ""
}

export default Input;