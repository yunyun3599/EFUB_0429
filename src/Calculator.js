import React,{Component, useState} from 'react';

function Calculator () {
    const [value, setValue] = useState(0);
    return(
        <div>
            <b>Count</b>
            <p>값: {value}</p>
            <button onClick = {() => setValue(value+1)}>plus</button>
            <button onClick = {() => setValue(value-1)}>minus</button>
        </div>
    );
}
export default Calculator;