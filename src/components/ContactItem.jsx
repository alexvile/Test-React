export const ContactItem = ({ name, number, id, deleteById }) => {
  return (
    <li>
      <span className="mr-2 text-xl">{name}:</span>
      <span className="text-xl">{number}</span>
      <button
        onClick={() => {
          deleteById(id);
        }}
        className="m-1 p-1 bg-cyan-200 hover:bg-opacity-65 transition-opacity rounded-lg"
      >
        Delete
      </button>
    </li>
  );
};
