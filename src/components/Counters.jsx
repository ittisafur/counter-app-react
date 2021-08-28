import React, { Component } from "react";

class Counters extends Component {
  state = {
    counters: [
      {
        id: this.randomNumber(Date.now()),
        value: 0,
      },
      {
        id: this.randomNumber(Date.now()),
        value: 0,
      },
      {
        id: this.randomNumber(Date.now()),
        value: 0,
      },
      {
        id: this.randomNumber(Date.now()),
        value: 0,
      },
    ],
  };
  randomNumber(number) {
    return Math.floor(Math.random() * number);
  }
  handleIncrement = (e) => {
    // const bool = this.state.counters.findIndex((c) => c.id == e.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(e);
    counters[index].value++;
    this.setState({ counters });
    // console.log(counters, index);
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((c) => c.id == counter.id);
    if (counters[index].value <= 0) return;
    counters[index].value--;
    this.setState({ counters });
    console.log(counter);
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };
  render() {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {this.state.counters.map((counter) => (
          <div
            className="space-y-2 bg-gray-800 shadow-sm flex-col rounded-md flex items-center justify-center h-32"
            key={counter.id}
          >
            <div className="text-3xl text-gray-100">{counter.value}</div>
            <div className="flex gap-3">
              <button
                className="px-6 py-1 rounded bg-gray-700 text-gray-100 hover:shadow-lg transition duration-200 ease-in"
                onClick={() => this.handleIncrement(counter)}
              >
                +
              </button>

              <button
                disabled={counter.value == 0}
                className={`${
                  counter.value == 0
                    ? "disabled:opacity-50 px-6 py-1 rounded bg-gray-700 text-gray-100 hover:shadow-lg transition duration-200 ease-in"
                    : "px-6 py-1 rounded bg-gray-700 text-gray-100 hover:shadow-lg transition duration-200 ease-in"
                } `}
                onClick={() => this.handleDecrement(counter)}
              >
                -
              </button>

              <button
                className="px-6 py-1 rounded bg-gray-700 text-gray-100 hover:shadow-lg transition duration-200 ease-in"
                onClick={() => this.handleDelete(counter)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
