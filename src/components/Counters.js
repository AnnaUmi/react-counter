import React, { Component } from 'react';
import Counter from './Counter'
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };
    handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters })
    };
    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-n"
                >Reset</button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDelete={() => this.handleDelete(counter)}
                    />)}
            </div>
        );
    };
    handleDelete = (counter) => {
        const counters = this.state.counters.filter(c => c !== counter)
        this.setState({
            counters
        })
    }
    handleReset = () => {

    }
}

export default Counters;