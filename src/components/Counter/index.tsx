import * as React from "react";
import {Fragment} from "react"
import "./styles.scss";

enum InputType {
    NUMBER = "number"
}

interface CounterProps {
    fieldName: string;
    value: number;
    onChangeHandler: (fieldName: string, value: number) => void;
    maxValue?: number;
    errorMsg?: string;
}

const defaultMaxValue: number = 1000;
const defaultMinValue: number = 1;

const Counter: React.FC<CounterProps> = (props) => {
    const maxValue = props.maxValue ? props.maxValue : defaultMaxValue;
    const onIncrementClick = () => {
        if (props.value < maxValue) {
            props.onChangeHandler(props.fieldName, Number(props.value) + 1)
        } 
    }

    const onDecrementClick = () => {
        if (props.value > defaultMinValue) {
            props.onChangeHandler(props.fieldName, Number(props.value) - 1)
        }
    }
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) <= maxValue) {
            props.onChangeHandler(props.fieldName, Number(event.target.value))
        }
    }
    return (
        <Fragment>
            <div className="counter-container">
                <div className="counter">
                    <button className="btn-decrement btn-left" onClick={() => onDecrementClick()}>-</button>
                        <input
                            type={InputType.NUMBER}
                            name={props.fieldName}
                            value={props.value ? props.value : 1}
                            min={defaultMinValue}
                            max={maxValue}
                            onChange={(e) => handleOnChange(e) }
                        />
                    <button className="btn-increment btn-right" onClick={() => onIncrementClick()}>+</button>
                </div>
                {
                    props.errorMsg &&
                    <p className="error-message">{props.errorMsg}</p>
                }
            </div>
        </Fragment>
    );
};

export default Counter;