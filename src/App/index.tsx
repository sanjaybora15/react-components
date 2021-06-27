import React from 'react';
import Counter from '../components/Counter';
import './index.scss';
import {useState} from "react";

const App = () => {
    const [count, setCount] = useState<number>(5);

    const onChangeHandler = (fieldName: string, value: number) => {
        setCount(value);
    }

  return (
    <div className="app-container">
        <Counter
            fieldName="counter"
            onChangeHandler={onChangeHandler}
            value={count}
        />
    </div>
  );
}

export default App;
