import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  componentDidMount() {
    const stopCount = this.state.count;
    setInterval(
      () =>
        this.setState((state) => ({
          count:
            state.count + this.props.incrementValue <= stopCount * 10
              ? state.count + this.props.incrementValue
              : stopCount,
        })),
      this.props.incrementInterval
    );
  }

  render() {
    return <CounterDisplay displayedCounter={this.state.count} />;
  }
}
