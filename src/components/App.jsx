import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
export const App = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionLabels = Object.keys({ positive, neutral, bad });

  const leaveFeedback = option => {
    switch (option) {
      case 'positive':
        setPositive(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  let total = positive + neutral + bad;
  let positivePercentage = Math.round((positive / total) * 100);
  return (
    <div>
      <h2 className="text-2xl">Leave your feedback</h2>
      <FeedbackOptions
        optionLabels={optionLabels}
        onLeaveFeedback={leaveFeedback}
      />
      <h2 className="text-2xl">Statistics</h2>
      {total > 0 ? (
        <Statistics
          positive={positive}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <p>No statistics yet</p>
      )}
    </div>
  );
};
