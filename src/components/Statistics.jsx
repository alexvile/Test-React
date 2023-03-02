export const Statistics = ({
  positive,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul>
        <li>Positive: {positive}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
      </ul>
      <p>Total: {total} votes</p>
      <p>Positive percent: {positivePercentage}%</p>
    </div>
  );
};
