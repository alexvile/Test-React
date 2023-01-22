export const Controls = ({ options, onLeaveFeadback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button
            className="border"
            onClick={() => {
              onLeaveFeadback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
