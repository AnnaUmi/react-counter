import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState)
    }
    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                    <button disabled={this.props.counter.value === 0 ? 'disabled' : ''} className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)} >x</button>
                </div>
            </div>
        );
    };
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;
