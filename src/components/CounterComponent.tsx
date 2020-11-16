import React from 'react';

import './CounterComponent.css'

import { connect } from 'react-redux'; // npm install @types/react-redux

class CounterComponent extends React.Component<any, any> {

    // state = { count: 0 }

    constructor(props: any) {
        super(props);
    }

    /* STEP 1. trigger UI */
    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // });

        this.props.dispatch({ type: 'INCREMENT' /*Action*/ }); /* STEP 2. 發送Action，之後reducer接收到 */
        
        // console.log("INCREMENT → CounterComponent props", this.props); // 無法印出正確的值，因為 dispatch 到 redux 是非同步

        // 延遲一下才可顯示正確的值
        setTimeout(() => {
            console.log("INCREMENT → CounterComponent props", this.props);
        }, 200);
    }

    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // });

        this.props.dispatch({ type: 'DECREMENT' });

        // console.log("INCREMENT → CounterComponent props", this.props); // 無法印出正確的值，因為 dispatch 到 redux 是非同步

        // 延遲一下才可顯示正確的值
        setTimeout(() => {
            console.log("INCREMENT → CounterComponent props", this.props);
        }, 200);
    }

    render() {
        return (
            <div>
                <div className="my-border">
                    <h2>Counter</h2>
                    <button type="button" className="my-btn" onClick={this.decrement}>-</button>

                    {/* 原本從元件自己的state取得 */}
                    {/* <span>{this.state.count}</span> */}

                    {/* 改從props中取得 redux 傳入的值 */}
                    <span>{this.props.hitCountA}</span>

                    <button type="button" className="my-btn" onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

// 取代掉下面這行
// export default Counter;

const mapStateToProps = (state: any) => {
    console.log(" CounterComponent mapStateToProps called. ");
    return {
        hitCountA: state.hitCount
    };
}
export default connect(mapStateToProps)(CounterComponent);