import React from 'react';


type ButtonType = {
    name: string
    callBack: () => void

    disable: boolean
}

export const Button = ({name,disable, callBack}: ButtonType) => {


    return (
        <button onClick={callBack}  disabled={disable} className={disable ? "disable" : "button"}
        >{name}</button>
    );
};

