import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }
    render() {

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    };
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "ptimary";
        return classes;
    }
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;
