import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Employee } from './model/Employee';

import CounterComponent from './components/CounterComponent'

interface IMyProps {
    empAge?: number;
}

interface IMyState {
    empName?: string;
}

export default class App extends React.Component<IMyProps, IMyState>{

    constructor(props: IMyProps) {
        super(props);

        // 測試 Typescript 物件
        let empVO = new Employee();
        console.log("empVO", empVO);
        empVO.empName = 'RogerXXX';
        empVO.empAge = +'18';
        console.log("empVO", empVO);
        console.log("Employee.EMP_STATUS >>> ", Employee.EMP_STATUS);
        // console.log("empVO.EMP_STATUS >>> ", empVO.EMP_STATUS); // 會壞，無法用Object訪問
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <CounterComponent/>
                </header>
            </div>
        );
    }
}
