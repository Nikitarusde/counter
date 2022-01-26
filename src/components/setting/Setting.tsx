import React, {ChangeEvent} from 'react';
import {Button} from "../button/Button";

type SettingType = {
    onChangeCounterStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCounterEnd: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandlerSet: () => void
}

export const Setting = ({onChangeCounterStart, onChangeCounterEnd, onClickHandlerSet}: SettingType) => {


    return (
        <div className={"setting"}>

                <div className={"blockInput"}>
                    <div className={"blockText"} >Max<input type="number" className={"input"} onChange={onChangeCounterEnd}/></div>
                    <div className={"blockText"}>Min <input type="number" className={"input"} onChange={onChangeCounterStart}/></div>
                </div>
                <Button name={"Set"} callBack={onClickHandlerSet}/>

        </div>
    );
};

