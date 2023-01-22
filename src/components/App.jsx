import React from 'react';
import { Controls } from './Controls/Controls';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getState = () => {
    return Object.keys(this.state);
  };
  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    let countTotalFeedback = good + neutral + bad;
    let countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    return (
      <Section>
        {countTotalFeedback === 0 ? (
          <div>No Statistic</div>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        )}
        <Controls
          options={this.getState()}
          onLeaveFeadback={this.leaveFeedback}
        />
      </Section>
    );
  }
}

export { App };
