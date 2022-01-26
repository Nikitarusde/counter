import React from 'react';


type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = ({name, callBack}: ButtonType) => {
    return (
        <button onClick={callBack} className={"button"}
        >{name}</button>
    );
};

