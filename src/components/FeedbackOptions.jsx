export const FeedbackOptions = ({ optionLabels, onLeaveFeedback }) => {
  return (
    <ul>
      {optionLabels.map(el => (
        <li key={el} className="my-1">
          <button
            onClick={() => {
              onLeaveFeedback(el);
            }}
            className="bg-red-200 hover:opacity-70 p-1 rounded-md transition-colors text-cyan-800 "
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};
