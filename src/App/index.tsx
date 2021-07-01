import React from 'react';
import Counter from '../components/Counter';
import './index.scss';
import {useState, useEffect} from "react";

const App = () => {
    const [count, setCount] = useState<number>(5);
    const onChangeHandler = (fieldName: string, value: number) => {
        setCount(value);
    }
    useEffect(() => {
      let timer = setTimeout(() => {
        saveCounterData()
      }, 300);
      return () => {
        clearTimeout(timer);
      }
    }, [count])

    const saveCounterData = () => {
      fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({count})
      }).then(res => {
        console.log(res)
      })
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
